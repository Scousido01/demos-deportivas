# Nicho: gimnasio / box

Demo escaparate para gimnasios, boxes de CrossTraining y centros de entrenamiento funcional, con la marca ficticia "Forja Box". Estilo oscuro y enérgico: negro, naranja fuego y lima, titulares en Anton en mayúsculas, botón con pulso y tarifa destacada con borde en degradado.

- `config.js`: datos y textos (clases WOD, halterofilia, Hyrox y personal; tarifas; reservas que terminan en WhatsApp).
- `estilo.css`: tipografía y retoques visuales. Los colores salen de `config.js` y los efectos de `base/`.
- Logo provisional en `recursos/gimnasio/logo.svg` (se publica como `media/logo.svg`).

Ver la demo: `node scripts/construir.mjs nichos/gimnasio && npm run ver`.

## Recursos que faltan

Van en `recursos/gimnasio/` (se publican como `media/`). Cuando estén, cambia en `config.js` cada `img/*.svg` por su ruta `media/...`; los comentarios `// →` indican cuál. Fuentes con licencia comercial: Pexels, Mixkit, Unsplash; apunta el origen de cada uno.

| Archivo | Uso | Qué buscar |
|---|---|---|
| fotos/portada.jpg | Portada | "crossfit dark gym" |
| clips/portada.mp4 | Vídeo de portada en bucle | "gym workout slow motion" |
| fotos/wod.jpg + clips/wod.mp4 | Tarjeta WOD | "burpees group class", "box jump" |
| fotos/halterofilia.jpg + clips/halterofilia.mp4 | Tarjeta halterofilia | "olympic weightlifting snatch" |
| fotos/hyrox.jpg + clips/hyrox.mp4 | Tarjeta Hyrox | "sled push", "wall ball" |
| fotos/personal.jpg + clips/personal.mp4 | Tarjeta personal | "personal trainer coaching" |
| fotos/galeria-01.jpg … 08 | Galería | "barbell", "battle ropes", "kettlebells", "rowing machine", "pull ups" |
| secuencia/frame-001.jpg … | Scroll guiado (sustituye a los SVG) | un levantamiento de barra completo, 5-8 s |

Clips de 3-6 s, sin audio, 720p y menos de 2 MB. La secuencia se saca con el comando de `recursos/README.md`; después ajusta `scrollGuiado.ruta` a `.jpg` y `frames` al número real.
