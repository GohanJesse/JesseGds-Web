import React from 'react';
import Styles from "./SkillDescription.module.css";


export default function SkillDescription({ description }) {
  return (
    <div className={Styles.skillDescriptionBloc}>
      {description.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </div>
  )
}
