"use client";

import React, { useState } from "react";

type ContactoFormData = {
  nombre: string;
  email: string;
  mensaje: string;
  empresa: string; // honeypot 
};

export default function Contacto() {
  const [formData, setFormData] = useState<ContactoFormData>({
    nombre: "",
    email: "",
    mensaje: "",
    empresa: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setEnviado(false);
    setCargando(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setEnviado(true);
        setFormData({
          nombre: "",
          email: "",
          mensaje: "",
          empresa: "",
        });
      } else {
        setError(data.error || "No se pudo enviar el mensaje. Intentá nuevamente.");
      }
    } catch {
      setError("Error de red. Revisá tu conexión e intentá nuevamente.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <section
      id="contacto"
      className="pt-28 pb-16 md:pt-32 md:pb-24 min-h-[100svh] bg-gradient-to-b from-white to-[#f7f9fc]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs md:text-sm text-gray-600 shadow-sm">
            Nuvra Technologies · Contacto
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Contáctanos
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Contanos qué necesitás y te ayudamos a transformar tu idea en una
            solución digital clara, moderna y escalable.
          </p>
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.2fr] gap-8 lg:gap-10 items-start">
          {/* Columna izquierda: info */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="rounded-2xl bg-gradient-to-r from-[#29285e] to-[#156bb3] p-6 text-white">
              <h2 className="text-xl md:text-2xl font-semibold">
                Hablemos de tu proyecto
              </h2>
              <p className="mt-2 text-white/90 text-sm md:text-base leading-relaxed">
                Ya sea que necesites una landing, una web corporativa o una
                solución a medida, estamos listos para acompañarte.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  Email
                </h3>
                <a
                  href="mailto:contacto@nuvratg.com"
                  className="mt-2 inline-block text-gray-600 hover:text-gray-900 transition"
                >
                  contacto@nuvratg.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  Teléfono
                </h3>
                <a
                  href="tel:+5493816709781"
                  className="mt-2 inline-block text-gray-600 hover:text-gray-900 transition"
                >
                  +54 9 381 670 9781
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  LinkedIn
                </h3>
                <a
                  href="https://linkedin.com/in/nuvra-technologies-0563913a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-gray-600 hover:text-gray-900 transition break-all"
                >
                  linkedin.com/in/nuvra-technologies
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-medium text-gray-900">Tip:</span> Si nos
                compartís objetivo, tiempos y contexto del proyecto, podemos
                orientarte mejor desde el primer mensaje.
              </p>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Envíanos un mensaje
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              Respondemos a la brevedad. También podés escribirnos directamente
              por correo.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Honeypot (campo oculto anti-spam) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="empresa">Empresa</label>
                <input
                  id="empresa"
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#156bb3]/25 focus:border-[#156bb3] transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tuemail@empresa.com"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#156bb3]/25 focus:border-[#156bb3] transition"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={2000}
                  placeholder="Contanos en qué podemos ayudarte..."
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#156bb3]/25 focus:border-[#156bb3] transition resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={cargando}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#29285e] to-[#156bb3] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {cargando ? "Enviando..." : "Enviar mensaje"}
              </button>

              {enviado && (
                <p className="text-sm text-emerald-700">
                  ✅ Mensaje enviado correctamente. Te responderemos a la
                  brevedad.
                </p>
              )}

              {error && <p className="text-sm text-red-600">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}