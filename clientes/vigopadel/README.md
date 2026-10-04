# Demo: Vigopadel

Lead nº 1 de pádel en Vigo (ver `leads-vigo.md` en la carpeta del proyecto). Demo creada el
2026-10-04 con `node scripts/nueva-demo.mjs club vigopadel`. No se ha contactado al club.

## El gancho
Su reserva online es una tabla PHP antigua (`vigopadel.com/reservasonline/publica/cuadro.php`) y
varios directorios dicen que se reserva llamando. La demo enseña lo contrario: reserva desde el
móvil en 4 pasos con confirmación y recordatorio por WhatsApp, torneos con "Apuntarme", ranking
y noticias del club.

## Qué es real y qué es de ejemplo
**Real** (fuentes públicas consultadas el 2026-10-04: Páxinas Galegas, padelnest, pistaenjuego.com,
esopiniones.com): nombre, dirección, teléfono 986 093 543, info@vigopadel.com, 5 pistas cubiertas,
2.000 m², cafetería, vestuarios, tienda, escuela Vigopadel-Progede (iniciación, perfeccionamiento,
competición y peques), torneos sociales y open, horario L–V 9:30–24:00 y S–D 9:30–14:00 y
17:00–21:30, precio "desde 5 €/hora/persona", Facebook.

**De ejemplo** (confirmar o quitar antes de enviarla):
- Colores azul atlántico y amarillo, y el escudo de `img/escudo.svg`: no se pudo ver su logo.
- Cuotas de la escuela (salen como "Consultar") y horarios de la escuela.
- Equipos, partidos, clasificación, torneos, ranking, noticias y patrocinadores. Rivales y jugadores
  son ficticios a propósito, para no atribuir resultados inventados a clubes reales.
- WhatsApp apunta al fijo del club; hace falta un móvil.

## Material real que hace falta
1. Logo en SVG o PNG grande (para `img/escudo.svg`) y sus colores.
2. 4–6 fotos: pistas, escuela, cafetería/tienda y algún torneo (para `img/portada`, `img/galeria`
   y las tarjetas de servicios). Se pueden sacar de su Facebook con permiso.
3. Móvil de WhatsApp para reservas.
4. Tarifas de pista (socio/no socio, luz) y de la escuela.
5. Si compiten en liga por equipos: nombres de equipos y calendario real.

## Ver
```bash
node scripts/construir.mjs clientes/vigopadel
npx serve dist/vigopadel
```
