import React from 'react';
import Styles from "./HardSkills.module.css";

export default function HardSkills({ page }) {

  // const homeHardskill = page === 'home' ? Styles.homeHardskills : Styles.sofSkill;

  return (
    <div className={Styles.hardSkillsBloc}>
        <img className={Styles.logoHeight} src='/images/Langage.png' alt='HTML CSS Javascript'/>
        <img className={Styles.logoHeight} src='/images/React.png' alt='React'/>
        <img className={Styles.logoHeight} src='/images/Node.png' alt='Node.js'/>
        <img className={Styles.logoWidth} src='/images/Express.png' alt='Express JS'/>
        <img className={Styles.logoHeight} src='/images/MongoDB.png' alt='MongoDB'/>
        <img className={Styles.logoHeight} src='/images/Mongoose.png' alt='Mongoose'/>
        <img className={Styles.logoHeight} src='/images/Postman.png' alt='Postman'/>
        <img className={Styles.logoWidth} src='/images/Trello.png' alt='Trello'/>
    </div>
  )
}
