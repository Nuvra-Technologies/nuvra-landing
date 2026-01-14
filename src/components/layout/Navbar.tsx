"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tight">
                    Nuvra
                </Link>
        
                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="#about" className="hover:text-gray-600">
                        Nosotros
                    </Link>
                    <Link href="#services" className="hover:text-gray-600">
                        Servicios
                    </Link>
                    <Link href="#contact" className="hover:text-gray-600">
                        Contacto
                    </Link>
                </nav>
        
                {/* CTA */}
                <Link
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition"
                >
                    Hablemos
                </Link>
            </div>
        </header>
    );
}
