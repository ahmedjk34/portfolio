"use client";
import React from "react";
import styles from "./techStack.module.scss";
import techStack from "./techStackData";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import ScrollAnimation from "react-animate-on-scroll";

type Props = {};

function Skills({}: Props) {
  return (
    <ScrollAnimation animateIn="fadeIn" duration={1.5} animateOnce={true}>
      <div className={styles.skillsSection} id="tech-stack">
        <h1>Tech Stack</h1>
        <div className={styles.techSlider}>
          <div className={styles.techSlide}>
            {techStack.map((tech, index) => (
              <div className={styles.tech} key={index}>
                <img
                  src={tech.image}
                  alt={tech.title}
                  className={styles.techIcon}
                />
                <h3>{tech.title}</h3>
              </div>
            ))}
            {techStack.map((tech, index) => (
              <div className={styles.tech} key={index}>
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
        <ScrollArrow id="projects" />
      </div>
    </ScrollAnimation>
  );
}

export default Skills;
