import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";

const team = [
    {
        name: "Tomás Molina",
        role: "Desarrollo & Arquitectura",
        image: "link futuro"
    },
    {
        name: "Ignacio Conort",
        role: "Producto & UX",
        image: "link futuro"
    },
    {
        name: "Máximo Callejas",
        role: "Negocio & Estrategia",
        image: "link futuro"
    }
]

export default function EquipoPreview() {
    return (
        <section className="relative py-32">
            <div className="container mx-auto px-6 lg:px-0 max-w-6xl flex flex-col gap-16">

                {/* Header */}
                <div className="max-w-2xl">
                    <FadeIn>
                        <h3 className="font-semibold bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
                            NUESTRO EQUIPO
                        </h3>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            Las personas detrás de Nuvra
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                            Un equipo comprometido con el éxito de tu proyecto.
                        </p>
                    </FadeIn>
                </div>

                {/* Team grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {team.map((member, i) => (
                        <FadeIn key={member.name} delay={i * 0.1}>
                            <div className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:border-neutral-700">
                                <div className="aspect-square rounded-xl bg-neutral-800 mb-6 overflow-hidden">
                                    {/* Colocar Image */}
                                </div>

                                <h3 className="text-lg font-medium">
                                    {member.name}
                                </h3>
                                <p className="text-neutral-700 text-sm mt-1">
                                    {member.role}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* CTA */}
                <FadeIn delay={0.3}>
                    <div>
                        <Link
                            href="/equipo"
                            className="inline-block rounded-lg bg-gradient-to-r from-[#29285e] to-[#156bb3] px-6 py-3 text-white font-medium"
                        >
                            Conocé al equipo completo
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}