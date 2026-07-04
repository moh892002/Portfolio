import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <NavBar />
      <Hero />
      <WorkSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <div className="max-w-6xl mx-auto">
        <Footer />
      </div>
    </div>
  );
}
