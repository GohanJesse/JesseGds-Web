import React from 'react';
import Styles from "./HardSkills.module.css";

export default function HardSkills({ page }) {

  // const homeHardskill = page === 'home' ? Styles.homeHardskills : Styles.sofSkill;

  return (
    <div className={Styles.hardSkillsBloc}>
        <img className={Styles.logoHeight} src={process.env.PUBLIC_URL + '/images/Langage.png'} alt='HTML CSS Javascript'/>
        <img className={Styles.logoHeight} src={process.env.PUBLIC_URL + '/images/React.png'} alt='React'/>
        <img className={Styles.logoHeight} src={process.env.PUBLIC_URL + '/images/Node.png'} alt='Node.js'/>
        <img className={Styles.logoWidth} src={process.env.PUBLIC_URL + '/images/Express.png'} alt='Express JS'/>
        <img className={Styles.logoHeight} src={process.env.PUBLIC_URL + '/images/MongoDB.png'} alt='MongoDB'/>
        <img className={Styles.logoHeight} src={process.env.PUBLIC_URL + '/images/Mongoose.png'} alt='Mongoose'/>
        <img className={Styles.logoHeight} src={process.env.PUBLIC_URL + '/images/Postman.png'} alt='Postman'/>
        <img className={Styles.logoWidth} src={process.env.PUBLIC_URL + '/images/Trello.png'} alt='Trello'/>
    </div>
  )
}
