"use client";

import FadeIn from "@/components/motion/FadeIn";
import Image from "next/image";

export default function QuienesSomosContent() {
    return (
        <section className="py-32">
            <div className="container mx-auto px-6 lg:px-0 max-w-6xl flex flex-col gap-16">

                {/* HERO */}
                <div className="max-w-4xl">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                            Construimos tecnología clara para empresas que quieren crecer
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                            En Nuvra Technologies somos un equipo de desarrolladores formados en la
                            UTN Tucumán, especializados en software a medida para pequeñas y medianas
                            empresas que necesitan ordenar procesos, optimizar recursos y crecer
                            con herramientas reales.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                            No creemos en soluciones genéricas. Analizamos cada negocio,
                            entendemos su operación y desarrollamos sistemas y plataformas web
                            que acompañen el crecimiento de forma sostenible.
                        </p>
                    </FadeIn>
                </div>

                {/* IMAGEN ILUSTRATIVA */}
                <FadeIn delay={0.2}>
                    <div className="relative mx-auto w-full max-w-4xl rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900">
                        <Image
                            src="/images/members/working.png"
                            alt="Equipo Nuvra trabajando en desarrollo de software"
                            fill
                            className="object-cover"
                            sizes="max-w-4xl aspect-[3/2]"
                        />
                    </div>
                </FadeIn>

                {/* CÓMO TRABAJAMOS */}
                <div className="max-w-4xl">
                    <FadeIn>
                        <h2 className="text-3xl font-semibold">
                            Cómo trabajamos
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                            Nuestro enfoque combina tecnología, diseño y entendimiento del negocio.
                            Cada proyecto comienza con análisis real del problema y termina con
                            una solución clara, escalable y fácil de usar.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                            Priorizamos la claridad, la comunicación directa y los procesos
                            transparentes para que cada cliente tenga control total sobre su proyecto.
                        </p>
                    </FadeIn>
                </div>

                {/* PRINCIPIOS */}
                <div className="max-w-4xl">
                    <FadeIn>
                        <h2 className="text-3xl font-semibold">
                            Nuestros principios
                        </h2>
                    </FadeIn>

                    <div className="mt-10 space-y-10">
                        <FadeIn delay={0.1}>
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Claridad antes que complejidad
                                </h3>
                                <p className="text-neutral-400 mt-2 leading-relaxed">
                                    Diseñamos soluciones simples de usar, mantenibles y pensadas
                                    para evolucionar con el negocio.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Tecnología con propósito
                                </h3>
                                <p className="text-neutral-400 mt-2 leading-relaxed">
                                    Cada línea de código debe resolver un problema real
                                    y aportar valor medible.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Relaciones a largo plazo
                                </h3>
                                <p className="text-neutral-400 mt-2 leading-relaxed">
                                    Buscamos acompañar el crecimiento de nuestros clientes
                                    en el tiempo, no solo entregar un proyecto.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* CIERRE */}
                <FadeIn delay={0.25}>
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            Creemos que la tecnología bien aplicada puede transformar
                            la forma en que una empresa trabaja, toma decisiones y crece.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}