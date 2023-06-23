import React from 'react';
import Styles from "./LinksBar.module.css";
import { useNavigate } from 'react-router-dom';


export default function LinksBar() {

  const navigate = useNavigate();


  return (
    <div className={Styles.contactContainer}>
        <a href='#'><img className={Styles.contactLogo} src={process.env.PUBLIC_URL + '/images/CV.png'} alt='Curriculum Vitae' /></a>
        <a href='tel:+33763205410'><img className={Styles.contactLogo} src={process.env.PUBLIC_URL + '/images/Phone.png'} alt='Phone' /></a>
        <a href='mailto:jessegodais@gmail.com'><img className={Styles.contactLogo} src={process.env.PUBLIC_URL + '/images/Mail.png'} alt='Mail' /></a>
        <img className={Styles.contactLogo} src={process.env.PUBLIC_URL + '/images/Profil.png'} alt='Profil' onClick={() => navigate(`/About`)}/>
        <a href='https://github.com/GohanJesse'><img className={Styles.contactLogo} src={process.env.PUBLIC_URL + '/images/GithubChat.png'} alt='Github' /></a>
        <a href='https://fr.linkedin.com/in/jessy-godais-72004b24a'><img className={Styles.contactLogo} src={process.env.PUBLIC_URL + '/images/Linkedin.png'} alt='Linkedin' /></a>
    </div>
  )
}
