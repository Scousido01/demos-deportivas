/*
 * Configuración de la demo. Es el ÚNICO archivo que cambia entre nichos y clientes
 * (junto con textos, estilo.css e imágenes). El código de los efectos no se toca.
 *
 * Las rutas de imágenes y vídeos son relativas a la demo publicada (dist/<demo>/).
 * Si un campo está vacío o se borra, su sección se oculta.
 */
window.DEMO_CONFIG = {
  negocio: {
    nombre: "Nombre del negocio",
    eslogan: "Tu eslogan en una línea",
    logo: "", // p. ej. "img/logo.svg"; si está vacío se muestra el nombre
    ciudad: "Tu ciudad",
  },

  colores: {
    primario: "#e4572e",
    secundario: "#17bebb",
    fondo: "#101418",
    texto: "#f4f4f4",
  },

  portada: {
    titulo: "Entrena donde se nota",
    subtitulo: "Texto corto que explica qué ofreces y a quién.",
    boton: "Reserva tu clase de prueba",
    imagen: "img/portada.svg",
    video: "", // p. ej. "media/portada.mp4" (se reproduce en silencio y en bucle)
  },

  quienesSomos: {
    titulo: "Quiénes somos",
    texto: "Dos o tres frases sobre la historia, el equipo y lo que os hace distintos.",
    datos: [
      { valor: "10", etiqueta: "años" },
      { valor: "500", etiqueta: "socios" },
      { valor: "12", etiqueta: "entrenadores" },
    ],
  },

  // Tarjetas con efecto tilt. "video" es opcional: microvídeo que se reproduce al pasar por encima.
  servicios: [
    { titulo: "Servicio 1", texto: "Descripción breve.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Servicio 2", texto: "Descripción breve.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Servicio 3", texto: "Descripción breve.", imagen: "img/tarjeta.svg", video: "" },
  ],

  // Scroll guiado: secuencia de imágenes numeradas que se dibuja en un canvas al hacer scroll.
  // Deja "frames" a 0 para ocultar la sección.
  scrollGuiado: {
    titulo: "Un día con nosotros",
    textos: ["Llegas.", "Calientas.", "Entrenas.", "Repites."],
    ruta: "media/secuencia/frame-{n}.jpg", // {n} se sustituye por 001, 002...
    frames: 0,
    digitos: 3,
  },

  horarios: [
    { dia: "Lunes a viernes", horas: "07:00 – 22:00" },
    { dia: "Sábados", horas: "09:00 – 14:00" },
    { dia: "Domingos", horas: "Cerrado" },
  ],

  tarifas: [
    { nombre: "Básica", precio: "29 €", periodo: "/mes", incluye: ["Acceso libre", "Vestuarios"] },
    { nombre: "Completa", precio: "45 €", periodo: "/mes", incluye: ["Acceso libre", "Clases dirigidas", "Plan inicial"], destacada: true },
    { nombre: "Bono 10", precio: "60 €", periodo: "", incluye: ["10 sesiones", "Sin permanencia"] },
  ],

  galeria: ["img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg"],

  // Reservas por pasos. Al final abre WhatsApp con el resumen (no necesita servidor).
  reservas: {
    titulo: "Reserva tu clase de prueba",
    actividades: ["Sala", "Clase dirigida", "Entrenamiento personal"],
    franjas: ["Mañana", "Mediodía", "Tarde"],
  },

  // Modelo 3D (model-viewer). Solo si hay un .glb bueno; si "modelo" está vacío no se carga nada.
  modelo3d: {
    titulo: "",
    modelo: "", // p. ej. "media/modelo.glb"
    colores: [], // variantes de color para el configurador, p. ej. ["#e4572e", "#222"]
  },

  contacto: {
    whatsapp: "34600000000", // con prefijo, sin "+" ni espacios
    mensajeWhatsapp: "Hola, he visto vuestra web y quería información.",
    telefono: "+34 600 000 000",
    email: "hola@ejemplo.com",
    direccion: "Calle Ejemplo 1, Tu ciudad",
    mapa: "Calle Ejemplo 1, Tu ciudad", // texto que se busca en Google Maps
    redes: [{ nombre: "Instagram", url: "https://instagram.com/" }],
  },
};
