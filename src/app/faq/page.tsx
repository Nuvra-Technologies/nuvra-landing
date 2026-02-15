import { createMetadata } from "@/lib/seo";
import FAQFull from "@/sections/faq/FAQFull";

export const metadata = createMetadata({
    title: "Preguntas frecuentes | Nuvra",
    description:
        "Respondemos las preguntas más frecuentes sobre nuestros servicios y forma de trabajo.",
    path: "/faq"
});

export default function FaqPage() {
    return (
        <section>
            <FAQFull />
        </section>
    );
}
