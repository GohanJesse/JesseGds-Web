import React from 'react';
import Styles from "./Skill.module.css";

export default function Skill({ title, page }) {

  const titleClass = page === 'home' ? Styles.homeTitle : Styles.skillsTitle;

  return (
    <div className={Styles.skillBloc}>
        <h2 className={`${Styles.skillTitle} ${titleClass}`}>{title}</h2>
    </div>
  )
}
