"use client";
import React from "react";
import styles from "./about-me.module.scss";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import ScrollAnimation from "react-animate-on-scroll";

type Props = {};

function AboutMe({}: Props) {
  return (
    <ScrollAnimation animateIn="fadeIn" duration={1.5} animateOnce={true}>
      <section id="about" className={styles.aboutMe}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Me</h1>

          <div className={styles.content}>
            <div className={styles.textContent}>
              <div className={styles.paragraph}>
                <p>
                  I'm a{" "}
                  <span className={styles.highlight}>
                    dedicated full-stack web developer
                  </span>{" "}
                  specializing in <span className={styles.tech}>Next.js</span>,{" "}
                  <span className={styles.tech}>TypeScript</span>, and{" "}
                  <span className={styles.tech}>SCSS</span>, with strong
                  experience working with{" "}
                  <span className={styles.tech}>SQL/NoSQL databases</span>. On
                  the backend, I build scalable systems with{" "}
                  <span className={styles.tech}>Node.js</span> and{" "}
                  <span className={styles.tech}>Express.js</span>, ensuring
                  clean, performant, and maintainable solutions.
                </p>
              </div>

              <div className={styles.paragraph}>
                <p>
                  Currently a{" "}
                  <span className={styles.highlight}>
                    4th-year Computer Engineering student
                  </span>{" "}
                  at <span className={styles.university}>NNU</span> with a{" "}
                  <span className={styles.gpa}>3.97 GPA</span>, I've combined
                  academic excellence with hands-on project work — from{" "}
                  <span className={styles.tech}>web applications</span> and{" "}
                  <span className={styles.tech}>system design</span> to{" "}
                  <span className={styles.tech}>LLM fine-tuning</span> and{" "}
                  <span className={styles.tech}>AI-powered tools</span>. My
                  journey began with{" "}
                  <span className={styles.tech}>HTML & CSS</span> in high
                  school, and has grown into a passion for building solutions
                  that bridge{" "}
                  <span className={styles.highlight}>software engineering</span>{" "}
                  with{" "}
                  <span className={styles.highlight}>
                    artificial intelligence
                  </span>
                  .
                </p>
              </div>

              <div className={styles.paragraph}>
                <p>
                  With a strong foundation in{" "}
                  <span className={styles.tech}>algorithms</span>,{" "}
                  <span className={styles.tech}>data structures</span>, and{" "}
                  <span className={styles.tech}>
                    software design principles
                  </span>
                  , I'm constantly expanding my skills in{" "}
                  <span className={styles.highlight}>AI/ML</span>, driven by the
                  vision of creating{" "}
                  <span className={styles.highlight}>
                    intelligent, user-centric systems
                  </span>
                  . I'm actively seeking{" "}
                  <span className={styles.cta}>
                    internships or job opportunities
                  </span>{" "}
                  where I can contribute to innovative projects, grow as an
                  engineer, and make a lasting impact.
                </p>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img
                  src="./about-me-image.png"
                  alt="Ahmed Gharib - Full Stack Developer"
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>

          <ScrollArrow id="tech-stack" />
        </div>
      </section>
    </ScrollAnimation>
  );
}

export default AboutMe;
