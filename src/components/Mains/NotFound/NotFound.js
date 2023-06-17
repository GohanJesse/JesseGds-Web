import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./NotFound.module.css";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className={Styles.containerNotfound}>
      <h2 className={Styles.h2Notfound}>404</h2>
      <p className={Styles.pNotfound}>
        Vous êtes perdu ?
      </p>
      <span className={Styles.spanNotfound} onClick={() => navigate("/")}>
        Retourner sur la page d'acceuil
      </span>
    </section>
  );
}