# Nicho: club amateur (pádel)

Demo para un club de pádel de barrio (Club Pádel Ribera, ficticio): tema claro en azul y lima,
escudo con pala y bola, noticias, liga por equipos y calendario. Sirve igual para otro deporte
cambiando textos y datos en `config.js`.

## Qué añade sobre la base
Además de las secciones de `base/` (portada, quiénes somos, servicios, horarios, tarifas, galería,
reservas y contacto), `nicho.js` pinta las secciones propias de un club a partir de `config.js`:

| Sección | Campo en `config.js` |
|---|---|
| Próxima eliminatoria de la liga por equipos con cuenta atrás y botón "Añadir a mi calendario" (.ics) | `partidos`, `equipoPrincipal` |
| Últimos resultados (parejas ganadas) con victoria, empate y derrota en colores | `partidos[].resultado` |
| Noticias con filtro por categoría (View Transitions si el navegador las soporta) | `noticias` |
| Calendario agrupado por mes y filtrable por equipo | `partidos` |
| Clasificación con el club resaltado | `clasificacion` |
| Cinta de patrocinadores | `patrocinadores` |

Si un campo falta o está vacío, su sección no aparece. `fechaDemo` fija el "hoy" de la demo para
que el próximo partido no caduque cuando se enseñe semanas después.

## Ver y adaptar
```bash
node scripts/construir.mjs nichos/club        # genera dist/club
node scripts/nueva-demo.mjs club cd-pepe      # copia el nicho a clientes/cd-pepe
```
En un cliente se cambian `config.js` (nombre, colores, partidos, noticias, clasificación, cuotas,
contacto) y `img/escudo.svg`. Las imágenes son los marcadores de `base/img`; las fotos reales van
en `recursos/club/` o en `img/` del cliente.

## Requisito en base
`nicho.js` se carga con `<script src="nicho.js"></script>` justo después de `js/app.js` en
`base/index.html` (con un `base/nicho.js` vacío por defecto, igual que `estilo.css`).
