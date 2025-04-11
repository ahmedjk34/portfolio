"use client";
import React from "react";
import { ProjectType } from "@/util/Types";
import styles from "./projects-section.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
type Props = {
  project: ProjectType;
};

function Project({ project }: Props) {
  return (
    <ScrollAnimation animateIn="fadeIn" duration={1.5} animateOnce={true}>
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
            <div className={styles.actionsHolder}>
              {project.projectGitHubURL && (
                <a href={project.projectGitHubURL} target="_blank">
                  View Github Repository{" "}
                  <img
                    src="./github-color.svg"
                    className={styles.icon}
                    alt="link to github"
                  ></img>
                </a>
              )}
              {project.projectSiteURL && (
                <a href={project.projectSiteURL} target="_blank">
                  View The Site{" "}
                  <img
                    src="./link-color.svg"
                    className={styles.icon}
                    alt="link to site"
                  ></img>
                </a>
              )}
            </div>
          </div>
          <img src={project.projectImage} className={styles.projectImage} />
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Project;
