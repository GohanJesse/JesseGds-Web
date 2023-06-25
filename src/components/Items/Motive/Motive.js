import React from "react";
import Styles from "./Motive.module.css";

export default function Motive({ motivations, page }) {

  return (
    <div className={Styles.motiveBloc}>
      {motivations.map((motivations, index) => (
        <p key={index}>{motivations}</p>
      ))}
    </div>
  );
}
