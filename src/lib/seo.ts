import type { Metadata } from "next";

const SITE_NAME = "Nuvra Technologies";
const SITE_URL = "https://nuvratg.com";
const DEFAULT_DESCRIPTION = 
    "Startup especializada en soluciones digitales modernas, escalables y orientadas a resultados.";

export function createMetadata({
    title,
    description = DEFAULT_DESCRIPTION,
    path = "",
}: {
    title: string;
    description?: string,
    path?: string;
}): Metadata {
    const url = `${SITE_URL}${path}`;

    return {
        title,
        description,
        metadataBase: new URL(SITE_URL),
        alternates: {
            canonical: url
        },
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            locale: "es_AR",
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description
        }
    };
}