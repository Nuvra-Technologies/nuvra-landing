import Link from "next/link";
import Image from "next/image";
import { trabajos } from "@/data/works";

export default function ProyectosSection() {
    return (
      <section className="py-32">
        <div className="container mx-auto max-w-6xl px-6 lg:px-0">
          
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <p className="font-semibold bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
              CASOS DE ESTUDIO
            </p>
    
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">
              Proyectos desarrollados con enfoque estratégico
            </h1>
    
            <p className="mt-6 text-neutral-500 text-lg leading-relaxed">
              Cada proyecto responde a un contexto específico, con decisiones
              técnicas y estructurales pensadas para generar claridad,
              escalabilidad y eficiencia operativa.
            </p>
          </div>
    
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {trabajos.map((trabajo) => (
              <article key={trabajo.id} className="group">
                
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
                  <Image
                    src={trabajo.imagen}
                    alt={trabajo.titulo}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
            
                <div className="mt-6 space-y-4">
                  <p className="text-sm uppercase tracking-wide text-neutral-500">
                    {trabajo.categoria}
                  </p>
            
                  <h2 className="text-xl font-semibold">
                    {trabajo.titulo}
                  </h2>
            
                  <p className="text-neutral-600 leading-relaxed">
                    {trabajo.descripcion}
                  </p>
            
                  <Link
                    href={`/proyectos/${trabajo.slug}`}
                    className="inline-block text-sm font-medium text-[#156bb3] hover:underline"
                  >
                    Ver caso completo →
                  </Link>
                </div>
            
              </article>
            ))}
          </div>
          
        </div>
      </section>
    );
}