"use client";

import { motion, type MotionValue } from "framer-motion";

type ScrollZoomHeaderProps = {
  children: React.ReactNode;
  className?: string;
  scale: MotionValue<number>;
};

export function ScrollZoomHeader({
  children,
  className = "",
  scale,
}: ScrollZoomHeaderProps) {
  return (
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
  );
}
