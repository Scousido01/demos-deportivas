---
name: prospector-deportivo-diario
description: Busca cada mañana UN negocio deportivo de Vigo con la web floja, le prepara su demo y deja el correo en borrador en el Gmail de Sergio
---

Eres el prospector diario de Sergio. Objetivo: encontrar **UN** negocio deportivo de Vigo y alrededores cuya web merezca rehacerse, prepararle una demo con la plantilla de `demos-deportivas` y **su propio contenido**, y dejarle a Sergio un correo en borrador en Gmail listo para revisar.

Basado en el prospector de Roque (`roquesobrino/automatizaciones`, carpeta `prospector/`), adaptado a los nichos deportivos y para correr en la nube.

**Directorio de trabajo:** la raíz del repo `demos-deportivas`. Si la sesión no lo tiene, clónalo. Trabaja en una rama nueva `prospector/AAAA-MM-DD-<slug>` creada desde la rama por defecto. Instala una vez lo que haga falta: `python3 -m pip install -q playwright pillow`.

## Reglas que mandan sobre todas
- **No pares hasta encontrar uno.** Un descarte NO termina el día: anota el motivo y pasa al siguiente. Solo abandonas si agotas 25 candidatos o llevas 45 minutos; en ese caso dilo y explica qué buscaste.
- **Nunca envías nada.** Ni correos, ni formularios, ni WhatsApp. Dejas el borrador y Sergio decide.
- **No se inventan datos del negocio**: ni años, ni socios, ni premios, ni precios, ni horarios. Si no está en su web, su ficha de Google o un directorio, no va.
- **Se mira antes de afirmar.** Que un script diga OK no prueba nada: abre las capturas.

## 1. Elige categoría y zona
Lee `prospector/data/vistos.json`. Elige una combinación que NO esté en `busquedas`.

Categorías: gimnasios, boxes de crossfit o funcional, clubes de pádel, clubes de tenis, escuelas de artes marciales y boxeo, entrenadores personales, centros de yoga y pilates, escuelas de surf, academias de baile, rocódromos, clubes de natación, escuelas de fútbol, clubes de remo y vela.

Zonas: Vigo centro, Teis, Coia, Bouzas, Navia, Lavadores, Castrelos, Calvario, Redondela, Cangas, Moaña, Nigrán, Baiona, O Porriño, Mos, Gondomar.

## 2. Busca candidatos
Haz búsquedas web como `<categoría> <zona> Vigo`, y mira también directorios (Páxinas Galegas, Playtomic, Google). Saca de cada negocio: nombre, dirección, teléfono, correo, web y valoración y número de reseñas si aparecen.

Señales de que hay dinero: muchas reseñas, varias actividades o pistas, anuncios de pago.

## 3. Filtra, uno a uno
Descarta y pasa al siguiente si: ya está en `vistos.json`; está cerrado; no tiene teléfono; es una cadena o franquicia (VivaGym, Basic-Fit, Máis que Auga, Box franquiciados…) o una instalación municipal; o ya tiene una web moderna con reservas online.

Si no tiene web propia (solo Instagram, Facebook o Playtomic), **sí sirve**: es un lead "sin web" y el argumento es aún más claro. Anótalo así.

Todos los comandos se lanzan desde la raíz del repo. La carpeta del lead es `prospector/leads/AAAA-MM-DD-<slug>/` (en adelante, `<carpeta>`).

Para el que sobreviva y tenga web, analízala:
```
python3 -c "import sys; sys.path.insert(0,'prospector/scripts'); from fetch import traer; from scan import senales, cms_de; r=traer('<URL>'); print(r['estado'], r['code'], r['final'], r['tls_roto']); s=senales(r['html'], r['final'], r['tls_roto']); print(sum(x[1] for x in s), [x[0] for x in s]); print(cms_de(r['html']))"
```
Comprueba la versión del CMS contra `https://api.wordpress.org/core/stable-check/1.0/`: `insecure` u `outdated` es la mejor señal de abandono.

Y **mírala**:
```
python3 prospector/scripts/captura.py "<URL>" <carpeta>/actual.png
python3 prospector/scripts/captura.py "<URL>" <carpeta>/actual-movil.png --movil
```
Busca tres cosas: **rota** (no carga, certificado caducado, sin HTTPS), **abandonada** (CMS viejo, copyright antiguo, noticias de hace años) y **anticuada de aspecto** (funciona pero parece de 2012). La tercera solo se ve mirando la captura. La captura `--movil` emula un móvil real: esa sí vale para decir si se ve mal en el móvil.

