import React from "react";
import Styles from "./Motive.module.css";

export default function Motive({ motivations, page }) {

  const aboutStyleMotivations = page === 'about' ? Styles.aboutStyleMotivations : Styles.motiveBloc;

  return (
    <div className={`${Styles.motiveBloc} ${aboutStyleMotivations}`}>
      {motivations.map((motivations, index) => (
        <p key={index}>{motivations}</p>
      ))}
    </div>
  );
}
