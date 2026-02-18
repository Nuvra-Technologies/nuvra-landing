import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";
import Image from "next/image";

export default function QuienesSomosPreview() {
    return (
        <section className="relative pt-32 pb-44 md:pb-52">
            <div className="container mx-auto px-6 lg:px-0 max-w-6xl flex flex-col gap-12">

                {/* Título */}
                <FadeIn>
                    <h3 className="font-semibold bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
                        ¿QUIÉNES SOMOS?
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Startup de software a medida en Tucumán: 
                        <span> desarrollo web y sistemas personalizados para pymes argentinas</span>
                    </h2>
                </FadeIn>

                {/* Imagen + Párrafo */}
                <div className="relative w-full max-w-3xl mx-auto">
                    
                    {/* Imagen */}
                    <FadeIn>
                        <div className="relative w-full aspect-[3/2] md:aspect-[5/3] rounded-3xl overflow-hidden bg-neutral-800">
                            <Image
                                src="/images/members/team-picture.jpg"
                                alt="Imagen del equipo Nuvra"
                                fill
                                className="object-cover object-[center_20%]"
                                sizes="(max-width: 768px) 100vw, 1200px"
                                priority
                            />
                        </div>
                    </FadeIn>

                    {/* Párrafo */}
                    <FadeIn delay={0.1}>
                        <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:-bottom-32 mt-6 md:mt-0 w-full max-w-2xl rounded-2xl bg-white p-4 shadow-xl text-center">
                            <p className="text-neutral-700 text-lg leading-relaxed">
                                Somos un equipo de Tucumán, recibidos de Programadores Universitarios de la UTN, que crea <strong>software a medida</strong> y <strong>desarrollo web profesional.</strong>
                            </p>
                            <p className="mt-4 text-neutral-600 text-base">
                                Entendemos el día a día argentino: controlar costos, agilizar procesos y crecer. Armamos herramientas reales, fáciles de usar y escalables.
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