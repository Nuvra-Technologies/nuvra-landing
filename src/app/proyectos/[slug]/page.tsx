import { trabajos } from "@/data/works";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return trabajos.map((trabajo) => ({
        slug: trabajo.slug,
    }));
}

export default async function ProyectoPage({ params }: Props) {
    const { slug } = await params;

    const proyecto = trabajos.find(
        (p) => p.slug === slug
    );

    if (!proyecto) return notFound();

    return (
    <section className="py-32">
        <div className="container mx-auto max-w-4xl px-6">

            <p className="text-sm uppercase tracking-wide text-neutral-500">
                {proyecto.categoria}
            </p>

            <h1 className="mt-2 text-4xl font-semibold">
                {proyecto.titulo}
            </h1>

            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                {proyecto.descripcion}
            </p>

            {/* Mockup flotante */}
            <div className="mt-20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
                
                <div className="relative mx-auto max-w-5xl">
                    <div className="w-full h-auto object-cover translate-y-4 hover:translate-y-0 transition-transform duration-700 ease-out">
                        <img
                            src={proyecto.mockupSlug}
                            alt={proyecto.titulo}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Info secundaria */}
            <div className="mt-10 grid grid-cols-2 gap-8 text-sm">
                <div>
                    <p className="font-medium">Cliente</p>
                    <p className="text-neutral-600">{proyecto.cliente}</p>
                </div>

                <div>
                    <p className="font-medium">Industria</p>
                    <p className="text-neutral-600">{proyecto.industria}</p>
                </div>

                <div>
                    <p className="font-medium">Año</p>
                    <p className="text-neutral-600">{proyecto.año}</p>
                </div>

                <div>
                    <p className="font-medium">Servicios</p>
                    <p className="text-neutral-600">
                        {proyecto.servicios.join(" · ")}
                    </p>
                </div>
            </div>

            {/* Case study */}
            <div className="mt-16 space-y-12">
                <div>
                    <h2 className="text-2xl font-semibold">El desafío</h2>
                    <p className="mt-4 text-neutral-600 leading-relaxed">
                        {proyecto.desafio}
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">La solución</h2>
                    <p className="mt-4 text-neutral-600 leading-relaxed">
                        {proyecto.solucion}
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">Resultados</h2>
                    <p className="mt-4 text-neutral-600 leading-relaxed">
                        {proyecto.resultado}
                    </p>
                </div>
            </div>

        </div>
    </section>
    );
}