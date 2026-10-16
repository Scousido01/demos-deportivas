#!/usr/bin/env python3
"""Captura una web o una demo entera (página completa) y, si se pide, su PDF.

Uso:  python3 scripts/captura.py <url o ruta a index.html> <salida.png> [--movil] [--pdf salida.pdf]

Usa Playwright (pip install playwright) con el Chrome que encuentre: variable CHROME, chromium o
google-chrome en el PATH, las rutas normales de Windows y Mac, o el Chromium de Playwright de las
sesiones en la nube. Recorre la página con scroll antes de capturar para que carguen las fotos
diferidas y los efectos. --movil emula un móvil de verdad (390 px), que no es lo mismo que una
ventana estrecha: así sí vale para decidir si una web se ve bien en el móvil.
Captura con prefers-reduced-motion: en las demos, el scroll guiado sale como imagen fija en vez
de un hueco vacío.
"""
import os, shutil, sys
from pathlib import Path
from playwright.sync_api import sync_playwright

RUTAS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
]

def chrome_bin():
    if os.environ.get("CHROME"): return os.environ["CHROME"]
    for n in ("chromium", "chromium-browser", "google-chrome", "chrome"):
        if shutil.which(n): return shutil.which(n)
    for r in RUTAS:
        if Path(r).exists(): return r
    pw = Path(os.environ.get("PLAYWRIGHT_BROWSERS_PATH", "/opt/pw-browsers"))
    for r in sorted(pw.glob("chromium-*/chrome-linux*/chrome")):
        return str(r)
    return None  # Playwright usará su propio Chromium si lo tiene instalado

def origen(o):
    # file:// exige ruta absoluta: con una relativa Chrome captura su página de error y no avisa.
    if o.startswith(("http://", "https://", "file://")): return o
    return Path(o).resolve().as_uri()

def main(o, png, movil=False, pdf=None):
    with sync_playwright() as p:
        nav = p.chromium.launch(executable_path=chrome_bin(), args=["--no-sandbox"])
        if movil:
            ctx = nav.new_context(**p.devices["iPhone 13"], ignore_https_errors=True, reduced_motion="reduce")
        else:
            ctx = nav.new_context(viewport={"width": 1280, "height": 900}, ignore_https_errors=True,
                                  reduced_motion="reduce")
        pag = ctx.new_page()
        try:
            pag.goto(origen(o), wait_until="networkidle", timeout=45_000)
        except Exception as e:
            print(f"aviso: {str(e).splitlines()[0]}")
        alto = pag.evaluate("document.documentElement.scrollHeight")
        for y in range(0, alto, 600):
            pag.evaluate(f"window.scrollTo(0,{y})"); pag.wait_for_timeout(120)
        pag.evaluate("window.scrollTo(0,0)"); pag.wait_for_timeout(800)
        pag.screenshot(path=png, full_page=True)
        print(f"OK {png}")
        if pdf:
            pag.emulate_media(media="screen")
            pag.pdf(path=pdf, width="1280px", print_background=True)
            print(f"OK {pdf}")
        nav.close()

if __name__ == "__main__":
    a = sys.argv[1:]
    if len(a) < 2: sys.exit(__doc__)
    pdf = a[a.index("--pdf") + 1] if "--pdf" in a else None
    main(a[0], a[1], movil="--movil" in a, pdf=pdf)
