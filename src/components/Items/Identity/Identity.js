import React from "react";
import Styles from "./Identity.module.css";

export default function Identity() {
  return (
    <div className={Styles.identity}>
      <img src="/images/Photo-JessyGodais.png" alt="Jessy Godais" />
      <div className={Styles.nameBloc}>
        <h3 className={Styles.name}>Jessy Godais</h3>
        <h3 className={Styles.job}>
          Developper web <br />& web mobile
        </h3>
      </div>
    </div>
  );
}
