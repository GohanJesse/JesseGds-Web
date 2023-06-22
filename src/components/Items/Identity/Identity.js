import React from "react";
import Styles from "./Identity.module.css";

export default function Identity({ personalData }) {
  return (
    <div className={Styles.identity}>
      <img src={personalData.pictures} alt="Jessy Godais" />
      <div className={Styles.nameBloc}>
        <h1 className={Styles.name}>{personalData.name} {personalData.surname}</h1>
        <h2 className={Styles.job}>{personalData.job}</h2>
      </div>
    </div>
  );
}
