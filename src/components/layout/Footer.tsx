"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur border-t border-gray-200 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-4 max-w-xs">
          <Link
            href="/"
            className="flex items-center gap-4 text-xl font-bold tracking-tight"
          >
            <Image
              src="/nuvra.png"
              alt="Logo de Nuvra Technologies"
              width={30}
              height={30}
            />
            Nuvra Technologies
          </Link>
          <p className="text-neutral-600 text-sm leading-relaxed">
            Creamos soluciones digitales a medida, ayudando a pymes y empresas a
            crecer con software claro y escalable.
          </p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-neutral-900">Empresa</h4>
            <Link
              href="/quienes-somos"
              className="text-neutral-600 hover:text-gray-800 text-sm"
            >
              Nosotros
            </Link>
            <Link
              href="/equipo"
              className="text-neutral-600 hover:text-gray-800 text-sm"
            >
              Equipo
            </Link>
            <Link
              href="/servicios"
              className="text-neutral-600 hover:text-gray-800 text-sm"
            >
              Servicios
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-neutral-900">Contacto</h4>
            <Link
              href="#contact"
              className="text-neutral-600 hover:text-gray-800 text-sm"
            >
              Hablemos
            </Link>
            <Link
              href="mailto:info@nuvra.com"
              className="text-neutral-600 hover:text-gray-800 text-sm"
            >
              contacto@nuvratg.com
            </Link>
          </div>
        </div>
      </div>

      {/* Derechos */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Nuvra Technologies. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
