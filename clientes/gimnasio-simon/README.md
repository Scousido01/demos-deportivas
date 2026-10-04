# Demo: Gimnasio Simón (Vigo)

Lead nº 1 de gimnasios en `leads-vigo.md`. Gimnasio clásico de artes marciales y fitness en Rúa de Urzáiz 92, abierto en 1992 y dirigido por Simón González (13 veces campeón del mundo de kickboxing).

Creada con `node scripts/nueva-demo.mjs gimnasio gimnasio-simon`. Ver: `node scripts/construir.mjs clientes/gimnasio-simon && npx serve dist/gimnasio-simon`.

## Estilo

Más tradicional que Forja Box: cartel de velada antigua. Fondo tostado oscuro, crema, rojo de esquina de ring y dorado de cinturón; titulares en Playfair Display (serifa), filetes dobles, sello "Est. 1992 · Vigo" en la portada y antetítulo "Desde 1992" en cada sección. Seis disciplinas en rejilla de 3. Scroll guiado y modelo 3D desactivados.

## De dónde sale cada dato (consulta del 2026-10-04)

Su web (gimnasiosimon.es) no se pudo abrir desde el entorno (503), así que todo sale de directorios:

- Páxinas Galegas: año 1992, Simón González y sus 13 títulos, disciplinas, sauna y solárium gratis para socios, descuento por pago adelantado, horario, teléfono, correo `gymsimon@mundo-r.com`, Facebook `gimnasiosimonvigo`, YouTube `gymsimonvigo`, 60 % de descuento en el parking de Fernando Católico.
- `leads-vigo.md` (búsqueda del mismo día): 4,7★ con más de 110 reseñas.
- Otros directorios (cylex, gimnasios.fitness) citan además judo, capoeira, hapkido, zumba, body pump y otro horario (L-V 7:30–14:00 y 17:00–23:00).

## A confirmar antes de enseñarla

- **Tarifas**: los precios (35/45/40 €) son de ejemplo.
- **Horario**: dos fuentes no coinciden; se ha puesto el de Páxinas Galegas.
- **WhatsApp**: apunta a su fijo (986 420 867). Confirmar si tienen WhatsApp Business o un móvil. Ojo al probar la reserva: abre un chat real con el gimnasio.
- **Redes**: las URL de Facebook y YouTube se han deducido del nombre de usuario.

## Material real que hace falta

Van en `img/` con estos nombres y se cambia la ruta en `config.js`:

| Archivo | Uso |
|---|---|
| logo.svg (o .png grande) | Cabecera. El actual es provisional ("GS" en un sello) |
| portada.jpg | Portada: la sala, el ring o el tatami con gente entrenando |
| una foto por disciplina | Tarjetas: kickboxing, muay thai, boxeo, MMA, jiu-jitsu, pilates/sala |
| galeria-01.jpg … galeria-08.jpg | Galería: trofeos y cinturones de Simón, fotos antiguas del gimnasio, alumnos compitiendo, sauna |
| clips de 3-6 s (opcional) | Microvídeo de las tarjetas |
| precios y horario de clases por disciplina | Tarifas, horarios y franjas de reserva |

Las fotos antiguas y los títulos de Simón son el argumento más fuerte de esta demo: pedirlos a propósito.
