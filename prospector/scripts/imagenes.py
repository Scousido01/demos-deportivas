#!/usr/bin/env python3
"""Descarga las fotos aprovechables de la web de un negocio.

Una demo sin fotos parece peor que la web vieja que quiere sustituir, sobre todo
en hosteleria, hoteles y eventos. Estas son SUS fotos, reutilizadas.

Uso:  python3 scripts/imagenes.py <url> <carpeta_destino> [cuantas]
"""
import re, sys, subprocess, io
from pathlib import Path
from urllib.parse import urljoin, urlparse
sys.path.insert(0, str(Path(__file__).resolve().parent))
from fetch import traer, UA
from PIL import Image

MIN_LADO, MIN_PIX = 500, 320_000     # descarta iconos, logos y espaciadores
FUERA = ("logo", "icon", "favicon", "sprite", "avatar", "placeholder", "spinner",
         "loader", "bandera", "flag", "cookie", "captcha", "pixel", "blank", "arrow")

def candidatas(html, base):
    urls = []
    urls += re.findall(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)', html, re.I)
    urls += re.findall(r'<img[^>]+src=["\']([^"\']+)', html, re.I)
    for ss in re.findall(r'<img[^>]+srcset=["\']([^"\']+)', html, re.I):
        urls += [p.strip().split()[0] for p in ss.split(",") if p.strip()]
    urls += re.findall(r'background-image\s*:\s*url\(["\']?([^"\')]+)', html, re.I)
    vistas, out = set(), []
    for u in urls:
        u = urljoin(base, u.strip())
        if not u.startswith("http") or u.lower().endswith((".svg", ".gif")): continue
        if any(x in u.lower() for x in FUERA): continue
        if u in vistas: continue
        vistas.add(u); out.append(u)
    return out

def baja(url):
    p = subprocess.run(["curl", "-sL", "--max-time", "20", "--max-filesize", "12000000",
                        "-A", UA, url], capture_output=True, timeout=35)
    return p.stdout if p.returncode == 0 else b""

GMAPS = "https://lh3.googleusercontent.com/"

def desde_maps(fichero, destino, cuantas=6, tam="w1600-h1200-k-no"):
    """Descarga fotos de la ficha de Google Maps.

    El fichero lleva una linea por foto: o la URL entera, o solo la parte que
    sigue al host (que es lo que cabe sin truncarse al sacarla del navegador con
    javascript_tool). El sufijo `=w...-h...` de las URLs de Google se puede
    reescribir para pedir la foto grande: en la pagina vienen a 224 o 408 px.
    """
    destino = Path(destino); destino.mkdir(parents=True, exist_ok=True)
    lineas = [l.strip() for l in Path(fichero).read_text().splitlines() if l.strip()]
    urls = []
    for l in lineas:
        base = l if l.startswith("http") else GMAPS + l
        base = re.sub(r"=[\w-]+$", "", base)          # fuera el sufijo que traiga
        urls.append(f"{base}={tam}")
    return _descarga(urls, destino, cuantas, origen="maps")

def main(url, destino, cuantas=5):
    destino = Path(destino); destino.mkdir(parents=True, exist_ok=True)
    r = traer(url)
    if r["estado"] != "viva":
        print(f"la web no responde ({r['estado']}), no hay fotos que sacar"); return []
    base = r["final"]

    return _descarga(candidatas(r["html"], base), destino, cuantas, origen="web")

def _descarga(urls, destino, cuantas, origen="web"):
    """Baja, filtra y guarda. Continua la numeracion para poder sumar fuentes."""
    destino = Path(destino); destino.mkdir(parents=True, exist_ok=True)
    ya = sorted(destino.glob("foto*.jpg"))
    n = len(ya)
    huellas = set()
    for f in ya:                                        # para no repetir foto
        try: huellas.add(Image.open(f).resize((16, 16)).convert("L").tobytes())
        except Exception: pass

    buenas = []
    for u in urls:
        if len(buenas) >= cuantas: break
        raw = baja(u)
        if len(raw) < 12_000: continue
        try:
            im = Image.open(io.BytesIO(raw)); im.load()
        except Exception: continue
        w, h = im.size
        if min(w, h) < MIN_LADO or w * h < MIN_PIX: continue
        if w / h > 3.5 or h / w > 3.5: continue          # banners y tiras finas
        im = im.convert("RGB")
        huella = im.resize((16, 16)).convert("L").tobytes()
        if huella in huellas: continue                   # ya la tenemos
        huellas.add(huella)
        im.thumbnail((1600, 1600), Image.LANCZOS)
        nombre = f"foto{n + len(buenas) + 1}.jpg"
        im.save(destino / nombre, "JPEG", quality=84, optimize=True)
        buenas.append({"archivo": nombre, "origen": u, "ancho": w, "alto": h,
                       "apaisada": w >= h, "fuente": origen})
        print(f"  {nombre}  {w}x{h}  [{origen}]")

    if not buenas: print(f"  ninguna foto aprovechable en {origen}")
    return buenas

if __name__ == "__main__":
    if sys.argv[1] == "--maps":
        desde_maps(sys.argv[2], sys.argv[3], int(sys.argv[4]) if len(sys.argv) > 4 else 6)
    else:
        main(sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 5)
