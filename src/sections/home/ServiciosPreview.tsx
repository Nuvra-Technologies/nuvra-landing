"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, memo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesPreview } from "@/data/services";
import { Service } from "@/types/service";

const StickyCard = memo(function StickyCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Suavizamos el valor con un spring en vez de mapear scroll -> scale en crudo.
  // Esto evita los "saltos" que se perciben como lag cuando el scroll es rápido.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.5,
  });

  const scale = useTransform(
    smoothProgress,
    [0, 1],
    [1, 0.92 + index * 0.01]
  );

  const stickyTop = 48 + index * 20;

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{
        top: `${stickyTop}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          willChange: "transform", // promueve la capa para que el scale no repinte todo
        }}
        className="relative rounded-2xl bg-neutral-50 border border-neutral-200 overflow-hidden shadow-xl"
      >
        {/* Aura tornasolada - gradiente en vez de blur filter (mucho más barato) */}
        <div
          className={`
            absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full
            opacity-[0.35] pointer-events-none
            ${
              index % 2 === 0
                ? "bg-[radial-gradient(circle,rgba(41,40,94,0.25),rgba(21,107,179,0.08)_60%,transparent_75%)]"
                : "bg-[radial-gradient(circle,rgba(21,107,179,0.25),rgba(41,40,94,0.08)_60%,transparent_75%)]"
            }
          `}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[560px]">
          {/* Texto a la izquierda */}
          <div className="grid md:grid-cols-1 gap-10 items-center h-full p-10 md:p-14">
            <div>
              <span className="text-sm md:text-lg font-semibold text-[#156bb3] uppercase tracking-wide">
                {service.category}
              </span>

              <h3 className="text-2xl md:text-5xl font-semibold mt-4">
                {service.title}
              </h3>

              <p className="mt-6 text-neutral-600 md:text-lg leading-relaxed max-w-lg">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Icono tipo fondo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Icono */}
          <service.icon
            className="
              absolute right-[-60px] top-1/2 -translate-y-1/2
              w-[320px] h-[320px] text-[#156bb3] opacity-[0.12]
            "
            strokeWidth={1.2}
          />
        </div>
      </motion.div>
    </div>
  );
});

export default function ServiciosPreview() {
  return (
    <section className="relative py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-0 max-w-6xl">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-semibold bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent"
        >
          SERVICIOS
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-semibold max-w-2xl mt-2 mb-20"
        >
          Estas son las soluciones que más piden las empresas cuando
          empiezan a digitalizarse
        </motion.h2>

        <div className="flex flex-col gap-6">
          {servicesPreview.map((service, i) => (
            <StickyCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <Link
            href="/servicios"
            className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#29285e] to-[#156bb3] px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition"
          >
            Ver todos los servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}