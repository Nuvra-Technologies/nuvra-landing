"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Trabajo = {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
};

const trabajos: Trabajo[] = [
  {
    id: 1,
    titulo: "Landing Corporativa",
    descripcion: "...",
    imagen: "/images/works/work-1.webp",
  },
  {
    id: 2,
    titulo: "Sistema de Gestión",
    descripcion: "...",
    imagen: "/images/works/work-2.webp",
  },
  {
    id: 3,
    titulo: "Landing Corporativa",
    descripcion: "...",
    imagen: "/images/works/work-3.webp",
  },
];

export default function TrabajosCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Swipe (mobile)
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const currentIndex = hoveredIndex ?? activeIndex;
  const isPaused = hoveredIndex !== null;

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % trabajos.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + trabajos.length) % trabajos.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(null); // resetea final
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50; // px

    if (distance > minSwipeDistance) {
      // swipe izquierda -> siguiente
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // swipe derecha -> anterior
      goToPrev();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f7f9fc]">
      <div className="container mx-auto px-6 lg:px-0 max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
        <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-[#29285e]">
            Proyectos
        </p>

        <h2 className="mt-2 text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
            Trabajos que ya realizamos
        </h2>

        <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
            Algunos proyectos desarrollados con foco en diseño, performance,
            escalabilidad y una experiencia de usuario profesional.
        </p>
        </div>

        {/* Desktop / tablet: acordion de tarjetas*/}
        <div className="hidden md:flex gap-4 h-[430px]">
          {trabajos.map((trabajo, index) => {
            const isActive = currentIndex === index;

            return (
              <article
                key={trabajo.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 ease-out cursor-pointer",
                  isActive ? "flex-[2.1]" : "flex-1",
                ].join(" ")}
                aria-label={trabajo.titulo}
              >
                {/* Imagen */}
                <div className="absolute inset-0">
                  <Image
                    src={trabajo.imagen}
                    alt={trabajo.titulo}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Overlay */}
                <div
                  className={[
                    "absolute inset-0 transition-all duration-500",
                    isActive
                      ? "bg-gradient-to-t from-black/75 via-black/20 to-black/10"
                      : "bg-gradient-to-t from-black/65 via-black/10 to-transparent",
                  ].join(" ")}
                />

                {/* Content */}
                <div className="relative h-full p-5 md:p-6 flex flex-col justify-end">
                  <div className="rounded-xl bg-white/90 backdrop-blur-sm border border-white/40 p-4 shadow-sm">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900">
                      {trabajo.titulo}
                    </h3>

                    <div
                      className={[
                        "grid transition-all duration-500 ease-out",
                        isActive
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0 mt-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                          {trabajo.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile: carousel (1 tarjeta visible) */}
        <div className="md:hidden">
          <div
            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm h-[420px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {trabajos.map((trabajo) => (
                <article
                  key={trabajo.id}
                  className="relative min-w-full h-full"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={trabajo.imagen}
                      alt={trabajo.titulo}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

                  <div className="relative h-full p-5 flex flex-col justify-end">
                    <div className="rounded-xl bg-white/92 backdrop-blur-sm border border-white/40 p-4 shadow-sm">
                      <h3 className="text-base font-semibold text-gray-900">
                        {trabajo.titulo}
                      </h3>
                      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                        {trabajo.descripcion}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dots mobile */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {trabajos.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir al trabajo ${index + 1}`}
                className={[
                  "h-2.5 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "w-8 bg-gradient-to-r from-[#29285e] to-[#156bb3]"
                    : "w-2.5 bg-gray-300",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Dots desktop/tablet */}
        <div className="hidden md:flex mt-5 items-center justify-center gap-2">
          {trabajos.map((_, index) => {
            const isActive = currentIndex === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Seleccionar trabajo ${index + 1}`}
                className={[
                  "h-2.5 rounded-full transition-all duration-300",
                  isActive
                    ? "w-8 bg-gradient-to-r from-[#29285e] to-[#156bb3]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}