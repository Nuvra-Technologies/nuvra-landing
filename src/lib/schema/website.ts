export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Nuvra Technologies",
        url: "https://nuvratg.com",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://nuvratg.com/?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };
}