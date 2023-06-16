import React from "react";
import Styles from "./Header.module.css";
import Navbar from "../Items/Navbar/Navbar";

export default function Header() {
  return (
    <header className={Styles.header}>
      <Navbar />
    </header>
  );
}

