# Demos deportivas

Plantilla y demos web para gimnasios, clubes y entrenadores personales. Cada demo es una web
estática (HTML, CSS y JS sin dependencias) que se genera a partir de una configuración.

## Crear una demo nueva en 5 comandos

```bash
node scripts/nueva-demo.mjs gimnasio box-norte      # 1. copia el nicho a clientes/box-norte
$EDITOR clientes/box-norte/config.js                # 2. pon nombre, colores, horarios, tarifas, WhatsApp
cp ~/Descargas/box-norte/* clientes/box-norte/img/  # 3. añade su logo y fotos
node scripts/construir.mjs clientes/box-norte       # 4. genera dist/box-norte
npx serve dist/box-norte                            # 5. revísala en http://localhost:3000
```

Para publicarla, sube `dist/box-norte` a Netlify, Vercel o GitHub Pages en su subdominio
(por ejemplo `box-norte.tudominio.com`). Con Netlify: `npx netlify deploy --dir dist/box-norte --prod`.

## Estructura

```
base/                 plantilla común
├── index.html        secciones: portada, quiénes somos, servicios, scroll guiado, horarios,
│                     tarifas, galería, modelo 3D, reservas, contacto con WhatsApp y mapa
├── css/base.css      estilos comunes, móvil primero
├── js/app.js         pinta la página leyendo config.js
├── js/efectos/       un archivo por efecto (ver abajo)
├── config.js         configuración de ejemplo con todos los campos comentados
├── estilo.css        vacío; cada nicho o cliente pone aquí su estilo
├── nicho.js          vacío; gancho para secciones propias del nicho (usa window.Demo)
└── img/              imágenes de marcador
nichos/               gimnasio, club, entrenador: config.js + estilo.css de cada nicho
clientes/             una carpeta por lead real (copia de un nicho con sus datos)
recursos/             fotos, clips, secuencias y modelos 3D por nicho
scripts/              nueva-demo.mjs y construir.mjs
dist/                 demos generadas (no se sube al repo)
```

**Regla clave:** los efectos viven solo en `base/`. Un nicho o un cliente cambia `config.js`,
`estilo.css` e imágenes, nunca el código de los efectos. Así una mejora en `base/` llega a todas
las demos la próxima vez que se construyen.

Al construir, se copia en este orden (lo último pisa a lo anterior): `base/`, después
`recursos/<nicho>/` como `media/`, y por último la carpeta de la demo.

## Efectos

| Archivo | Qué hace | Se activa con |
|---|---|---|
| `tilt.js` | Tarjetas que se inclinan con el ratón y reproducen un microvídeo al pasar por encima | `servicios[].video` (opcional) |
| `scroll-video.js` | Secuencia de imágenes en un canvas que avanza con el scroll, con textos encima | `scrollGuiado.frames > 0` |
| `reservas.js` | Reserva en 4 pasos con View Transitions; al confirmar abre WhatsApp con el resumen | `reservas` |
| `modelo-3d.js` | Modelo `.glb` con `<model-viewer>` y botones de color | `modelo3d.modelo` |

Todos respetan `prefers-reduced-motion`: sin inclinación, sin autorrotación y con el scroll guiado
convertido en una imagen fija. Cualquier sección cuyo campo esté vacío en `config.js` se oculta.

## Comandos útiles

```bash
node scripts/construir.mjs --todas     # regenera todos los nichos y clientes
node scripts/construir.mjs nichos/club # solo una demo
```

## Antes de enviar una demo

- Revisarla en móvil y escritorio (capturas).
- Comprobar el número de WhatsApp, el mapa y que no queden textos de ejemplo.
- Cambiar las imágenes de marcador por fotos reales y anotar su origen.
