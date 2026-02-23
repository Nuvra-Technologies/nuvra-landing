export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Nuvra Technologies",
        url: "https://nuvratg.com",
        logo: "https://nuvratg.com/og/og-image.jpg",
        sameAs: [
            "https://www.instagram.com/nuvra.tech",
        ],
    };
}