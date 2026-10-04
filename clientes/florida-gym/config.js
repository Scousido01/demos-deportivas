/* Demo para Florida Gym (Av. da Florida 32, Coia, Vigo), creada desde el nicho gimnasio.
 * Datos públicos sacados de directorios el 2026-10-04 (Páxinas Galegas, Páginas Amarillas,
 * tugimnasio.es): dirección, teléfono, correo, horario y lista de disciplinas.
 * Pendiente de material real: logo, colores de marca, fotos, tarifas y número de WhatsApp.
 * Ver README.md de esta carpeta. */
window.DEMO_CONFIG = {
  negocio: {
    nombre: "Florida Gym",
    eslogan: "17 disciplinas en el corazón de Coia.",
    logo: "media/logo.svg", // provisional (clientes/florida-gym/media/logo.svg); cambiar por el suyo
    ciudad: "Vigo",
  },

  // Colores provisionales: rojo guante y amarillo, hasta ver su logo real
  colores: {
    primario: "#e8262d",
    secundario: "#ffd23f",
    fondo: "#0b0b0d",
    texto: "#f4f4f5",
  },

  portada: {
    titulo: "Tu barrio, tu ring",
    subtitulo: "Boxeo, artes marciales, spinning, pilates y mucho más en Coia. De 7:30 a 23:00 entre semana y también el fin de semana. Reserva tu primera clase en un minuto.",
    boton: "Reserva tu clase de prueba",
    imagen: "img/portada.svg", // → foto real de su sala o del ring
    video: "",
  },

  quienesSomos: {
    titulo: "Un gimnasio de barrio con nivel",
    texto: "En Florida Gym entrenas con profesores de cada disciplina y con gente del barrio que vuelve cada semana. Puedes empezar en boxeo, pasarte a spinning o terminar con pilates, todo en el mismo sitio. Hay clases para adultos y kung fu para los más pequeños.",
    datos: [
      { valor: "4,8★", etiqueta: "de valoración media" },
      { valor: "17", etiqueta: "disciplinas" },
      { valor: "7 días", etiqueta: "abierto a la semana" },
    ],
  },

  servicios: [
    { titulo: "Boxeo", texto: "Técnica, saco, manoplas y preparación física con profesor. Desde cero o para competir.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Artes marciales", texto: "Wing Tsun, Jiu-Jitsu, Kung Fu, Aikido y Full Contact. Kung Fu también para niños.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Clases colectivas", texto: "BodyCombat, Pump, Spinning, Zumba, Step, Jump y TRX para sudar en grupo.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Cuerpo y mente", texto: "Pilates, Tai Chi y Balance para ganar fuerza, movilidad y calma.", imagen: "img/tarjeta.svg", video: "" },
  ],

  scrollGuiado: {
    titulo: "Una clase de boxeo en 60 segundos",
    textos: ["Vendas.", "Técnica.", "Saco.", "Asalto final."],
    ruta: "media/secuencia/frame-{n}.svg",
    frames: 48,
    digitos: 3,
  },

  horarios: [
    { dia: "Lunes a viernes", horas: "07:30 – 23:00" },
    { dia: "Sábados", horas: "09:30 – 14:00" },
    { dia: "Domingos", horas: "10:00 – 14:00" },
  ],

  // Oculto hasta tener sus precios reales (no se inventan tarifas en una demo para un cliente real)
  tarifas: [],

  galeria: ["img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg"],

  reservas: {
    titulo: "Reserva tu clase de prueba",
    actividades: ["Boxeo", "Wing Tsun", "Jiu-Jitsu", "Kung Fu infantil", "Spinning", "Zumba", "BodyCombat", "Pilates"],
    franjas: ["Mañana (7:30–10:30)", "Mediodía (13–15)", "Tarde (18–21)", "Noche (21–23)"],
  },

  modelo3d: { titulo: "", modelo: "", colores: [] },

  contacto: {
    whatsapp: "34600000000", // marcador: pedir su número de WhatsApp Business antes de enviarla
    mensajeWhatsapp: "Hola, quiero probar una clase en Florida Gym.",
    telefono: "986 206 961",
    email: "infofloridagym@gmail.com",
    direccion: "Av. da Florida 32, bajo, 36210 Vigo",
    mapa: "Florida Gym, Avenida da Florida 32, Vigo",
    redes: [
      { nombre: "Instagram", url: "https://instagram.com/floridagym" },
      { nombre: "Facebook", url: "https://www.facebook.com/p/Florida-Gym-100057563015519/" },
    ],
  },
};
