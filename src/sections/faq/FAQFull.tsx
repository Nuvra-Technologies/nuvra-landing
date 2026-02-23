"use client";

import { faqFull } from "@/data/faqs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQFull() {
    type Faq = (typeof faqFull)[number]
    const [open, setOpen] = useState<string | null>(null);

    const groupedFaqs = faqFull.reduce((acc, faq) => {
        const category = faq.category ?? "General"

        if (!acc[category]) acc[category] = []
        acc[category].push(faq)

        return acc
    }, {} as Record<string, Faq[]>)

    const categories = Object.keys(groupedFaqs)

    return (
        <section className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* HEADER */}
                <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                    Preguntas frecuentes
                </h1>

                <p className="mb-24 text-neutral-600 max-w-2xl leading-relaxed">
                    Respondemos las preguntas más comunes sobre desarrollo de software a medida,
                    landing pages, costos, tiempos y proceso de trabajo.
                </p>

                {/* ÍNDICE */}
                <div className="mb-24 flex flex-wrap gap-3">
                    {categories.map(cat => (
                        <a
                            key={cat}
                            href={`#${cat.toLowerCase()}`}
                            className="px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-sm font-medium transition"
                        >
                            {cat}
                        </a>
                    ))}
                </div>

                {/* CATEGORÍAS */}
                <div className="space-y-24">
                    {Object.entries(groupedFaqs).map(([category, faqs]) => (
                        <div
                            key={category}
                            id={category.toLowerCase()}
                            className="space-y-12 scroll-mt-32"
                        >

                            <h2 className="text-sm text-[#156bb3] font-semibold uppercase tracking-wide">
                                {category}
                            </h2>

                            <div className="space-y-6">
                                {faqs.map((faq, i) => {
                                    const id = `${category}-${i}`
                                    const isOpen = open === id

                                    return (
                                        <div
                                            key={faq.question}
                                            className="rounded-2xl border border-neutral-200"
                                        >
                                            <button
                                                onClick={() => setOpen(isOpen ? null : id)}
                                                className="w-full flex justify-between items-center p-6 text-left"
                                            >
                                                <span className="font-semibold text-lg">
                                                    {faq.question}
                                                </span>

                                                <Plus
                                                    className={`text-[#156bb3] transition-transform duration-300 ${
                                                        isOpen ? "rotate-45" : ""
                                                    }`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ gridTemplateRows: "0fr", opacity: 0 }}
                                                        animate={{ gridTemplateRows: "1fr", opacity: 1 }}
                                                        exit={{ gridTemplateRows: "0fr", opacity: 0 }}
                                                        transition={{ duration: 0.4 }}
                                                        className="grid"
                                                    >
                                                        <div className="overflow-hidden">
                                                            <p className="px-6 pb-6 text-neutral-600 leading-relaxed">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}

                    {/* CTA FINAL */}
                    <div className="mt-24 text-center">
                        <p className="text-neutral-500 mb-6">
                            Si no encontraste lo que buscabas…
                        </p>

                        <a
                            href="/contacto"
                            className="inline-block rounded-lg bg-gradient-to-r from-[#29285e] to-[#156bb3] px-6 py-3 text-white font-medium"
                        >
                            ¿Tenés otra pregunta? Hablemos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
