"use client";

import { faqFull } from "@/data/faqs";

export default function FAQFull() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-semibold mb-20">
                    Preguntas frecuentes
                </h1>

                <div className="space-y-16">
                    {faqFull.map((faq) => (
                        <div key={faq.question} className="max-w-2xl">
                            {faq.category && (
                                <span className="text-sm text-[#156bb3] font-semibold uppercase tracking-wide">
                                    {faq.category}
                                </span>
                            )}

                            <h3 className="text-2xl font-semibold mt-3">
                                {faq.question}
                            </h3>
                
                            <p className="mt-4 text-neutral-600 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
