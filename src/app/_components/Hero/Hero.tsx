import React from "react";
import styles from "./hero.module.scss";
import ScrollArrow from "../ScrollArrow/ScrollArrow";

type Props = {};

function Hero({}: Props) {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroInfo}>
        <p className={styles.intro}>Hi, my name is</p>
        <h1 className={styles.name}>Ahmed Gharib</h1>
        <p className={styles.description}>
          I’m a <strong>Full-Stack Web Developer</strong> specializing in{" "}
          <strong>Next.js, TypeScript, SCSS</strong>, and{" "}
          <strong>SQL/NoSQL databases</strong>. Currently a{" "}
          <strong>4th-year Computer Engineering student</strong> at{" "}
          <span className={styles.highlight}>NNU</span> with a{" "}
          <strong>3.97 GPA</strong>, I combine strong software engineering
          fundamentals with hands-on experience building scalable applications.
        </p>
        <p className={styles.description}>
          Beyond web development, I’m an{" "}
          <strong>aspiring AI/ML engineer</strong> passionate about creating{" "}
          intelligent systems that bridge data, algorithms, and user-centric
          design. My work spans from <strong>full-stack projects</strong> to{" "}
          <strong>LLM fine-tuning</strong> and{" "}
          <strong>AI-powered applications</strong>, reflecting my drive to
          innovate at the intersection of software and machine learning.
        </p>
        <ScrollArrow id="about" />
      </div>
    </section>
  );
}

export default Hero;
