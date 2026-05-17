"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/profile";

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-[#18181b] px-6 py-24"
    >
      <h2 className="mb-16 leading-none tracking-[-0.03em] text-[#e5e5e5]">
        <span className="text-[8vw] font-black">TEKNİK </span>
        <span className="text-[8vw] font-thin italic">BECERİLER</span>
      </h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {profile.skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="mb-6 font-[family-name:var(--font-mono-label-family)] text-[14px] uppercase tracking-wider text-[#888888]">
              {group.category}
            </p>
            <ul className="flex flex-col gap-3">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="border-b border-white/10 pb-3 text-lg font-light tracking-tight text-[#e5e5e5]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
