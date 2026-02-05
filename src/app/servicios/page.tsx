import { createMetadata } from "@/lib/seo";
import ServiciosContent from "@/sections/servicios/ServiciosContent";

export const metadata = createMetadata({
  title: "Servicios | Nuvra",
  description:
    "Desarrollamos sistemas a medida, landing pages y soluciones web pensadas para acompañar el crecimiento de tu negocio.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return <ServiciosContent />;
}
