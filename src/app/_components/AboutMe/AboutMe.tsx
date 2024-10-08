import React from "react";
import styles from "./about-me.module.scss";
// import aboutMeImage from "@/../../public/about-me-image.png";
type Props = {};

function AboutMe({}: Props) {
  return (
    <div id="about" className={styles.aboutMe}>
      <h1>About Me</h1>
      <div className={styles.aboutMeInfoSection}>
        <p>
          I’m a <span>dedicated full stack web developer</span> specializing in{" "}
          <span>Next.js</span> with
          <span> TypeScript</span>, <span>SCSS</span>, and <span>MongoDB</span>.
          I have experience working with <span>Node.js </span>
          and <span>Express.js</span> for backend development. Currently a{" "}
          <span>third-year computer engineering student </span>
          with a GPA of <span>3.97</span>, I’ve balanced academic rigor with a
          passion for building modern web applications. My journey began with{" "}
          <span>HTML and CSS</span> in high school, and since then, I’ve
          developed versatile skills in both frontend and backend development.
          With a strong foundation in <span>algorithms</span>,{" "}
          <span>data structures</span>, and
          <span> software design principles</span>, I stay up to date with
          industry trends and am constantly learning to improve my craft. I’m
          actively seeking <span>job or internship opportunities</span> where I
          can contribute my skills and continue to grow professionally.
        </p>

        <img src={"/about-me-image.png"} alt="about-me-image"></img>
      </div>
    </div>
  );
}

export default AboutMe;
