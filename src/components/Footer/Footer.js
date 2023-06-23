import React from "react";
import Styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <p className={Styles.copyright}>© Jesse Gds Web - 2023</p>
    </footer>
  );
}