"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="manifesto"
      ref={ref}
      className="flex min-h-screen items-center justify-center bg-[#09090b] px-6"
    >
      <div className="max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[5vw] font-medium leading-tight tracking-tight text-[#e5e5e5] md:text-[7vw]"
        >
          Tasarım, ışığın gölgede bıraktığı izdir. Her piksel, bir kareye
          dönüşür.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 h-px max-w-[320px] bg-white/30"
        />
      </div>
    </section>
  );
}
