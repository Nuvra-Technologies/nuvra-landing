"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight flex gap-4">
          <Image
            src="/nuvra.png"
            alt="Logo de Nuvra Technologies"
            width={30}
            height={30}
          />
          Nuvra Technologies
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/quienes-somos" className="hover:text-gray-600">
            Nosotros
          </Link>
          <Link href="/equipo" className="hover:text-gray-600">
            Equipo
          </Link>
          <Link href="/servicios" className="hover:text-gray-600">
            Servicios
          </Link>
          <Link href="/faq" className="hover:text-gray-600">
            Preguntas frecuentes
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-[#29285e] to-[#156bb3] px-5 py-2 text-sm font-semibold text-white transition"
        >
          Hablemos
        </Link>
      </div>
    </header>
  );
}
