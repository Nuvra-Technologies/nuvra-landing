import FadeIn from "@/components/motion/FadeIn";
import { team } from "@/data/team";

export default function EquipoContent() {
    return (
        <section className="relative py-32">
            <div className="container mx-auto px-6 lg:px-0 max-w-5xl flex flex-col gap-24">

                {/* Hero */}
                <div className="max-w-2xl">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-semibold">
                            Personas reales, software serio
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                            En Nuvra creemos que los buenos productos se construyen con criterio técnico,
                            comunicación clara y foco en el negocio
                        </p>
                    </FadeIn>
                </div>

                {/* Team */}
                <div className="flex flex-col gap-16">
                    {team.map((member, i) => (
                        <FadeIn key={member.name} delay={i * 0.1}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                                <div className="aspect-square rounded-2xl bg-neutral-800 overflow-hidden">
                                    {/* Reemplazar por <Image /> */}
                                </div>

                                <div className="md:col-span-2">
                                    <h2 className="text-2xl font-semibold">
                                        {member.name}
                                    </h2>
                                    <p className="text-neutral-400 mt-1">
                                        {member.role}
                                    </p>

                                    <p className="mt-4 text-neutral-300 leading-relaxed max-w-xl">
                                        {member.fullBio}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Work philosophy */}
                <FadeIn>
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-10">
                        <h3 className="text-2xl font-semibold">
                            Cómo trabajamos
                        </h3>

                        <p className="mt-4 text-neutral-700 leading-relaxed max-w-3xl">
                            Trabajamos de forma directa con nuestros clientes, sin intermediarios,
                            priorizando soluciones claras, escalables y mantenibles en el tiempo.
                            Nuestro objetivo es que el software acompañe el crecimiento del negocio.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}