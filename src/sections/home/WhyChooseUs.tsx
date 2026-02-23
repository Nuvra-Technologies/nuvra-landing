import FadeIn from "@/components/motion/FadeIn";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    title: "Software a medida",
    description:
      "Creamos soluciones únicas adaptadas a las necesidades específicas de cada empresa, asegurando eficiencia y escalabilidad.",
  },
  {
    title: "Soporte confiable",
    description:
      "Acompañamos a nuestros clientes durante todo el proceso y brindamos asistencia rápida y profesional.",
  },
  {
    title: "Alcance global",
    description:
      "Trabajamos con empresas locales e internacionales, adaptándonos a diferentes mercados y necesidades.",
  },
  {
    title: "Tecnología de punta",
    description:
      "Utilizamos las últimas herramientas y buenas prácticas para ofrecer productos modernos y seguros.",
  },
];

export default function WhyChooseUsPreview() {
  return (
    <section className="relative py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-0 max-w-6xl flex flex-col gap-16">
        <div className="max-w-2xl">
          <FadeIn>
            <h3 className="font-semibold bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
              ¿POR QUÉ ELEGIRNOS?
            </h3>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Nuestras fortalezas que marcan la diferencia para tu negocio
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-4 text-neutral-600 text-lg leading-relaxed">
              Combinamos experiencia, tecnología y compromiso para ayudarte a
              digitalizar tu empresa de manera eficiente y confiable.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 0.1}>
              <div className="relative rounded-2xl bg-neutral-50 border border-neutral-200 shadow-xl p-8 flex flex-col h-full">
                <CheckCircle
                  className="absolute -top-5 -right-5 w-16 h-16 text-[#156bb3] opacity-10"
                  strokeWidth={1}
                />
                <h3 className="text-xl font-semibold mt-4">{reason.title}</h3>
                <p className="mt-4 text-neutral-600 text-base flex-grow">
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#29285e] to-[#156bb3] px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition"
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
