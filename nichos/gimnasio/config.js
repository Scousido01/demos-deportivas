/* Nicho gimnasio / box: oscuro y enérgico. Copia este nicho con scripts/nueva-demo.mjs para cada cliente.
 * Marca ficticia "Forja Box". Las imágenes img/*.svg son marcadores de base/: cuando estén las fotos
 * y clips de nichos/gimnasio/recursos.md en recursos/gimnasio/, cambia cada ruta por su media/... */
window.DEMO_CONFIG = {
  negocio: {
    nombre: "Forja Box",
    eslogan: "Entrena duro. Entrena en equipo.",
    logo: "media/logo.svg",
    ciudad: "Tu ciudad",
  },

  colores: {
    primario: "#ff4d00", // naranja fuego: botones, precios
    secundario: "#c6ff00", // lima eléctrico: cifras, etiquetas
    fondo: "#0b0b0d",
    texto: "#f4f4f5",
  },

  portada: {
    titulo: "Sin excusas",
    subtitulo: "Clases de entrenamiento funcional de 60 minutos con coach. Para todos los niveles, desde el primer día. La primera es gratis.",
    boton: "Reserva tu clase gratis",
    imagen: "img/portada.svg", // → media/fotos/portada.jpg
    video: "", // → media/clips/portada.mp4
  },

  quienesSomos: {
    titulo: "Más que un gimnasio",
    texto: "Aquí no vienes a hacer máquinas solo. Cada clase la dirige un coach, el entrenamiento cambia cada día y entrenas con un grupo que te empuja a volver. Escalamos cada ejercicio a tu nivel, tengas 20 años o 60.",
    datos: [
      { valor: "+300", etiqueta: "socios activos" },
      { valor: "40", etiqueta: "clases a la semana" },
      { valor: "6", etiqueta: "coaches titulados" },
    ],
  },

  // Tarjetas con tilt y microvídeo
  servicios: [
    { titulo: "WOD", texto: "El entrenamiento del día: fuerza, gimnásticos y metcon en una hora.", imagen: "img/tarjeta.svg", video: "" }, // → media/fotos/wod.jpg, media/clips/wod.mp4
    { titulo: "Halterofilia", texto: "Arrancada y dos tiempos con progresiones seguras y técnica cuidada.", imagen: "img/tarjeta.svg", video: "" }, // → halterofilia
    { titulo: "Hyrox", texto: "Prepárate para competir: carrera, trineo, remo y wall balls.", imagen: "img/tarjeta.svg", video: "" }, // → hyrox
    { titulo: "Entrenamiento personal", texto: "Sesiones uno a uno con plan, seguimiento y objetivos medibles.", imagen: "img/tarjeta.svg", video: "" }, // → personal
  ],

  // Scroll guiado. Ahora usa los 48 SVG de marcador; con la secuencia real pon .jpg y su número de frames.
  scrollGuiado: {
    titulo: "Una clase en 60 segundos",
    textos: ["Calentamiento.", "Técnica.", "WOD.", "Choca esos cinco."],
    ruta: "media/secuencia/frame-{n}.svg",
    frames: 48,
    digitos: 3,
  },

  horarios: [
    { dia: "Lunes a viernes", horas: "07:00 – 22:00" },
    { dia: "Sábados", horas: "09:00 – 14:00" },
    { dia: "Domingos", horas: "Open box 10:00 – 13:00" },
  ],

  tarifas: [
    { nombre: "3 días", precio: "45 €", periodo: "/mes", incluye: ["12 clases al mes", "Open box", "App de reservas"] },
    { nombre: "Ilimitado", precio: "59 €", periodo: "/mes", incluye: ["Clases ilimitadas", "Open box", "App de reservas", "Sin matrícula este mes"], destacada: true },
    { nombre: "Personal", precio: "35 €", periodo: "/sesión", incluye: ["Sesión uno a uno", "Plan a medida", "Bonos de 5 y 10"] },
  ],

  // → media/fotos/galeria-01.jpg … galeria-08.jpg
  galeria: ["img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg"],

  // Reservas por pasos; termina en WhatsApp con el resumen
  reservas: {
    titulo: "Reserva tu primera clase",
    actividades: ["WOD", "Halterofilia", "Hyrox", "Sesión con coach"],
    franjas: ["Mañana (7–10)", "Mediodía (13–15)", "Tarde (18–22)"],
  },

  // Fuera hasta tener un .glb bueno
  modelo3d: { titulo: "", modelo: "", colores: [] },

  contacto: {
    whatsapp: "34600000000",
    mensajeWhatsapp: "Hola, quiero probar una clase gratis en Forja Box.",
    telefono: "+34 600 000 000",
    email: "hola@forjabox.es",
    direccion: "Calle Ejemplo 12, Tu ciudad",
    mapa: "Calle Ejemplo 12, Tu ciudad",
    redes: [
      { nombre: "Instagram", url: "https://instagram.com/" },
      { nombre: "TikTok", url: "https://tiktok.com/" },
    ],
  },
};
