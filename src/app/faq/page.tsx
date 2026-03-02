import { createMetadata } from "@/lib/seo";
import FAQFull from "@/sections/faq/FAQFull";
import { generateFaqSchema } from "@/lib/faqSchema";
import { faqFull } from "@/data/faqs";

export const metadata = createMetadata({
    title: "Preguntas frecuentes sobre desarrollo de software en Argentina | Nuvra Technologies",
    description:
        "Resolvemos dudas sobre desarrollo de software a medida, sistemas web, costos, tiempos y proceso de trabajo en Argentina.",
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
