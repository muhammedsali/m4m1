"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ScrollZoomHeader } from "./ScrollZoomHeader";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.27]);
  const labelOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen min-h-[857px] items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ scale: bgScale }}
      >
        <Image
          src="https://images.unsplash.com/photo-1493863641943-9b68992a401d?w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139,69,69,0.4) 0%, rgba(20,20,20,0.8) 60%, rgba(0,0,0,0.95) 100%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <ScrollZoomHeader>
          <div className="relative inline-block">
            <h1 className="text-[12vw] font-black leading-none tracking-[-0.03em] text-[#e5e5e5]">
              CINEMATIC
            </h1>
            <motion.span
              style={{ opacity: labelOpacity }}
              className="absolute left-[calc(100%+1rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[32px] font-thin italic text-[#e5e5e5] lg:block"
            >
              Noir
            </motion.span>
          </div>
        </ScrollZoomHeader>

        <p className="mt-16 max-w-2xl text-xl font-light leading-relaxed text-white/70">
          Derin siyahlar, keskin kontrastlar ve kaydırma ile bağlı hareket —
          galeri benzeri bir dijital deneyim.
        </p>
      </div>
    </section>
  );
}
