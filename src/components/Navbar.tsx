"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/profile";

const links = [
  { label: "Projeler", href: "#work" },
  { label: "Hakkımda", href: "#about" },
  { label: "Beceriler", href: "#skills" },
  { label: "İletişim", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full mix-blend-difference px-6 py-8">
      <nav className="flex items-center justify-between">
        <a
          href="#"
          className="text-[18px] font-medium tracking-tight text-white"
        >
          {profile.name.split(" ")[0]}
        </a>

        <ul className="hidden items-center gap-12 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[18px] font-medium tracking-tight text-white transition-opacity duration-300 hover:opacity-70"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="mt-8 flex flex-col gap-6 border-t border-white/20 pt-8 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[18px] font-medium tracking-tight text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
