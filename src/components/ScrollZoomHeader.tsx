"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollZoomHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollZoomHeader({
  children,
  className = "",
}: ScrollZoomHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.89]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        style={{
          scale,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
