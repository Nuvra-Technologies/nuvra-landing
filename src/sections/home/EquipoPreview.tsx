import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/team";

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
                            <div className="group relative h-[420px] rounded-2xl overflow-hidden bg-neutral-900">

                                {/* Imagen */}
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Info inferior */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="rounded-xl bg-white/85 backdrop-blur-xl border border-white/40 px-5 py-4 shadow-lg transition duration-300 group-hover:shadow-xl">

                                        <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                                            {member.name}
                                        </h3>

                                        <p className="mt-1 text-xs font-medium bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
                                            {member.role}
                                        </p>

                                    </div>
                                </div>
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