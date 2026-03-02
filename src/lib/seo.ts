import type { Metadata } from "next";

const SITE_NAME = "Nuvra Technologies";
const SITE_URL = "https://nuvratg.com";
const DEFAULT_DESCRIPTION =
    "Desarrollamos software a medida, sistemas web y soluciones digitales escalables para empresas en Argentina.";

const DEFAULT_OG_IMAGE = "/og/og-image.png";

export function createMetadata({
    title,
    description = DEFAULT_DESCRIPTION,
    path = "",
    image = DEFAULT_OG_IMAGE,
}: {
    title: string;
    description?: string;
    path?: string;
    image?: string;
}): Metadata {
    const url = `${SITE_URL}${path}`;
    const imageUrl = `${SITE_URL}${image}`;

    return {
        title,
        description,
        metadataBase: new URL(SITE_URL),
        
        alternates: {
            canonical: url,
        },
    
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            locale: "es_AR",
            type: "website",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
    
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
    
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}