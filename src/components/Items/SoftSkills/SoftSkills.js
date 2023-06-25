import React from 'react';
import Styles from "./SoftSkills.module.css";

export default function SoftSkills({ page }) {

  const homeSoftSkillBloc = page === 'home' ? Styles.homeSoftskillsBloc : Styles.sofSkillBloc;
  const homeSoftSkill = page === 'home' ? Styles.homeSoftskills : Styles.sofSkill;


  return (
    <div className={`${Styles.softSkillBloc} ${homeSoftSkillBloc}`}>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>Autonomie</div>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>curiosité</div>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>Organisation</div>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>Rigueur</div>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>Motivation</div>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>Communication</div>
    </div>
  )
}
