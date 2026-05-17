import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Navbar } from "@/components/Navbar";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Manifesto />
      <Footer />
    </main>
  );
}
