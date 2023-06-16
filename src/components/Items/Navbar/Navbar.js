import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Logo from "./logoSite200px.png";

export default function Navbar() {
  return (
    <nav className={Styles.navBar}>
      <NavLink
        to="/Skills"
        className={({ isActive }) => (isActive ? Styles.activeLink : "")} //isActive fourni avec navLink de react router facilite le changement de style du lien actif
      >
        Competences
        
      </NavLink>

      <NavLink
        to="/Training"
        className={({ isActive }) => (isActive ? Styles.activeLink : "")} //isActive fourni avec navLink de react router facilite le changement de style du lien actif
      >
        Folio
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? Styles.activeLink : "")} //isActive fourni avec navLink de react router facilite le changement de style du lien actif
      >
      <img className={Styles.logoHeader} src={Logo} alt="logo Jesse Gds Web" />
      </NavLink>


      <NavLink
        to="/SelfTraining"
        className={({ isActive }) => (isActive ? Styles.activeLink : "")} //isActive fourni avec navLink de react router facilite le changement de style du lien actif
      >
        Autodidacte
      </NavLink>

      <NavLink
        to="/About"
        className={({ isActive }) => (isActive ? Styles.activeLink : "")} //isActive fourni avec navLink de react router facilite le changement de style du lien actif
      >
        Sur moi
      </NavLink>
    </nav>
  );
}
