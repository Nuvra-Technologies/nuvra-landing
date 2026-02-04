import FadeIn from "@/components/motion/FadeIn";

export default function ServiciosContent() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6 lg:px-0 max-w-5xl flex flex-col gap-24">
        {/* Hero */}
        <div className="max-w-2xl">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Nuestros servicios
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
              Desarrollamos soluciones digitales pensadas para acompañar el
              crecimiento de tu negocio, combinando criterio técnico, diseño y
              entendimiento del negocio.
            </p>
          </FadeIn>
        </div>

        {/* Servicios */}
        <div className="flex flex-col gap-20">
          <FadeIn>
            <div>
              <h2 className="text-2xl font-semibold">Sistemas a medida</h2>
              <p className="mt-4 text-neutral-300 leading-relaxed max-w-3xl">
                Analizamos tus procesos y desarrollamos sistemas que se adapten
                a la forma real en la que trabaja tu empresa. Soluciones
                escalables, seguras y mantenibles, pensadas para crecer con tu
                negocio.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-2xl font-semibold">Landing pages</h2>
              <p className="mt-4 text-neutral-300 leading-relaxed max-w-3xl">
                Diseñamos landing pages claras, rápidas y orientadas a
                conversión, ideales para presentar servicios, validar ideas o
                potenciar campañas comerciales.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h2 className="text-2xl font-semibold">Desarrollo web</h2>
              <p className="mt-4 text-neutral-300 leading-relaxed max-w-3xl">
                Construimos aplicaciones web modernas con tecnologías actuales,
                priorizando rendimiento, experiencia de usuario y mantenibilidad
                a largo plazo.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
