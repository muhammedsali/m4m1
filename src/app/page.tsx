import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}
