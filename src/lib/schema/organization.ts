export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareCompany",
        name: "Nuvra Technologies",
        url: "https://nuvratg.com",
        logo: "https://nuvratg.com/og/og-image.png",
        description:
            "Empresa de desarrollo de software especializada en sistemas a medida y soluciones digitales para empresas en Argentina.",
        areaServed: {
            "@type": "Country",
            name: "Argentina",
        },
        address: {
            "@type": "PostalAddress",
            addressCountry: "AR",
            addressRegion: "Tucumán",
        },
        sameAs: [
            "https://www.instagram.com/nuvratg",
        ],
    };
}