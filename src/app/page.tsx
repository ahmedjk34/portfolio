import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <p>Hello, my name is</p>
        <h1>Ahmed Gharib</h1>
        <p>
          Full stack web developer specializing in NextJS with Typescript, SCSS
          for styling, MongoDB for databases, I'm currently at my third-year
          student in computer engineering at NNU with a 3.96 GPA.
        </p>
        <span></span>
      </div>
    </div>
  );
}
