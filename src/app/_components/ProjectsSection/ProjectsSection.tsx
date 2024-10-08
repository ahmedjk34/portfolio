import React from "react";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import styles from "./projects-section.module.scss";
type Props = {};

function ProjectsSection({}: Props) {
  return (
    <div className={styles.projectsSection}>
      ProjectsSection
      <ScrollArrow id="contact-me" />
    </div>
  );
}

export default ProjectsSection;
