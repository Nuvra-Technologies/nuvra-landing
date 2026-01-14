import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://nuvratg.com";

    return [
        { url: `${baseUrl}/`, lastModified: new Date() },
        { url: `${baseUrl}/quienes-somos`, lastModified: new Date() },
        { url: `${baseUrl}/por-que-elegirnos`, lastModified: new Date() },
        { url: `${baseUrl}/servicios`, lastModified: new Date() },
        { url: `${baseUrl}/equipo`, lastModified: new Date() },
        { url: `${baseUrl}/casos-de-exito`, lastModified: new Date() },
        { url: `${baseUrl}/faq`, lastModified: new Date() },
        { url: `${baseUrl}/contacto`, lastModified: new Date() },
    ];
}
