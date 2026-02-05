import { createMetadata } from "@/lib/seo";
import EquipoContent from "@/sections/equipo/EquipoContent";

export const metadata = createMetadata({
    title: "Nuestro equipo | Nuvra",
    description:
        "Conocé al equipo detrás de Tu Startup: profesionales apasionados por la tecnología y el diseño.",
    path: "/equipo"
});

export default function EquipoPage() {
    return <EquipoContent />
}
