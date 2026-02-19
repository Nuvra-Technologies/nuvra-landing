"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesPreview } from "@/data/services";
import { Service } from "@/types/service";

function StickyCard({
  service,
  index,
  totalCards,
}: {
  service: Service;
  index: number;
  totalCards: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.2
  });

  const scale = useTransform(
    smoothProgress,
    [0, 1],
    [1, 0.92 + index * 0.01]
  );

  const stickyTop = 40 + index * 30;

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{
        top: `${stickyTop}px`,
        zIndex: index + 1,
        marginBottom: index < totalCards - 1 ? "0px" : "0px",
      }}
    >
      <motion.div
        style={{ scale }}
        className="relative rounded-2xl bg-neutral-50 border border-neutral-200 overflow-hidden shadow-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[560px]">

          {/* Texto a la izquierda */}
          <div className="grid md:grid-cols-2 gap-10 items-center h-full p-10 md:p-14">
            <div>
              <span className="text-sm font-semibold text-[#156bb3] uppercase tracking-wide">
                {service.category}
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold mt-4">
                {service.title}
              </h3>

              <p className="mt-6 text-neutral-600 leading-relaxed max-w-lg">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Icono tipo fondo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <service.icon
            className="
              absolute
              -right-24
              top-1/2
              -translate-y-1/2
              w-[360px]
              h-[360px]
              text-[#156bb3]
              opacity-[0.06]
            "
            strokeWidth={1}
          />
        </div>
      </motion.div>
    </div>
  );
}

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

        {/* Sticky cards */}
        <div className="flex flex-col gap-10">
          {servicesPreview.map((service, i) => (
            <StickyCard
              key={service.title}
              service={service}
              index={i}
              totalCards={servicesPreview.length}
            />
          ))}
        </div>

        {/* CTA */}
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