import Link from "next/link";
import React from "react";
import styles from "./scroll-arrow.module.scss";

type Props = {
  id: string;
};

function ScrollArrow({ id }: Props) {
  return (
    <div>
      <Link className={styles.arrow} href={`#${id}`}></Link>
    </div>
  );
}

export default ScrollArrow;
