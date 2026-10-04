# Clientes

Una carpeta por lead real, creada con:

```bash
node scripts/nueva-demo.mjs <nicho> <nombre-cliente>
```

Cada carpeta contiene solo lo propio del cliente:

- `config.js`: nombre, colores, logo, horarios, tarifas, contacto.
- `estilo.css`: ajustes visuales (parte del estilo del nicho).
- `img/` y `media/`: su logo, fotos y vídeos. Pisan a los de `base/` y `recursos/<nicho>/`.
- `nicho`: archivo de una línea con el nicho de origen, para que la construcción use sus recursos.

Nunca copies aquí archivos de `base/js/`: los efectos se mejoran en `base/` y llegan a todas las demos.
El seguimiento comercial (enviada, respuesta) se lleva en Notion, no aquí.
