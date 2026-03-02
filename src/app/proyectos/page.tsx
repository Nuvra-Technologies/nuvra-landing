import { createMetadata } from "@/lib/seo";
import ProyectosSection from "@/sections/trabajos/Proyectos";

export const metadata = createMetadata({
    title: "Proyectos y casos de éxito | Nuvra Technologies",
    description:
        "Descubrí proyectos reales de desarrollo de software y sistemas web realizados por Nuvra Technologies.",
    path: "/proyectos"
});

export default function PorQueElegirnosPage() {
    return (
        <section>
            <ProyectosSection />
        </section>
    );
}
