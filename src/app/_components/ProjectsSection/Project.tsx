import React from "react";
import { ProjectType } from "@/util/Types";
import styles from "./projects-section.module.scss";

type Props = {
  project: ProjectType;
};

function Project({ project }: Props) {
  return (
    <div className={styles.project}>
      {/* <h2>{project?.title}</h2>
      {project.techStack.map((tech) => (
        <img src={tech.image} alt={tech.name} className={styles.icon} />
      ))}
      <img src={project.projectImage} />
      <p>{project.shortDescription}</p> */}
    </div>
  );
}

export default Project;
