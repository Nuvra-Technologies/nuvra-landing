"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Marca */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Link
            href="/"
            className="flex items-center gap-4 text-xl font-semibold tracking-tight"
          >
            <Image
              src="/nuvra.png"
              alt="Logo de Nuvra Technologies"
              width={32}
              height={32}
            />
            Nuvra Technologies
          </Link>

          <p className="text-neutral-600 text-sm leading-relaxed">
            Startup tecnológica especializada en desarrollo de software a medida
            para pymes argentinas que buscan digitalizar procesos y crecer con
            herramientas claras y escalables.
          </p>

          <p className="text-neutral-400 text-xs">Tucumán, Argentina</p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
            Navegación
          </h4>

          <Link
            href="/servicios"
            className="text-neutral-600 hover:text-neutral-900 text-sm"
          >
            Servicios
          </Link>

          <Link
            href="/quienes-somos"
            className="text-neutral-600 hover:text-neutral-900 text-sm"
          >
            Nosotros
          </Link>

          <Link
            href="/equipo"
            className="text-neutral-600 hover:text-neutral-900 text-sm"
          >
            Equipo
          </Link>

          <Link
            href="/faq"
            className="text-neutral-600 hover:text-neutral-900 text-sm"
          >
            Preguntas frecuentes
          </Link>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">
            Contacto
          </h4>

          <Link
            href="/contacto"
            className="text-neutral-600 hover:text-neutral-900 text-sm"
          >
            Hablemos
          </Link>

          <a
            href="mailto:contacto@nuvratg.com"
            className="text-neutral-600 hover:text-neutral-900 text-sm"
          >
            contacto@nuvratg.com
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Nuvra Technologies. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
