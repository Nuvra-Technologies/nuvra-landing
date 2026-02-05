import FadeIn from "@/components/motion/FadeIn";

export default function QuienesSomosContent() {
    return (
        <section className="py-28">
            <div className="container mx-auto px-6 lg:px-0 max-w-5xl flex flex-col gap-8">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-semibold">
                        Quiénes somos
                    </h1>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        En Nuvra Technologies somos un equipo de desarrolladores especializados en software a
                        medida, enfocados en ayudar a pequeñas y mediana empresas a digitalizar procesos, optimizar
                        su operación y crecer de forma sostenible.
                    </p>
                </FadeIn>

                <FadeIn delay={0.15}>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Nuestro enfoque combina tecnología, diseño y entendimiento del negocio para construir
                        soluciones claras, escalables y pensadas para el largo plazo.
                    </p>
                </FadeIn>
            </div>
        </section>
    )
}