import React from "react";
import Styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <p className={Styles.copyright}>© 2023 Jesse Gds Web. All rights reserved</p>
    </footer>
  );
}