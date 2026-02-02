import { createMetadata } from "@/lib/seo";
import QuienesSomosContent from "@/sections/quienes-somos/QuienesSomosContent";

export const metadata = createMetadata({
    title: "Quiénes somos | Nuvra",
    description:
        "Conocé quiénes somos, nuestra historia, valores y la forma en la que trabajamos con nuestros clientes.",
    path: "/quienes-somos"
});

export default function QuienesSomosPage() {
    return <QuienesSomosContent />
}
