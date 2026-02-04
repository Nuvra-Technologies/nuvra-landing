import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";

const services = [
  {
    title: "Sistemas a medida",
    description:
      "Desarrollamos sistemas adaptados a los procesos reales de tu empresa, escalables y pensados para el largo plazo.",
  },
  {
    title: "Landing pages",
    description:
      "Diseñamos y desarrollamos landings claras, rápidas y orientadas a conversión para validar o potenciar tu negocio.",
  },
  {
    title: "Desarrollo web",
    description:
      "Aplicaciones web modernas, seguras y mantenibles, con foco en rendimiento y experiencia de usuario.",
  },
];

export default function ServiciosPreview() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6 lg:px-0 max-w-6xl flex flex-col gap-16">
        {/* Header */}
        <div className="max-w-2xl">
          <FadeIn>
            <h3 className="font-semibold bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
              SERVICIOS
            </h3>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Software pensado para negocios reales
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              Ayudamos a empresas a digitalizar, optimizar y crecer mediante
              soluciones web claras y a medida.
            </p>
          </FadeIn>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 h-full">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div>
            <Link
              href="/servicios"
              className="inline-block rounded-lg bg-gradient-to-r from-[#29285e] to-[#156bb3] px-6 py-3 text-white font-medium"
            >
              Ver todos los servicios
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
