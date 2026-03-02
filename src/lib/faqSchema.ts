import { FAQ } from "@/types/faq";

export function generateFaqSchema(faqs: FAQ[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://nuvratg.com/faq#faq",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer.replace(/\n/g, " "),
            },
        })),
    };
}