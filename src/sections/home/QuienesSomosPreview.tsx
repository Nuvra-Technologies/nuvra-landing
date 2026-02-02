import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";

export default function QuienesSomosPreview() {
    return (
        <section className="relative py-32">
            <div className="container mx-auto px-6 lg:px-0 max-w-6xl flex flex-col gap-12">

                {/* Título */}
                <FadeIn>
                    <h3 className="font-semibold bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
                        ¿QUIÉNES SOMOS?
                    </h3>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Startup de desarrollo de software en Tucumán, experta en
                        desarrollo web y sistemas a medida
                    </h2>
                </FadeIn>

                {/* Imagen + Párrafo */}
                <div className="relative">
                    
                    {/* Imagen */}
                    <FadeIn>
                        <div className="w-full h-[260px] md:h-[360px] rounded-2xl overflow-hidden bg-neutral-800">
                            {/* Reemplazar por Image */}
                        </div>
                    </FadeIn>

                    {/* Párrafo */}
                    <FadeIn delay={0.1}>
                        <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:-bottom-30 mt-6 md:mt-0 w-full max-w-3xl rounded-2xl bg-white p-4 shadow-xl text-center">
                            <p className="mt-6 text-neutral-600 text-lg leading-relaxed">
                                Somos un equipo de desarrolladores enfocados en crear software a medida para
                                pymes, con una mirada técnica, clara y orientada a resultados reales.
                            </p>

                            <Link
                                href="/quienes-somos"
                                className="inline-block mt-6 rounded-lg bg-gradient-to-r from-[#29285e] to-[#156bb3] px-6 py-3 text-white font-medium"
                            >
                                Conocé más sobre nosotros
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}