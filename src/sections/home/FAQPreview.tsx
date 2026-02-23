"use client";

import { useState } from "react";
import { faqPreview } from "@/data/faqs";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";

export default function FAQPreview() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="relative py-32">
            <div className="container mx-auto px-6 lg:px-0 max-w-6xl flex flex-col gap-16">

                {/* Header */}
                <div className="max-w-6xl">
                    <FadeIn>
                        <h3 className="font-semibold bg-gradient-to-r from-[#29285e] to-[#156bb3] bg-clip-text text-transparent">
                            FAQ
                        </h3>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            Preguntas frecuentes antes de empezar un proyecto
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                            Estas son las dudas más comunes que tienen las empresas antes de
                            comenzar a trabajar con nosotros.
                        </p>
                    </FadeIn>
                </div>

                {/* FAQ Cards */}
                <div className="max-w-6xl space-y-6">
                    {faqPreview.map((faq, i) => {
                        const isOpen = open === i;

                        return (
                            <FadeIn key={faq.question} delay={i * 0.05}>
                                <div className="group rounded-2xl border border-neutral-200 bg-neutral-50/60 backdrop-blur transition hover:shadow-lg">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        className="w-full flex justify-between items-center p-7 text-left"
                                    >
                                        <span className="font-semibold text-lg">{faq.question}</span>

                                        <Plus
                                            className={`text-[#156bb3] transition-transform duration-300 ${
                                                isOpen ? "rotate-45" : ""
                                            }`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={ false }
                                                animate={ isOpen ? "open" : "closed" }
                                                variants={{
                                                    open: {
                                                        gridTemplateRows: "1fr",
                                                        opacity: 1,
                                                        transition: {
                                                            gridTemplateRows: { duration: 0.5 },
                                                            opacity: { duration: 0.25, delay: 0.1 }
                                                        }
                                                    },
                                                    closed: {
                                                        gridTemplateRows: "0fr",
                                                        opacity: 0.6
                                                    }
                                                }}
                                                transition={{
                                                    duration: 0.45,
                                                    ease: [0.22, 1, 0.36, 1]
                                                }}
                                                className="grid"
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="px-7 pb-7 text-neutral-500 leading-relaxed pt-0">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>

                {/* CTA */}
                <FadeIn delay={0.25}>
                    <div>
                        <Link
                            href="/faq"
                            className="inline-block rounded-lg bg-gradient-to-r from-[#29285e] to-[#156bb3] px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition"
                        >
                            Tengo más preguntas
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}