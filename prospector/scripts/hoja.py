#!/usr/bin/env python3
"""Monta una hoja de contactos con las fotos descargadas, para poder MIRARLAS.

Sin esto se acaba repartiendo por orden de fichero y el dormitorio termina
ilustrando "Ceremonias oficiales".

Uso:  python3 scripts/hoja.py <carpeta>/fotos  ->  <carpeta>/hoja.jpg
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw

def main(carpeta, salida=None):
    salida = salida or str(Path(carpeta).parent / "hoja.jpg")
    fs = sorted(Path(carpeta).glob("foto*.jpg"))
    if not fs:
        print("no hay fotos"); return
    C, W, H = 3, 420, 300
    filas = (len(fs) + C - 1) // C
    hoja = Image.new("RGB", (C * W, filas * (H + 26)), "white")
    d = ImageDraw.Draw(hoja)
    for i, f in enumerate(fs):
        im = Image.open(f); im.thumbnail((W, H))
        x, y = (i % C) * W, (i // C) * (H + 26)
        hoja.paste(im, (x + (W - im.width) // 2, y + 26))
        d.text((x + 8, y + 6), f.name, fill="black")
    hoja.save(salida, quality=88)
    print(f"{salida}  ({len(fs)} fotos)")

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
