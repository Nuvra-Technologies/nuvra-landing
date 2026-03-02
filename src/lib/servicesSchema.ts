export function generateServicesSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://nuvratg.com/#services",
        name: "Nuvra Technologies",
        url: "https://nuvratg.com",
        description:
            "Agencia de desarrollo web y software a medida que ayuda a pymes a digitalizar procesos, automatizar tareas y vender online.",
        areaServed: {
            "@type": "Country",
            name: "Argentina"
        },
        provider: {
            "@type": "Organization",
            name: "Nuvra Technologies",
            url: "https://nuvratg.com"
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios de desarrollo web y software",
            itemListElement: [
                {
                    "@type": "Service",
                    name: "Software a medida",
                    description:
                        "Desarrollo de sistemas personalizados para automatizar procesos empresariales.",
                    areaServed: {
                        "@type": "Country",
                        "name": "Argentina"
                    }
                },
                {
                    "@type": "Service",
                    name: "Web institucional",
                    description:
                        "Sitios web profesionales optimizados para presencia online y generación de confianza.",
                    areaServed: {
                        "@type": "Country",
                        "name": "Argentina"
                    }
                },
                {
                    "@type": "Service",
                    name: "Landing pages",
                    description:
                        "Páginas optimizadas para conversión y captación de leads.",
                    areaServed: {
                        "@type": "Country",
                        "name": "Argentina"
                    }
                },
                {
                    "@type": "Service",
                    name: "Tiendas online",
                    description:
                        "Desarrollo de e-commerce integrados con pagos y gestión de productos.",
                    areaServed: {
                        "@type": "Country",
                        "name": "Argentina"
                    }
                },
                {
                    "@type": "Service",
                    name: "Integraciones y automatización",
                    description:
                        "Conexión entre sistemas y automatización de procesos empresariales.",
                    areaServed: {
                        "@type": "Country",
                        "name": "Argentina"
                    }
                },
                {
                    "@type": "Service",
                    name: "Optimización de performance",
                    description:
                        "Auditoría y mejora de velocidad, seguridad y estabilidad de sistemas existentes.",
                    areaServed: {
                        "@type": "Country",
                        "name": "Argentina"
                    }
                },
                {
                    "@type": "Service",
                    name: "Mantenimiento mensual",
                    description:
                        "Soporte continuo, actualizaciones y backups para proyectos activos.",
                    areaServed: {
                        "@type": "Country",
                        "name": "Argentina"
                    }
                },
            ],
        },
    };
}
