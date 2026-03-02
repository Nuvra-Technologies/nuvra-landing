import FadeIn from "@/components/motion/FadeIn";
import { servicesFull } from "@/data/services";

export default function ServiciosContent() {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="container mx-auto px-6 lg:px-0 max-w-6xl flex flex-col gap-32">

        {/* HERO */}
        <div className="max-w-3xl">
          <FadeIn>
            <h3 className="font-semibold bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
              SERVICIOS
            </h3>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-2">
              Servicios de desarrollo de software y sistemas web en Argentina
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-neutral-500 text-lg leading-relaxed">
              Ofrecemos servicios de <strong>desarrollo de software a medida</strong>,
              sistemas web y soluciones digitales para ayudar a pymes en Argentina
              a digitalizar procesos, vender online y automatizar su operación
              de forma simple, escalable y segura.
            </p>
          </FadeIn>
        </div>

        {/* LISTADO SERVICIOS */}
        <div className="flex flex-col gap-24">
          {servicesFull.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05}>
              <div className="grid lg:grid-cols-2 gap-12 items-start">

                {/* TEXTO */}
                <div>
                  <span className="text-sm font-semibold text-[#156bb3] uppercase">
                    {service.category}
                  </span>

                  <h2 className="text-3xl font-semibold mt-3">
                    {service.title}
                  </h2>

                  <p className="mt-6 text-neutral-500 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {service.features?.map((feature) => (
                      <li key={feature} className="text-neutral-600">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CARD */}
                <div className="relative rounded-2xl border border-neutral-200 bg-neutral-50/70 backdrop-blur p-8 shadow-sm overflow-hidden">

                  {/* icono decorativo fondo */}
                  <service.icon
                    className="
                      absolute
                      -right-16
                      -bottom-16
                      w-56
                      h-56
                      text-[#156bb3]
                      opacity-[0.07]
                      pointer-events-none
                    "
                    strokeWidth={1}
                  />

                    <h3 className="font-semibold mb-4">Ideal para</h3>

                    <ul className="space-y-3 text-neutral-500 relative">
                      {service.idealFor?.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* PROCESO */}
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-semibold">Cómo trabajamos</h2>

            <p className="mt-6 text-neutral-500 leading-relaxed">
              Trabajamos con un proceso claro y transparente para garantizar
              resultados y evitar sorpresas durante el proyecto.
            </p>

            <ol className="mt-10 space-y-4 text-neutral-600">
              <li>1- Reunión inicial y análisis del proyecto</li>
              <li>2- Definición de alcance y presupuesto</li>
              <li>3- Desarrollo y revisiones iterativas</li>
              <li>4- Entrega y despliegue</li>
              <li>5- Mantenimiento opcional</li>
            </ol>
          </FadeIn>
        </div>

        {/* mantenimiento */}
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-r from-[#29285e] to-[#156bb3] p-14 text-white shadow-xl">
            <h2 className="text-3xl font-semibold">
              Mantenimiento mensual y soporte continuo
            </h2>

            <p className="mt-6 max-w-2xl text-white/90 leading-relaxed">
              Después del lanzamiento, podemos seguir acompañándote con soporte,
              actualizaciones y mejoras para que tu sistema evolucione sin riesgos.
            </p>
          </div>
        </FadeIn>

        {/* CTA FINAL */}
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-semibold">
              ¿Tenés un proyecto en mente?
            </h2>

            <p className="mt-4 text-neutral-500">
              Contanos tu idea y te enviamos un presupuesto sin compromiso.
            </p>

            <a
              href="/contacto"
              className="inline-block mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-[#29285e] to-[#156bb3] text-white font-medium shadow-lg hover:scale-[1.02] transition"
            >
              Solicitar presupuesto
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
