import { createMetadata } from "@/lib/seo";

type Props = {
    params: { slug: string };
};

export function generateMetadata({ params }: Props) {
    const name = params.slug.replace(/-/g, " ");

    return createMetadata({
        title: `${name} | Servicios | Nuvra`,
        description: `Servicio de ${name} desarrollado por Nuvra.`,
        path: `/servicios/${params.slug}`,
    });
}

export default function ServicioDetallePage({ params }: Props) {
    return (
        <section>
            {/* Servicio: {params.slug} */}
        </section>
    );
}
