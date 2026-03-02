export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://nuvratg.com/sitemap.xml",
        host: "https://nuvratg.com",
    };
}