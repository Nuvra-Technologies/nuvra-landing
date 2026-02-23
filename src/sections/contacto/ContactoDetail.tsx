"use client";

import FadeIn from "@/components/motion/FadeIn";
import Contacto from "../home/Contacto";

export default function ContactoDetail() {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="container mx-auto px-6 lg:px-0 max-w-6xl flex flex-col gap-24">

        {/* Header */}
        <div className="max-w-3xl">
          <FadeIn>
            <h3 className="font-semibold bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
              CONTACTO
            </h3>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-2 tracking-tight">
              Contanos tu proyecto y lo analizamos juntos
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-neutral-500 text-lg leading-relaxed">
              Respondemos en menos de 24 horas hábiles. Si tu proyecto encaja
              con lo que hacemos, coordinamos una reunión inicial sin costo
              para definir alcance y próximos pasos.
            </p>
          </FadeIn>
        </div>

        {/* Expectativas */}
        <FadeIn>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 backdrop-blur p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">
              ¿Qué sucede después de enviarnos tu mensaje?
            </h2>

            <ol className="mt-6 space-y-4 text-neutral-600">
              <li>1️⃣ Revisamos tu mensaje y contexto.</li>
              <li>2️⃣ Te respondemos por correo para profundizar detalles.</li>
              <li>3️⃣ Si es necesario, coordinamos una reunión inicial.</li>
              <li>4️⃣ Definimos alcance, tiempos y presupuesto claro.</li>
            </ol>
          </div>
        </FadeIn>

        {/* Formulario */}
        <Contacto />

        {/* Orientación */}
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">
              Para poder orientarte mejor
            </h2>

            <p className="mt-4 text-neutral-500 leading-relaxed">
              Si podés, contanos:
            </p>

            <ul className="mt-6 space-y-3 text-neutral-600">
              <li>• Qué problema querés resolver</li>
              <li>• Si ya tenés algo desarrollado</li>
              <li>• Plazo estimado</li>
              <li>• Presupuesto aproximado (si lo tenés)</li>
            </ul>
          </div>
        </FadeIn>

        {/* CTA secundario */}
        <FadeIn>
          <div className="text-center">
            <p className="text-neutral-500">
              También podés escribirnos directamente a
            </p>

            <a
              href="mailto:contacto@nuvratg.com"
              className="mt-3 inline-block font-medium text-[#156bb3] hover:underline"
            >
              contacto@nuvratg.com
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}