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
    title: "Nocturne",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    href: "#",
  },
  {
    id: "02",
    title: "Obsidian",
    category: "Digital Experience",
    image:
      "https://images.unsplash.com/photo-1558591710-74e4930fe6e3?w=1200&q=80",
    href: "#",
  },
  {
    id: "03",
    title: "Velvet",
    category: "Editorial",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80",
    href: "#",
  },
  {
    id: "04",
    title: "Meridian",
    category: "Art Direction",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80",
    href: "#",
  },
];
