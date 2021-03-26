import React from "react";
import styles from "./Layout.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.header}>
        <StaticImage
          width={30}
          height={30}
          src="../images/icon.png"
          alt="logo"
        />
      </div>
      <div className={styles.placeholder} />
      {children}
      <div className={styles.footer}></div>
    </>
  );
}
