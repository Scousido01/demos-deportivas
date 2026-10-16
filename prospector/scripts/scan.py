#!/usr/bin/env python3
"""Escanea las webs de los negocios de Vigo y puntua lo obsoletas que estan."""
import json, re, sys, collections
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urlparse
sys.path.insert(0, "scripts")
from fetch import traer

ANIO = 2026

CAT_FUERA = {"office=government","amenity=post_office","amenity=bank","amenity=townhall",
             "amenity=police","amenity=fire_station","amenity=hospital","amenity=courthouse",
             "amenity=public_building","amenity=university","amenity=bus_station"}
DOM_FUERA = ("correos.es","vitrasa.es","renfe.com","adif.es","xunta.gal","xunta.es","aena.es",
             "mercadona.es","lidl.es","carrefour.es","aldi.es","dia.es","eroski.es","gadisa.es",
             "froiz.com","alcampo.es","decathlon.es","zara.com","inditex.com","mcdonalds.es",
             "burgerking.es","telepizza.es","dominos.es","starbucks.es","vodafone.es","movistar.es",
             "orange.es","yoigo.com","santander.es","bbva.es","caixabank.es","abanca.com",
             "sabadell.com","ing.es","openbank.es","unicaja.es","repsol.com","cepsa.com","galp.com")
AGREGADORES = ("facebook.com","instagram.com","linktr.ee","linktree.com","wa.me","beacons.ai",
               "tripadvisor.","thefork.","eltenedor.","booking.com","airbnb.","just-eat.",
               "glovoapp.com","ubereats.com","youtube.com","twitter.com","x.com","linkedin.com",
               "milanuncios.com","paginasamarillas.es","sites.google.com","blogspot.com","wordpress.com")

def dominio(u):
    try: h = urlparse(u).netloc.lower().split(":")[0]
    except Exception: return ""
    h = h[4:] if h.startswith("www.") else h
    p = h.split(".")
    return ".".join(p[-2:]) if len(p) >= 2 else h

def normaliza(u):
    u = (u or "").strip().strip('"').strip("'")
    if not u: return None
    if not u.startswith(("http://","https://")): u = "http://" + u
    try:
        p = urlparse(u)
        if not p.netloc or "." not in p.netloc: return None
        p.netloc.encode("idna")
    except Exception: return None
    return u

def senales(html, final, tls_roto):
    s, low = [], html.lower()
    if tls_roto: s.append(("certificado TLS invalido: aviso rojo en el navegador", 35))
    if not final.startswith("https"): s.append(("sin HTTPS", 25))

    if not re.search(r'<meta[^>]+name\s*=\s*["\']?viewport', low):
        s.append(("SIN VIEWPORT: ilegible en movil", 40))
    elif "@media" not in low and not any(x in low for x in ("bootstrap","tailwind","foundation.css")):
        s.append(("viewport pero sin CSS responsive detectable", 12))

    mj = re.search(r'jquery[.\-/_]?(\d+)\.(\d+)[\d.]*(?:\.min)?\.js', low)
    if mj and int(mj.group(1)) < 3: s.append((f"jQuery {mj.group(1)}.{mj.group(2)} (obsoleto)", 15))
    if re.search(r'<(embed|object)[^>]+(flash|shockwave)', low) or ".swf" in low: s.append(("Flash", 45))
    if re.search(r'UA-\d{4,}-\d', html) and "gtag(" not in low: s.append(("Analytics UA (apagado en 2023)", 20))
    if "<frameset" in low or re.search(r"<frame\s", low): s.append(("frames HTML", 45))
    if "<marquee" in low or "<blink" in low or 'bgcolor=' in low: s.append(("HTML de los 90 (marquee/bgcolor)", 20))

    tablas = len(re.findall(r"<table", low))
    if tablas >= 4 and "display:grid" not in low.replace(" ","") and "flex" not in low:
        s.append((f"maquetado con {tablas} <table>", 25))

    anios = [int(a) for a in re.findall(r'(?:©|&copy;|copyright)[^0-9]{0,25}((?:19|20)\d{2})', low)]
    anios = [a for a in anios if 1995 <= a <= ANIO]
    if anios and max(anios) <= ANIO - 3:
        s.append((f"copyright {max(anios)}", min(30, (ANIO - max(anios)) * 4)))
    return s

def cms_de(html):
    low = html.lower()
    g = re.search(r'<meta[^>]+name=["\']?generator["\']?[^>]+content=["\']([^"\']+)', low)
    if g: return g.group(1)[:60]
    for m in ("wix.com","squarespace","webnode","jimdo","1and1","ionos","godaddy","site123",
              "joomla","drupal","frontpage","dreamweaver","prestashop","wordpress"):
        if m in low: return m
    return ""

def analiza(e):
    t = e.get("tags", {})
    url = normaliza(t.get("website") or t.get("contact:website"))
    cat = next((f"{k}={t[k]}" for k in ("amenity","shop","office","craft","tourism","leisure","healthcare","club") if k in t), "")
    c = e.get("center", {})
    o = {"osm_id": f"{e['type']}/{e['id']}", "nombre": t.get("name",""), "categoria": cat,
         "web": url, "dominio": dominio(url or ""),
         "telefono": t.get("phone") or t.get("contact:phone") or "",
         "email": t.get("email") or t.get("contact:email") or "",
         "direccion": " ".join(filter(None, [t.get("addr:street",""), t.get("addr:housenumber",""), t.get("addr:city","")])).strip(),
         "lat": c.get("lat") or e.get("lat"), "lon": c.get("lon") or e.get("lon"),
         "clase": "prospecto", "estado": "", "code": 0, "final": "", "cms": "", "senales": [], "puntos": 0}

    if not url: o.update(clase="descartado", estado="url_invalida"); return o
    if cat in CAT_FUERA or any(x in o["dominio"] for x in DOM_FUERA):
        o.update(clase="descartado", estado="administracion_o_cadena"); return o
    if any(x in url.lower() for x in AGREGADORES):
        o.update(clase="sin_web_propia", estado="solo_redes", puntos=70,
                 senales=["no tiene web propia: solo redes sociales o agregador"]); return o

    r = traer(url)
    o.update(estado=r["estado"], code=r["code"], final=r["final"])
    if r["estado"] == "muerta":
        o.update(puntos=95, senales=["WEB CAIDA: el dominio no responde"]); return o
    if r["estado"] == "no_encontrada":
        o.update(puntos=85, senales=[f"WEB ROTA: devuelve {r['code']} hasta en la raiz"]); return o
    if r["estado"] == "error_servidor":
        o.update(puntos=80, senales=[f"servidor caido ({r['code']})"]); return o
    if r["estado"] == "bloqueada":
        o.update(puntos=0, senales=[]); return o     # viva pero no analizable, no puntua

    s = senales(r["html"], r["final"], r["tls_roto"])
    o.update(cms=cms_de(r["html"]), senales=[x[0] for x in s], puntos=sum(x[1] for x in s))
    return o

if __name__ == "__main__":
    els = json.load(open("data/vigo_raw.json"))["elements"]
    with ThreadPoolExecutor(max_workers=16) as ex:
        res = list(ex.map(analiza, els))
    cuenta = collections.Counter(x["dominio"] for x in res if x["dominio"])
    for x in res:
        if x["clase"] == "prospecto" and cuenta[x["dominio"]] >= 4:
            x.update(clase="descartado", estado=f"dominio_repetido_x{cuenta[x['dominio']]}")
    json.dump(res, open("data/scan.json","w"), ensure_ascii=False, indent=1)
    print("escaneados:", len(res))
