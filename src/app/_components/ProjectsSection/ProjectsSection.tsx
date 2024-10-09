import React from "react";
import styles from "./projects-section.module.scss";
import projects from "./projectsData";
import Project from "./Project";
type Props = {};

function ProjectsSection({}: Props) {
  return (
    <div className={styles.projectsSection}>
      <h1>My Projects</h1>
      <div className={styles.projectsHolder}>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
