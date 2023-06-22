import React from 'react';
import Styles from "./SoftSkills.module.css";

export default function SoftSkills({ page }) {

  const homeSoftSkillBloc = page === 'home' ? Styles.homeSoftskillsBloc : Styles.sofSkillBloc;
  const homeSoftSkill = page === 'home' ? Styles.homeSoftskills : Styles.sofSkill;


  return (
    <div className={`${Styles.softSkillBloc} ${homeSoftSkillBloc}`}>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>Autonome</div>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>curieux</div>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>Organisé</div>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>Consciencieux</div>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>Motivé</div>
      <div className={`${Styles.softSkill} ${homeSoftSkill}`}>Communication</div>
    </div>
  )
}
