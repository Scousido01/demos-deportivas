# Recursos

Material compartido por nicho: fotos, clips, secuencias de imágenes y modelos 3D.
Al construir una demo, `recursos/<nicho>/` se copia como `media/` dentro de la demo,
así que en `config.js` se enlaza como `media/...`.

```
recursos/
├── gimnasio/
│   ├── secuencia/frame-001.jpg …   # scroll guiado (ahora hay SVG de marcador)
│   ├── clips/entreno.mp4           # microvídeos de las tarjetas (3-5 s, sin audio, < 2 MB)
│   └── fotos/…                     # 10-15 fotos para galería y portada
├── club/
└── entrenador/
```

## Pautas
- Fuentes gratuitas con licencia comercial: Pexels, Mixkit, Unsplash. Apunta el origen de cada recurso.
- Fotos a 1600 px de ancho como máximo, en `.jpg` o `.webp`.
- Secuencia de scroll: 60-120 frames de 1600×1000 en `.jpg` calidad 70. Se sacan de un clip con
  `ffmpeg -i clip.mp4 -vf "fps=24,scale=1600:-1" -q:v 4 secuencia/frame-%03d.jpg`.
- Modelos 3D en `.glb`, menos de 5 MB. Si no hay uno bueno, la sección se queda fuera.
