import React from 'react';
import Styles from "./Skill.module.css";
import { useNavigate } from "react-router-dom";

export default function Skill({ title, page, url }) {
  const navigate = useNavigate();
  

  const titleClass = page === 'home' ? Styles.homeSkillTitle : Styles.skillTitle;
  const link = page === 'skills' ? Styles.linkProject : Styles.linkNone;

  return (
    <div className={Styles.skillBloc}>
        <h2 className={`${Styles.skillTitle} ${titleClass}`}>{title}</h2>
        <div className={`${Styles.linkProject} ${link}`} onClick={() => navigate(`${url}`)}>
          <img src={process.env.PUBLIC_URL + "/images/Redirection.png"} alt="Voir le projet" className={`${Styles.linkimages} ${link}`} />
        </div>
    </div>
    
  )
}
