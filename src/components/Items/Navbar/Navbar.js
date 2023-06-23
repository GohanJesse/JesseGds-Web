import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (<nav className={Styles.navBar}>
    <NavLink
      to="/Skills"
      className={({ isActive }) => (isActive ? Styles.activeLink : "")} //isActive fourni avec navLink de react router facilite le changement de style du lien actif
    >
      <img 
        className={Styles.linkIcon}
        src={process.env.PUBLIC_URL + "/images/Skills.png"}
        alt="icon compétences"
      />
      <span className={Styles.linkName}>Competences</span>
    </NavLink>

    <NavLink
      to="/Trainings"
      className={({ isActive }) => (isActive ? Styles.activeLink : "")}
    >
      <img 
        className={Styles.linkIcon}
        src={process.env.PUBLIC_URL + "/images/folio.png"}
        alt="icon compétences"
      />
      <span className={Styles.linkName}>Folio</span>
    </NavLink>

    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? Styles.activeLink : "")}
    >
      <img
        className={Styles.logoHeader}
        src={process.env.PUBLIC_URL + "/images/logoSite200px.png"}
        alt="logo Jesse Gds Web"
      />
    </NavLink>

    <NavLink
      to="/SelfTraining"
      className={({ isActive }) => (isActive ? Styles.activeLink : "")}
    >
      <img 
        className={Styles.linkIcon}
        src={process.env.PUBLIC_URL + "/images/AutoWork.png"}
        alt="icon Autodidacte"
      />
      <span className={Styles.linkName}>Autodidacte</span>
    </NavLink>

    <NavLink
      to="/About"
      className={({ isActive }) => (isActive ? Styles.activeLink : "")}
    >
      <img 
        className={Styles.linkIcon}
        src={process.env.PUBLIC_URL + "/images/Profil.png"}
        alt="icon profil"
      />
      <span className={Styles.linkName}>Sur moi</span>
    </NavLink>
  </nav>
  );
}
