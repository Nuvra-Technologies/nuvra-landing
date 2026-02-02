import FadeIn from "@/components/motion/FadeIn"

export default function Hero() {
    return (
        <header className="min-h-screen flex items-center border-b-1 border-neutral-300">
            {/* Difuminado para el fondo */}
            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#29285e_0%,_transparent_50%)] opacity-40"
            />
            <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#156bb3_0%,_transparent_50%)] opacity-20"
            />

            <div className="container mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Texto */}
                <div className="flex flex-col gap-6">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                            Impulsamos tu negocio con
                            <span className="block bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
                                software a medida
                            </span>
                            para pymes
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <p className="text-neutral-400 max-w-xl text-lg">
                            Desarrollamos software a medida, sitios web y sistemas personalizados para pymes
                            que buscan vender más, automatizar procesos y crecer de forma escalable y segura.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="flex gap-4 mt-4">
                            <a 
                                href="/contacto"
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#29285e] to-[#156bb3] text-white font-medium transition"
                            >
                                Solicitar presupuesto
                            </a>

                            <a 
                                href="/servicios"
                                className="px-6 py-3 rounded-lg border border-neutral-700 text-black transition"
                            >
                                Ver servicios
                            </a>
                        </div>
                    </FadeIn>
                </div>

                {/* Visual */}
                <FadeIn delay={0.15}>
                    <div className="hidden lg:flex justify-end">
                        <div className="w-[420px] h-[420px] rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800" />
                    </div>
                </FadeIn>
            </div>
        </header>
    )
}