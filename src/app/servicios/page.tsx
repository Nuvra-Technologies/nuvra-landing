import { createMetadata } from "@/lib/seo";
import ServiciosContent from "@/sections/servicios/ServiciosContent";
import { generateServicesSchema } from "@/lib/servicesSchema";

export const metadata = createMetadata({
  title: "Servicios de desarrollo web y software a medida | Nuvra",
  description:
    "Desarrollamos sistemas a medida, landing pages y soluciones web pensadas para acompañar el crecimiento de tu negocio.",
  path: "/servicios",
});

export default function ServiciosPage() {
  const schema = generateServicesSchema();

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ServiciosContent />
    </section>
  );
}