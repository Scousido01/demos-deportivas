#!/usr/bin/env python3
"""Capa de descarga basada en curl: TLS del sistema, redirecciones y gzip resueltos.

Distingue los casos que importan y que un urlopen a secas confunde:
  viva / bloqueada (403,406,429: Cloudflare, no es que este muerta) /
  error_servidor (5xx) / no_encontrada (404 hasta en la raiz) /
  muerta (ni DNS ni conexion) + certificado TLS invalido como senal aparte.
"""
import subprocess, tempfile, os, re
from urllib.parse import urlparse

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
SEP = "|CURLSEP|"

def _curl(url, inseguro=False):
    fd, ruta = tempfile.mkstemp(suffix=".html")
    os.close(fd)
    cmd = ["curl", "-sL", "--compressed", "--max-time", "25", "--max-filesize", "3000000",
           "-A", UA, "-H", "Accept-Language: es-ES,es;q=0.9",
           "-o", ruta, "-w", f"%{{http_code}}{SEP}%{{url_effective}}", url]
    if inseguro: cmd.insert(1, "-k")
    try:
        p = subprocess.run(cmd, capture_output=True, text=True, timeout=40)
        code, _, final = p.stdout.partition(SEP)
        try:
            with open(ruta, "rb") as f: cuerpo = f.read(800_000)
        except OSError: cuerpo = b""
        return int(code or 0), final or url, p.returncode, cuerpo
    except subprocess.TimeoutExpired:
        return 0, url, 28, b""
    finally:
        try: os.unlink(ruta)
        except OSError: pass

def _texto(cuerpo):
    enc = "utf-8"
    m = re.search(rb'charset=["\']?([\w-]+)', cuerpo[:4000], re.I)
    if m:
        try:
            enc = m.group(1).decode(); "".encode(enc)
        except Exception: enc = "utf-8"
    return cuerpo.decode(enc, "replace")

def raiz(url):
    p = urlparse(url)
    return f"{p.scheme}://{p.netloc}/"

def traer(url):
    """-> dict(estado, code, final, html, tls_roto, probo_raiz)"""
    tls_roto = False
    code, final, rc, cuerpo = _curl(url)
    if rc in (35, 51, 58, 59, 60, 77, 91):          # familia de fallos TLS de curl
        code, final, rc, cuerpo = _curl(url, inseguro=True)
        tls_roto = rc == 0 and code > 0

    probo_raiz = False
    # Una subpagina muerta no significa dominio muerto: reintenta la raiz.
    if (code in (0, 404, 410) or code >= 500) and urlparse(url).path not in ("", "/"):
        probo_raiz = True
        c2, f2, rc2, b2 = _curl(raiz(url), inseguro=tls_roto)
        if c2 and c2 < 400: code, final, rc, cuerpo = c2, f2, rc2, b2

    if code == 0:      estado = "muerta"
    elif code in (403, 406, 429): estado = "bloqueada"
    elif code >= 500:  estado = "error_servidor"
    elif code >= 400:  estado = "no_encontrada"
    else:              estado = "viva"
    return {"estado": estado, "code": code, "final": final, "tls_roto": tls_roto,
            "probo_raiz": probo_raiz, "html": _texto(cuerpo) if cuerpo else ""}
