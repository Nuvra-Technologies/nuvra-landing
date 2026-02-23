import { MetadataRoute } from "next";
import { trabajos } from "@/data/works";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://nuvratg.com";

    const staticRoutes = [
        "",
        "/quienes-somos",
        "/servicios",
        "/equipo",
        "/faq",
        "/contacto",
        "/proyectos",
    ];

    const staticPages = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
    }));

    const projectPages = trabajos.map((trabajo) => ({
        url: `${baseUrl}/proyectos/${trabajo.slug}`,
        lastModified: new Date(),
    }));

    return [...staticPages, ...projectPages];
}