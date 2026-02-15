import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ContactTerminal } from "@/components/ContactTerminal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsMatrix />
        <ProjectsGrid />
        <ContactTerminal />
      </main>
      <Footer />
    </div>
  );
}
