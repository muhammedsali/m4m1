"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/profile";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="about"
      ref={ref}
      className="flex min-h-screen items-center justify-center bg-[#09090b] px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 font-[family-name:var(--font-mono-label-family)] text-[14px] uppercase tracking-wider text-[#888888]">
          Hakkımda
        </p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {profile.about.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[5vw] font-medium leading-tight tracking-tight text-[#e5e5e5] md:text-[4vw]"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 h-px max-w-[320px] bg-white/30"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 border-t border-white/10 pt-12"
        >
          <p className="font-[family-name:var(--font-mono-label-family)] text-[14px] uppercase tracking-wider text-[#888888]">
            Eğitim
          </p>
          <h3 className="mt-4 text-3xl font-black tracking-tight text-[#e5e5e5] md:text-4xl">
            {profile.education.degree}
          </h3>
          <p className="mt-2 text-lg font-light text-[#888888]">
            {profile.education.school}
          </p>
          <p className="mt-1 font-[family-name:var(--font-mono-label-family)] text-sm text-white/40">
            {profile.education.period}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
