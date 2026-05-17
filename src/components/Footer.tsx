import { profile } from "@/lib/profile";

const socialLinks = [
  { label: "GitHub", href: profile.contact.github },
  { label: "LinkedIn", href: profile.contact.linkedin },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#fafafa] px-6 py-20 text-black">
      <a
        href={`mailto:${profile.contact.email}`}
        className="block border-b border-black pb-8 text-[12vw] font-black uppercase leading-none tracking-[-0.03em] transition-opacity duration-300 hover:opacity-70"
      >
        İLETİŞİME GEÇ
      </a>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <ul className="flex flex-col gap-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wavy-underline text-lg font-medium tracking-tight"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.contact.phoneHref}
                className="wavy-underline text-lg font-medium tracking-tight text-[#888888]"
              >
                {profile.contact.phone}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-start">
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-2xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-70 md:text-3xl"
          >
            {profile.contact.email}
          </a>
        </div>

        <div className="flex items-end justify-start md:justify-end">
          <p className="text-sm text-[#888888]">
            © {new Date().getFullYear()} {profile.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
