"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { profile } from "@/lib/profile";
import { ScrollZoomHeader } from "./ScrollZoomHeader";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.27]);
  const headingScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.89]);
  const labelOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const [firstName, lastName] = profile.name.split(" ");

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
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80"
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
        <ScrollZoomHeader scale={headingScale}>
          <div className="relative inline-block">
            <h1 className="text-[12vw] font-black uppercase leading-none tracking-[-0.03em] text-[#e5e5e5]">
              {firstName}
            </h1>
            <motion.span
              style={{ opacity: labelOpacity }}
              className="absolute left-[calc(100%+1rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[32px] font-thin italic text-[#e5e5e5] xl:block"
            >
              {lastName}
            </motion.span>
            <p className="mt-2 text-[32px] font-thin italic text-[#e5e5e5] xl:hidden">
              {lastName}
            </p>
          </div>
        </ScrollZoomHeader>

        <p className="mt-4 font-[family-name:var(--font-mono-label-family)] text-[14px] uppercase tracking-wider text-white/50">
          {profile.role}
        </p>

        <p className="mt-12 max-w-2xl text-xl font-light leading-relaxed text-white/70">
          {profile.tagline}
        </p>
      </div>
    </section>
  );
}
