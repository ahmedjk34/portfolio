import React from "react";
import styles from "./techStack.module.scss";
import techStack from "./techStackData";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
type Props = {};

function Skills({}: Props) {
  return (
    <div className={styles.skillsSection} id="tech-stack">
      <h1>Tech Stack</h1>
      <div className={styles.techSlider}>
        <div className={styles.techSlide}>
          {techStack.map((tech) => (
            <div className={styles.tech}>
              <img
                src={tech.image}
                alt={tech.title}
                className={styles.techIcon}
              />
              <h3>{tech.title}</h3>
            </div>
          ))}
        </div>
        <div className={styles.techSlide}>
          {techStack.map((tech) => (
            <div className={styles.tech}>
              <img
                src={tech.image}
                alt={tech.title}
                className={styles.techIcon}
              />
              <h3>{tech.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
