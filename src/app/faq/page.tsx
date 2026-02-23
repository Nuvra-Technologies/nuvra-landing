import { createMetadata } from "@/lib/seo";
import FAQFull from "@/sections/faq/FAQFull";
import { generateFaqSchema } from "@/lib/faqSchema";
import { faqFull } from "@/data/faqs";

export const metadata = createMetadata({
    title: "Preguntas frecuentes | Nuvra",
    description:
        "Respondemos las preguntas más frecuentes sobre nuestros servicios y forma de trabajo.",
    path: "/faq"
});

export default function FaqPage() {
    const schema = generateFaqSchema(faqFull)

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <FAQFull />
        </section>
    );
}
