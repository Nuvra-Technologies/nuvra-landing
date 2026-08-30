import HeroMockup from "@/components/hero/HeroMockup";
import { Suspense } from "react";

export default function Hero() {
    return (
        <header className="relative pt-[110px] pb-20 lg:pb-28 border-b border-neutral-300 overflow-hidden">
    {/* Glow fondo */}
    <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#29285e_0%,_transparent_55%)] opacity-40"
    />

    <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#156bb3_0%,_transparent_55%)] opacity-25"
    />

    <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 xl:gap-24">

        {/* TEXTO */}
        <div className="flex flex-col gap-6 text-center lg:text-left lg:max-w-2xl">

            <h1 className="animate-fade-in text-[34px] md:text-[46px] lg:text-[64px] font-semibold leading-tight tracking-tight">
                Desarrollo de software a medida

                <span className="animate-fade-in block bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
                    para hacer crecer tu negocio
                </span>

                en Argentina
            </h1>

            <p className="animate-fade-in text-neutral-500 max-w-xl mx-auto lg:mx-0 text-[17px] md:text-lg leading-relaxed">
                Somos una <strong>empresa de desarrollo de software</strong> que crea
                <strong> sistemas web</strong>, <strong>aplicaciones empresariales</strong>
                y <strong>soluciones digitales a medida</strong> para optimizar procesos
                y aumentar la rentabilidad de tu empresa.
            </p>

            <div className="animate-fade-in flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
                <a
                    href="/contacto"
                    className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#29285e] to-[#156bb3] text-white font-medium shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition"
                >
                    Quiero mi presupuesto gratis
                </a>

                <a
                    href="/servicios"
                    className="px-7 py-3.5 rounded-xl border border-neutral-700 text-black hover:bg-neutral-100 transition"
                >
                    Ver servicios
                </a>
            </div>
        </div>

        {/* MOCKUP */}
        <div className="animate-fade-in hidden lg:flex justify-end">
            <Suspense fallback={null}>
                <HeroMockup />
            </Suspense>
        </div>

    </div>
</header>
    )
}
