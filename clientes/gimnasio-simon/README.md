# Demo: Gimnasio Simón (Vigo)

Lead nº 1 de gimnasios en `leads-vigo.md`. Gimnasio clásico de artes marciales y fitness en Rúa de Urzáiz 92, abierto en 1992 y dirigido por Simón González (13 veces campeón del mundo de kickboxing).

Creada con `node scripts/nueva-demo.mjs gimnasio gimnasio-simon`. Ver: `node scripts/construir.mjs clientes/gimnasio-simon && npx serve dist/gimnasio-simon`.

## Estilo

Más tradicional que Forja Box: cartel de velada antigua. Fondo tostado oscuro, crema, rojo de esquina de ring y dorado de cinturón; titulares en Playfair Display (serifa), filetes dobles, sello "Est. 1992 · Vigo" en la portada y antetítulo "Desde 1992" en cada sección. Seis disciplinas en rejilla de 3, cada tarjeta con microvídeo al pasar por encima. Portada con vídeo en bucle. Scroll guiado con su historia (1992 → hoy) sobre un vendaje de manos antes de entrar al ring. Reserva por pasos con View Transitions como "ficha de inscripción". Modelo 3D desactivado.

## De dónde sale cada dato (consulta del 2026-10-04)

Su web (gimnasiosimon.es) no se pudo abrir desde el entorno (503), así que todo sale de directorios:

- Páxinas Galegas: año 1992, Simón González y sus 13 títulos, disciplinas, sauna y solárium gratis para socios, descuento por pago adelantado, horario, teléfono, correo `gymsimon@mundo-r.com`, Facebook `gimnasiosimonvigo`, YouTube `gymsimonvigo`, 60 % de descuento en el parking de Fernando Católico.
- `leads-vigo.md` (búsqueda del mismo día): 4,7★ con más de 110 reseñas.
- Otros directorios (cylex, gimnasios.fitness) citan además judo, capoeira, hapkido, zumba, body pump y otro horario (L-V 7:30–14:00 y 17:00–23:00).

## A confirmar antes de enseñarla

- **Tarifas**: los precios (35/45/40 €) son de ejemplo.
- **Horario**: dos fuentes no coinciden; se ha puesto el de Páxinas Galegas.
- **WhatsApp**: es un marcador (34600000000) para que las pruebas no le lleguen al gimnasio. Antes de enviarla, poner su número real (su fijo es 986 420 867; confirmar si tienen WhatsApp Business o un móvil).
- **Redes**: las URL de Facebook y YouTube se han deducido del nombre de usuario.

## Material real que hace falta

Sustituyen al stock de `media/` (mismos nombres en `media/fotos/` y `media/clips/`, así no hay que tocar `config.js`); el logo va en `img/logo.svg`:

| Archivo | Uso |
|---|---|
| logo.svg (o .png grande) | Cabecera. El actual es provisional ("GS" en un sello) |
| portada.jpg | Portada: la sala, el ring o el tatami con gente entrenando |
| una foto por disciplina | Tarjetas: kickboxing, muay thai, boxeo, MMA, jiu-jitsu, pilates/sala |
| galeria-01.jpg … galeria-08.jpg | Galería: trofeos y cinturones de Simón, fotos antiguas del gimnasio, alumnos compitiendo, sauna |
| clips de 3-6 s (opcional) | Microvídeo de las tarjetas |
| precios y horario de clases por disciplina | Tarifas, horarios y franjas de reserva |

Las fotos antiguas y los títulos de Simón son el argumento más fuerte de esta demo: pedirlos a propósito.

## Material de stock provisional (media/)

Todo de Pexels (licencia libre, uso comercial sin atribución), consulta del 2026-10-04. Clips recortados a 4-7 s, sin audio, 640 px (portada 1280 px), con un etalonaje cálido común.

| Archivo | Pexels |
|---|---|
| clips/portada.mp4 + fotos/portada.jpg | vídeo 4438072 (boxeador y saco en gimnasio oscuro) |
| clips/kickboxing.mp4 | vídeo 6296492 (sparring) |
| clips/muay-thai.mp4 | vídeo 8611527 |
| clips/boxeo.mp4 | vídeo 4806560 (recortado) |
| clips/mma.mp4 | vídeo 8612125 |
| clips/jiu-jitsu.mp4 | vídeo 8611719 |
| clips/sala.mp4 | vídeo 5319998 (discos y barra) |
| secuencia/frame-001…088.jpg | vídeo 7187507 (vendaje de manos), 6,5 fps |
| fotos/galeria-01…08.jpg | fotos 5750886, 11045334, 4574154, 27302386, 30323314, 11740029, 4790425, 8612030 |

Las fotos `fotos/<disciplina>.jpg` son el primer fotograma de cada clip y sirven de póster.
