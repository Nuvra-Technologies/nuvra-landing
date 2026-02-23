import { createMetadata } from "@/lib/seo";
import ProyectosSection from "@/sections/trabajos/Proyectos";

export const metadata = createMetadata({
    title: "Nuestros proyectos | Nuvra",
    description:
        "Explorá nuestras soluciones más recientes.",
    path: "/por-que-elegirnos"
});

export default function PorQueElegirnosPage() {
    return (
        <section>
            <ProyectosSection />
        </section>
    );
}
