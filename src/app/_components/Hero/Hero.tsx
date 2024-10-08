import React from "react";
import styles from "./hero.module.scss";
import Link from "next/link";
type Props = {};

function Hero({}: Props) {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.heroInfo}>
        <p>Hello, my name is</p>
        <h1>Ahmed Gharib</h1>
        <p>
          I am a full stack web developer specializing in Next.js, TypeScript,
          SCSS, and MongoDB, among other technologies. Currently, I am in my
          third year of studying computer engineering at NNU, with a 3.96 GPA.
        </p>
        <Link className={styles.arrow} href={"#about"}></Link>
      </div>
    </div>
  );
}

export default Hero;