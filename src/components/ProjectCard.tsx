"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#18181b] md:aspect-[16/10]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <p className="mb-2 font-[family-name:var(--font-mono-label-family)] text-[14px] uppercase tracking-wider text-white/60">
            {project.category}
          </p>
          <div className="flex items-end justify-between gap-4">
            <h3 className="translate-y-4 text-3xl font-black text-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 md:text-5xl">
              {project.title}
            </h3>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5 text-black" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
