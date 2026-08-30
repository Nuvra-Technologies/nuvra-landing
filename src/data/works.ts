import { Works } from "@/types/works";

export const trabajos: Works[] = [
    {
        id: 1,
        slug: "plex-commodities",
        titulo: "Plex Commodities Co.",
        categoria: "Landing corporativa",
        
        descripcion:
            "Diseño y desarrollo de landing institucional para empresa canadiense del sector commodities, optimizada para performance, claridad estratégica y posicionamiento internacional.",
        
        imagen: "/images/works/mockup-hero-plex.png",
        mockupSlug: "/images/works/mockup-slug-plex.png",
        url: "https://plexcommodities.com",
        
        año: "2026",
        cliente: "Plex Commodities Co.",
        industria: "Comercio internacional / Commodities",
        
        servicios: [
            "UX/UI Design",
            "Desarrollo Frontend",
            "Arquitectura de información",
            "Optimización SEO técnica",
            "Performance Optimization",
        ],
    
        tecnologias: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Vercel",
        ],
    
        desafio:
            "La empresa necesitaba consolidar su presencia digital internacional con una imagen sólida, profesional y alineada al mercado global de commodities. El principal reto era transmitir confianza institucional y claridad estratégica en un sector altamente competitivo.",
    
        solucion:
            "Se diseñó una landing corporativa minimalista con jerarquía clara de contenidos, enfoque en credibilidad institucional y optimización extrema de performance. Se trabajó arquitectura de información orientada a inversores y partners internacionales.",
    
        resultado:
            "La nueva presencia digital posiciona a la empresa como actor serio dentro del sector, mejora la percepción de marca y permite una comunicación clara con potenciales socios comerciales.",
    
        impacto: [
            "Mejora en percepción profesional de marca",
            "Optimización de tiempos de carga",
            "Estructura clara orientada a conversión institucional",
        ],
    },

    {
        id: 2,
        slug: "mfc-detailing",
        titulo: "MFC Detailing Service",
        categoria: "Landing + sistema a medida",

        descripcion:
            "Desarrollo integral de presencia digital y software interno personalizado para gestión operativa, presupuestos, stock y clientes.",

        imagen: "/images/works/mockup-dash-mfc.png",
        mockupSlug: "/images/works/mockup-slug-mfc.png",

        año: "2025",
        cliente: "MFC Detailing Service",
        industria: "Servicios automotrices",

        servicios: [
            "UX/UI Design",
            "Desarrollo Web",
            "Desarrollo de Software a Medida",
            "Arquitectura Backend",
            "Modelado de Base de Datos",
        ],

        tecnologias: [
            "Next.js",
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
        ],

        desafio:
            "El negocio operaba con procesos manuales y falta de trazabilidad en presupuestos, clientes y stock. Necesitaban digitalizar su operación sin perder simplicidad en el uso diario.",

        solucion:
            "Se desarrolló una landing profesional para captar clientes y un sistema interno a medida que permite gestionar presupuestos, controlar stock, administrar clientes y centralizar la información operativa en una única plataforma.",

        resultado:
            "Digitalización completa del flujo operativo, mayor control financiero y reducción de errores administrativos.",

        impacto: [
            "Centralización de datos operativos",
            "Optimización del tiempo de gestión",
            "Mejor control de presupuestos y stock",
        ],
    },

    {
        id: 3,
        slug: "cmv-centro-medico",
        titulo: "CMV Centro Médico",
        categoria: "Landing institucional",

        descripcion:
            "Diseño y desarrollo de landing institucional para centro médico de Tucumán, orientada a generar confianza, facilitar el acceso a turnos, presentar sus especialidades y potenciar el alquiler de consultorios.",

        imagen: "/images/works/mockup-hero-cmv.png",
        mockupSlug: "/images/works/mockup-slug-cmv.png",
        url: "https://www.cmvcorazondejesus.com/",

        año: "2026",
        cliente: "CMV Corazón de Jesús",
        industria: "Salud / Centro Médico",

        servicios: [
            "UX/UI Design",
            "Desarrollo Frontend",
            "Arquitectura de información",
            "SEO técnico",
            "Datos estructurados Schema.org",
            "Optimización de performance",
            "Accesibilidad web",
            "Responsive Design",
        ],

        tecnologias: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
            "Motion",
            "next/image",
            "next/font",
            "Vercel",
        ],

        desafio:
            "CMV necesitaba profesionalizar su presencia digital y centralizar en un único sitio la información sobre sus especialidades, profesionales, estudios cardiovasculares y servicios. El proyecto debía atender dos objetivos comerciales principales: facilitar el acceso a turnos médicos y promocionar el alquiler de consultorios, además de transmitir confianza y fortalecer su presencia en Google.",

        solucion:
            "Se desarrolló una landing institucional moderna y responsive, con una arquitectura de información orientada tanto a pacientes como a profesionales de la salud. Se estructuraron páginas específicas para especialidades, información institucional, preguntas frecuentes y alquiler de consultorios, incorporando además optimización SEO técnica, datos estructurados, metadatos para redes sociales, sitemap, robots.txt, optimización de imágenes y criterios de accesibilidad.",

        resultado:
            "CMV cuenta con una presencia digital profesional que organiza y comunica de forma clara su propuesta de valor, facilita el acceso al sistema de turnos y presenta sus servicios y especialidades a pacientes y profesionales. La arquitectura del sitio está preparada para favorecer la indexación y el posicionamiento orgánico de sus principales servicios.",

        impacto: [
            "Mejora de la presencia digital institucional",
            "Acceso directo al sistema de turnos",
            "Mayor visibilidad de especialidades y estudios cardiovasculares",
            "Promoción del alquiler de consultorios",
            "Optimización técnica orientada a SEO y performance",
            "Mejora de accesibilidad y experiencia responsive",
        ],
    },
];