import React from "react";
import Styles from "./About.module.css";
import personalData from "../../../Data/PersonalData.json";

import Identity from "../../Items/Identity/Identity";
import LinksBar from "../../Items/LinksBar/LinksBar";
import Contact from "../../Items/Contact/Contact";
import Hobbies from "../../Items/Hobbies/Hobbies";
import DescriptionMe from "../../Items/DescriptionMe/DescriptionMe";
import Background from "../../Items/Background/Background";
import Motive from "../../Items/Motive/Motive";

export default function About() {
  // console.log(personalData)
  return (
    <main className={Styles.aboutMain}>
      <section className={Styles.identityBloc}>
        <h2 className={Styles.sectionTitle}>Je suis...</h2>
        <Identity personalData={personalData} />
        <LinksBar personalData={personalData} />
        <h2 className={Styles.sectionTitle}>informations supplementaires</h2>
        <div className={Styles.supplementaries}>
          <Contact personalData={personalData} />
          <Hobbies hobbies={personalData.hobbies} />
        </div>
      </section>
      <section className={Styles.infoBloc}>
        <h2 className={Styles.sectionTitle}>Parcours</h2>
        <DescriptionMe description={personalData.description} />
        <Background background={personalData.background} />
        <Motive motivations={personalData.motivations} page="About"/>
      </section>
    </main>
  );
}
