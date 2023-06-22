import React from 'react';
import Styles from "./ContactDetails.module.css";
import { useNavigate } from 'react-router-dom';

export default function ContactDetails() {
  const navigate = useNavigate();


  return (
    <div className={Styles.contactContainer}>
        <a href='#'><img className={Styles.contactLogo} src='/images/CV.png' alt='Curriculum Vitae' /></a>
        <a href='tel:+33763205410'><img className={Styles.contactLogo} src='/images/Phone.png' alt='Phone' /></a>
        <a href='mailto:jessegodais@gmail.com'><img className={Styles.contactLogo} src='/images/Mail.png' alt='Mail' /></a>
        <img className={Styles.contactLogo} src='/images/Profil.png' alt='Profil' onClick={() => navigate(`/About`)}/>
        <a href='https://github.com/GohanJesse'><img className={Styles.contactLogo} src='/images/GithubChat.png' alt='Github' /></a>
        <a href='https://fr.linkedin.com/in/jessy-godais-72004b24a'><img className={Styles.contactLogo} src='/images/Linkedin.png' alt='Linkedin' /></a>
    </div>
  )
}