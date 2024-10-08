import AboutMe from "./_components/AboutMe/AboutMe";
import Hero from "./_components/Hero/Hero";
import ProjectsSection from "./_components/ProjectsSection/ProjectsSection";
import Skills from "./_components/Skills/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectsSection />
    </>
  );
}
