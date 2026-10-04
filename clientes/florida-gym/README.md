# Demo: Florida Gym (Vigo)

Lead n.º 2 de gimnasios en `leads-vigo.md` (carpeta del proyecto en Claude): Av. da Florida 32, Coia. Creada desde el nicho `gimnasio` el 2026-10-04. No se ha contactado con el negocio.

## Por qué esta demo
Tienen muy buena reputación y unas 17 disciplinas, pero su web (floridagym.es) apenas muestra el nombre del gimnasio, el correo es de Gmail y la actividad está sobre todo en Facebook e Instagram. La demo enseña su oferta ordenada y una reserva de clase de prueba que termina en WhatsApp.

## Datos usados y fuente
| Dato | Fuente (consulta del 2026-10-04) |
|---|---|
| Dirección, teléfono 986 206 961, infofloridagym@gmail.com | Páxinas Galegas, Páginas Amarillas |
| Horario L–V 7:30–23:00, S 9:30–14:00, D 10:00–14:00 | Páxinas Galegas, tugimnasio.es |
| Disciplinas (boxeo, Wing Tsun, Aikido, Tai Chi, Full Contact, Kung Fu niños y adultos, Jiu-Jitsu, Pilates, BodyCombat, Pump, Balance, Step, Jam, Jump, TRX, Spinning, Zumba) | Páxinas Galegas, tugimnasio.es |
| Valoración 4,8★ | leads-vigo.md (Páxinas Galegas da 4,6★: revisar en Google Maps antes de enviar) |
| Instagram @floridagym, página de Facebook | Páxinas Galegas, resultados de búsqueda |

## Material real que falta antes de enviarla
- **Logo** (SVG o PNG con fondo transparente). `media/logo.svg` es un marcador hecho para la demo.
- **Colores de marca**: los actuales (rojo y amarillo) son provisionales; ajustarlos en `config.js` al ver su logo.
- **Fotos**: sala, ring o zona de boxeo, una clase de spinning y una de artes marciales (de su Instagram o Facebook, pidiendo permiso). Van en `img/` o `media/fotos/` y sustituyen a los `img/*.svg`.
- **Tarifas**: la sección está oculta (`tarifas: []`) porque no hay precios públicos. Al tenerlos, aparece sola.
- **WhatsApp**: `contacto.whatsapp` es un marcador. Las reservas terminan en WhatsApp, así que hace falta su número (WhatsApp Business puede ir en el fijo).
- **Horario de clases** por disciplina, si quieren que la reserva muestre horas exactas en vez de franjas.
