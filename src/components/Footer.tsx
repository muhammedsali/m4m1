const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#fafafa] px-6 py-20 text-black">
      <a
        href="mailto:hello@studio.com"
        className="block border-b border-black pb-8 text-[12vw] font-black uppercase leading-none tracking-[-0.03em] transition-opacity duration-300 hover:opacity-70"
      >
        START A PROJECT
      </a>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <ul className="flex flex-col gap-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="wavy-underline text-lg font-medium tracking-tight"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-start">
          <a
            href="mailto:hello@studio.com"
            className="text-3xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-70"
          >
            hello@studio.com
          </a>
        </div>

        <div className="flex items-end justify-start md:justify-end">
          <p className="text-sm text-[#888888]">
            © {new Date().getFullYear()} Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
