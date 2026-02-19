import {
    Workflow,
    TrendingUp,
    Code2,
    Rocket,
    Settings,
    Smartphone,
    ShoppingCart,
    PlugZap,
    ShieldCheck,
    Gauge,
} from "lucide-react";
import { Service } from "@/types/service";

export const servicesPreview: Service[] = [
    {
        category: "Sistemas",
        title: "Software a medida",
        description:
            "Diseñamos sistemas adaptados a los procesos reales de tu empresa para automatizar tareas, reducir errores y escalar sin depender de planillas.",
        icon: Workflow,
    },
    {
        category: "Marketing",
        title: "Landing pages",
        description:
            "Creamos landing pages rápidas y orientadas a conversión para captar clientes, validar ideas y lanzar campañas.",
        icon: TrendingUp,
    },
    {
        category: "E-commerce",
        title: "Tiendas online",
        description:
            "Desarrollamos tiendas online integradas con pagos y gestión de productos para empezar a vender en internet.",
        icon: ShoppingCart,
    },
];

export const servicesFull: Service[] = [
    {
      category: "Sistemas",
      title: "Software a medida",
      shortDescription:
        "Sistemas diseñados específicamente para los procesos reales de tu empresa.",
      fullDescription:
        "Desarrollamos software personalizado que reemplaza planillas, tareas manuales y herramientas genéricas. Analizamos tus procesos y creamos sistemas simples, escalables y preparados para el crecimiento.",
      icon: Workflow,
      features: [
        "Paneles de administración",
        "Gestión de clientes y ventas",
        "Automatización de tareas repetitivas",
        "Dashboards y reportes",
        "Escalabilidad y seguridad",
      ],
      idealFor: [
        "Empresas que trabajan con Excel o procesos manuales",
        "Negocios con operaciones repetitivas",
        "Equipos que necesitan ordenar su información",
      ],
    },
    {
      category: "Web",
      title: "Web institucional",
      shortDescription:
        "Sitios profesionales que transmiten confianza y presencia online.",
      fullDescription:
        "Creamos sitios web modernos, rápidos y optimizados para mostrar tu empresa, generar confianza y convertir visitas en oportunidades reales.",
      icon: Rocket,
      features: [
        "Diseño profesional y responsive",
        "Optimización SEO básica",
        "Carga ultra rápida",
        "Panel de administración",
        "Deploy y configuración completa",
      ],
      idealFor: [
        "Empresas que aún no tienen web",
        "Negocios que necesitan mejorar su imagen online",
        "Marcas que quieren generar confianza",
      ],
    },
    {
      category: "Marketing",
      title: "Landing pages",
      shortDescription:
        "Páginas enfocadas 100% en conversión y generación de leads.",
      fullDescription:
        "Diseñamos landing pages pensadas para campañas publicitarias, validación de ideas y captación de clientes potenciales.",
      icon: TrendingUp,
      features: [
        "Enfoque en conversión",
        "Integración con formularios y CRM",
        "Optimización de velocidad",
        "Tracking y analytics",
        "Preparadas para campañas ads",
      ],
      idealFor: [
        "Campañas publicitarias",
        "Validar productos o servicios",
        "Captar leads rápidamente",
      ],
    },
    {
      category: "E-commerce",
      title: "Tiendas online",
      shortDescription:
        "Vendé tus productos online con una tienda rápida y segura.",
      fullDescription:
        "Desarrollamos e-commerce optimizados para vender, integrados con medios de pago, envíos y herramientas de gestión.",
      icon: ShoppingCart,
      features: [
        "Integración con MercadoPago",
        "Gestión de productos y stock",
        "Carrito y checkout optimizado",
        "Panel de administración",
        "Optimización de performance",
      ],
      idealFor: [
        "Negocios que quieren vender online",
        "Tiendas físicas que quieren digitalizarse",
        "Emprendimientos en crecimiento",
      ],
    },
    {
      category: "Integraciones",
      title: "Integraciones y automatizaciones",
      shortDescription:
        "Conectamos tus herramientas para eliminar tareas manuales.",
      fullDescription:
        "Integramos sistemas y automatizamos flujos de trabajo para ahorrar tiempo, reducir errores y mejorar la eficiencia del negocio.",
      icon: PlugZap,
      features: [
        "Integración con WhatsApp",
        "Integración con MercadoPago",
        "Automatización de procesos",
        "Conexión entre sistemas",
        "APIs y servicios externos",
      ],
      idealFor: [
        "Empresas que usan muchas herramientas separadas",
        "Negocios con tareas manuales repetitivas",
        "Equipos que buscan eficiencia",
      ],
    },
    {
      category: "Optimización",
      title: "Performance y mejora de sistemas",
      shortDescription:
        "Mejoramos velocidad, seguridad y estabilidad de sistemas existentes.",
      fullDescription:
        "Auditamos y optimizamos sistemas existentes para mejorar tiempos de carga, estabilidad y experiencia de usuario.",
      icon: Gauge,
      features: [
        "Optimización de performance",
        "Refactorización de código",
        "Mejoras de seguridad",
        "Auditoría técnica",
        "Reducción de costos de infraestructura",
      ],
      idealFor: [
        "Webs lentas o inestables",
        "Proyectos que crecieron sin mantenimiento",
        "Empresas con problemas técnicos recurrentes",
      ],
    },
    {
      category: "Soporte",
      title: "Mantenimiento mensual",
      shortDescription:
        "Soporte técnico continuo para mantener tu sistema sano y actualizado.",
      fullDescription:
        "Ofrecemos mantenimiento mensual que incluye actualizaciones, backups, corrección de bugs y soporte técnico básico.",
      icon: ShieldCheck,
      features: [
        "Corrección de bugs menores",
        "Actualización de dependencias",
        "Backups periódicos",
        "Soporte técnico mensual",
        "Monitoreo básico",
      ],
      idealFor: [
        "Clientes con proyectos activos",
        "Empresas que necesitan soporte continuo",
        "Negocios que no tienen equipo técnico interno",
      ],
    },
];
