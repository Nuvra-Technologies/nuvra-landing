"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroMockup() {
    const ref = useRef<HTMLDivElement>(null);

    // Parallax al scrollear
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [80, -40]);

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className="relative w-[520px] h-[420px]"
        >

            {/* Floating group */}
            <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative w-full h-full"
            >
                {/* LAPTOP (BASE) */}
                <motion.div
                    initial={{ rotate: -6 }}
                    animate={{ rotate: -4 }}
                    transition={{ duration: 2 }}
                    className="absolute left-0 bottom-0 z-10"
                >
                    <Image
                        src="/images/hero-mockup1.png"
                        alt="Software en laptop"
                        width={520}
                        height={400}
                        priority
                    />
                </motion.div>

                {/* TABLET (ENCIMA) */}
                <motion.div
                    initial={{ rotate: 8 }}
                    animate={{ rotate: 6 }}
                    transition={{ duration: 2 }}
                    className="absolute right-[-20px] top-[240px] z-20"
                >
                    <Image
                        src="/images/mockup-tablet.png"
                        alt="Software en tablet"
                        width={280}
                        height={340}
                        className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
                    />
                </motion.div>

            </motion.div>
        </motion.div>
    );
}
