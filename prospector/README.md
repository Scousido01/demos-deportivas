# Prospector deportivo

Encuentra cada día **un** negocio deportivo de Vigo y alrededores (gimnasio, club de pádel, box,
escuela, entrenador…) con la web rota, abandonada, anticuada o sin web, le prepara una demo con
la plantilla de este repo y **su propio contenido y fotos**, y deja un correo en borrador en
Gmail para que Sergio lo revise y lo envíe a mano.

Es la versión de Sergio del prospector de Roque (`roquesobrino/automatizaciones`, carpeta
`prospector/`), con tres cambios: busca nichos deportivos, genera la demo con `demos-deportivas`
en vez de las plantillas de hostelería, y corre en la nube (búsqueda web en vez del Chrome del Mac,
borrador en Gmail en vez de Mail.app). No es un enviador masivo: uno al día, escrito uno a uno.

## Cómo funciona

1. Elige una categoría y una zona que no haya buscado (`data/vistos.json`).
2. Busca candidatos en la web y en directorios (Páxinas Galegas, Playtomic…).
3. Descarta cadenas, cerrados y webs ya buenas. Analiza la web con `fetch.py` + `scan.py` y la mira
   con `captura.py`, en escritorio y en móvil.
4. Crea `clientes/<slug>/` con `scripts/nueva-demo.mjs`, la rellena con sus datos y fotos, la
   construye y la captura en PNG y PDF.
5. Deja **un** borrador en Gmail con el PDF adjunto. Nunca envía nada.
6. Anota todo en `data/vistos.json` y abre un PR en borrador con el lead.

El prompt completo, que es el cerebro del proceso, está en [`tarea-diaria.md`](tarea-diaria.md).
Si quieres cambiar cómo se comporta, se cambia ahí.

## Ficheros

| Ruta | Qué es |
|---|---|
| `tarea-diaria.md` | El prompt de la tarea diaria. |
| `config.json` | Precio de la web que se ofrece en el correo. |
| `data/vistos.json` | A quién se ha mirado ya y con qué veredicto. Arranca con los leads de `leads-vigo.md`. |
| `leads/AAAA-MM-DD-<slug>/ficha.md` | Ficha de cada lead: contacto, señales, fuentes y correo. Las capturas y el PDF no se suben. |
| `scripts/fetch.py` | Descarga con curl. Distingue viva / bloqueada / error / no encontrada / muerta y certificado roto. (De Roque.) |
| `scripts/scan.py` | Puntúa lo anticuada que está una web y detecta el CMS. (De Roque.) |
| `scripts/imagenes.py` | Descarga las fotos grandes de la web del negocio. (De Roque.) |
| `scripts/hoja.py` | Hoja de contactos con las fotos, para mirarlas antes de usarlas. (De Roque.) |
| `scripts/captura.py` | Captura página completa (escritorio o `--movil`) y PDF, con Playwright. Nuevo. |

## Usarlo a mano

Desde la raíz del repo (necesita Python 3, Node y `python3 -m pip install playwright pillow`):

```
python3 prospector/scripts/captura.py https://web-del-negocio.es /tmp/actual.png
python3 prospector/scripts/captura.py https://web-del-negocio.es /tmp/movil.png --movil
python3 prospector/scripts/imagenes.py https://web-del-negocio.es clientes/<slug>/img 8
python3 prospector/scripts/hoja.py clientes/<slug>/img
node scripts/construir.mjs clientes/<slug>
python3 prospector/scripts/captura.py dist/<slug>/index.html demo.png --pdf demo.pdf
```

En Windows, `captura.py` encuentra Chrome en su ruta normal; si no, pon la ruta en la variable `CHROME`.

## Reglas que no se saltan

- **Nunca envía nada.** Deja el borrador; envía Sergio. Nada de envíos masivos (art. 21 LSSI).
- **No se inventan datos** del negocio: ni años, ni socios, ni precios, ni horarios.
- **Se mira antes de afirmar**: el OK de un script no prueba nada.
- **Fotos de Google o de directorios**: a veces son de otro negocio. Mira la hoja y ante la duda, fuera.

## Trampas heredadas del prospector de Roque

- Un `403`/`406` es Cloudflare bloqueando al bot, no una web caída. Un `404` suele ser una subpágina.
- Las capturas en ventana estrecha mienten sobre el móvil: usa `--movil`, que emula un teléfono.
- `file://` exige ruta absoluta; `captura.py` ya la convierte.
