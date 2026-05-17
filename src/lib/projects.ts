export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "NöroDakika",
    category: "Flutter · Dart · Firebase · Riverpod",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
    href: "https://github.com/muhammedsali/Norodakika",
  },
  {
    id: "02",
    title: "Mobile Agent Control V2",
    category: "Android · Firebase · Java",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
    href: "https://github.com/muhammedsali/MobileAgentControl-V2",
  },
  {
    id: "03",
    title: "Restoran Sipariş Takip",
    category: "C# · Windows Forms · MsSQL",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    href: "https://github.com/muhammedsali/RestoranTakip",
  },
  {
    id: "04",
    title: "Personel Takip",
    category: "C# · Windows Forms · Microsoft Access",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    href: "https://github.com/muhammedsali/automation",
  },
  {
    id: "05",
    title: "MemoryCard",
    category: "Android · Java · Android Studio",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046033?w=1200&q=80",
    href: "https://github.com/muhammedsali/MemoryCard",
  },
  {
    id: "06",
    title: "Kişisel Not Defteri",
    category: "Java · JavaFX",
    image:
      "https://images.unsplash.com/photo-1456324505964-12c8d2a7bc94?w=1200&q=80",
    href: "https://github.com/muhammedsali/NotDefteri",
  },
];
