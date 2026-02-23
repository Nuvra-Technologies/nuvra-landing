"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-lg md:text-xl font-semibold tracking-tight"
        >
          <Image
            src="/nuvra.png"
            alt="Logo de Nuvra Technologies"
            width={30}
            height={30}
            className="h-[30px] w-auto"
            priority
          />
          <span className="whitespace-nowrap">
            Nuvra Technologies
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/quienes-somos">Nosotros</Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contacto"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-[#29285e] to-[#156bb3] px-5 py-2 text-sm font-semibold text-white transition"
        >
          Hablemos
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-8 flex flex-col gap-6 text-base font-medium">
      
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-3 border-b border-gray-100"
            >
              Inicio
            </Link>
      
            <Link
              href="/servicios"
              onClick={() => setOpen(false)}
              className="py-3 border-b border-gray-100"
            >
              Servicios
            </Link>

            <Link
              href="/proyectos"
              onClick={() => setOpen(false)}
              className="py-3 border-b border-gray-100"
            >
              Proyectos
            </Link>
      
            <Link
              href="/quienes-somos"
              onClick={() => setOpen(false)}
              className="py-3 border-b border-gray-100"
            >
              Nosotros
            </Link>
      
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-gradient-to-r from-[#29285e] to-[#156bb3] px-6 py-3 text-white text-center font-semibold"
            >
              Hablemos
            </Link>
      
          </div>
        </div>
      )}
    </header>
  );
}