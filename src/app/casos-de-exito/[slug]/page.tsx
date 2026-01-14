import { createMetadata } from "@/lib/seo";

type Props = {
    params: { slug: string };
};

export function generateMetadata({ params }: Props) {
    const caseName = params.slug.replace("-", " ");

    return createMetadata({
        title: `${caseName} | Caso de éxito | Tu Startup`,
        description: `Caso de éxito: ${caseName}. Proyecto desarrollado por Nuvra.`,
        path: `/casos-de-exito/${params.slug}`
    });
}

export default function CasoDetallePage({ params }: Props) {
    return (
        <section>
            {/* Caso: {params.slug} */}
        </section>
    );
}
