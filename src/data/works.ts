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
];