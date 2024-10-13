import AboutMe from "./_components/AboutMe/AboutMe";
import ContactMe from "./_components/ContactMe/ContactMe";
import Hero from "./_components/Hero/Hero";
import ProjectsSection from "./_components/ProjectsSection/ProjectsSection";
import Skills from "./_components/Skills/TechStack";
import "animate.css/animate.compat.css";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectsSection />
      <ContactMe />
    </>
  );
}
