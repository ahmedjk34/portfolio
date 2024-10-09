import React from "react";
import { ProjectType } from "@/util/Types";
import styles from "./projects-section.module.scss";

type Props = {
  project: ProjectType;
};

function Project({ project }: Props) {
  return (
    <div className={styles.project}>
      <div className={styles.windowHeader}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectInfo}>
          <h2>{project?.title}</h2>
          <div className={styles.iconsHolder}>
            {project.techStack.map((tech) => (
              <img src={tech.image} alt={tech.name} className={styles.icon} />
            ))}
          </div>
          <p>{project.shortDescription}</p>
        </div>
        <img src={project.projectImage} className={styles.projectImage} />
      </div>
    </div>
  );
}

export default Project;