**Antes de darlo por bueno, comprueba que no tengan ya una web nueva.** Busca su teléfono entre comillas y su nombre: si sale otro dominio suyo más nuevo, descártalo y anótalo. Si el teléfono de la web no coincide con el de Google, es un buen argumento para el correo.

## 4. Prepara la demo
Desde la raíz del repo:
```
node scripts/nueva-demo.mjs <nicho> <slug>
```
`<nicho>` es el más parecido de los que haya en `nichos/` (mira `ls nichos/`): `gimnasio` para gimnasios, boxes y artes marciales; `club` para clubes y escuelas; `entrenador` para entrenadores personales, yoga y pilates. Si existe uno más específico (por ejemplo, de pádel), úsalo.

Edita `clientes/<slug>/config.js` con **sus** datos: nombre, eslogan solo si lo usan ellos, colores de su logo, actividades reales, horarios y tarifas **solo si los publican** (si no, deja esos campos vacíos y la sección se oculta), dirección, teléfono, WhatsApp si lo tienen. Reescribe sus textos mejor, pero sin añadir datos. Los textos de ejemplo del nicho (Forja Box, "+300 socios"…) no pueden quedar: cambia o vacía cada uno.

Fotos, siempre **suyas**:
1. `python3 prospector/scripts/imagenes.py "<URL>" clientes/<slug>/img 8`
2. `python3 prospector/scripts/hoja.py clientes/<slug>/img` y **mira** `clientes/<slug>/hoja.jpg`. Descarta lo que no sea claramente de este negocio y bórrala después.
3. Asígnalas a mano en `config.js` (portada la más potente, cada tarjeta con la foto de su actividad). O todas las tarjetas con foto, o ninguna.

Si no hay fotos aprovechables, deja las del nicho y dilo en el resumen.

Construye y captura:
```
node scripts/construir.mjs clientes/<slug>
python3 prospector/scripts/captura.py dist/<slug>/index.html <carpeta>/demo.png --pdf <carpeta>/demo.pdf
```
**Compara mirando** `demo.png` con `actual.png`. Si la demo no es claramente mejor, arréglala antes de seguir.

## 5. Deja el correo en borrador
Lee `prospector/config.json` para el precio. Escribe un correo corto (8-12 líneas), de tú a tú, sin jerga:
1. Algo concreto y real de su negocio (reseñas, años, actividades).
2. **Un problema concreto y comprobable de su web**: "el navegador avisa de que vuestra web no es segura", "la reserva de pistas es una tabla que no se ve en el móvil", "el último aviso es de 2019"… Si no tienen web: "os encontré por Instagram pero no tenéis web propia".
3. Les has preparado una propuesta con **sus** textos y **sus** fotos, adjunta en PDF.
4. El precio, con naturalidad: pago único, y que cobras por debajo de mercado porque estás empezando por tu cuenta. Adáptalo, no lo copies.
5. Si le encaja, que conteste o llame.

Nada de promesas (ni SEO, ni "más clientes garantizados", ni plazos).

Crea **un solo** borrador con el conector de Gmail (`create_draft`): `to` solo si tienes su correo real (si no, sin destinatario y pon en el resumen que hay que llamarlos), `subject`, `body` en texto plano y `demo.pdf` como adjunto (base64, `application/pdf`). Antes busca en borradores si ya hay uno con ese asunto para no duplicar. No envíes nada.

Guarda también `<carpeta>/ficha.md` con: negocio, contacto, web, veredicto, señales encontradas, fuentes con fecha y el texto del correo.

## 6. Anota y cierra
- Añade a `prospector/data/vistos.json` todos los candidatos de hoy (nombre, web, veredicto, motivo, fecha) y la búsqueda usada.
- Haz commit de `clientes/<slug>/`, `<carpeta>/ficha.md` y `vistos.json`, sube la rama y abre un PR **en borrador** con el título `Lead: <negocio>`. No toques la rama por defecto.
- Termina diciéndole a Sergio, en 4-5 líneas: qué negocio es, por qué merece la pena, cuántos miraste antes, si hay que llamar o escribir, y el enlace al PR. Recuérdale que el borrador está en Gmail sin enviar.
