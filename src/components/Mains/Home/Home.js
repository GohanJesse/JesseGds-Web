import React from "react";
import Styles from "./Home.module.css";

import personalProjects from "../../../Data/personalProjects.json";
import professionalProjects from "../../../Data/professionalProjects.json";
import trainingProjects from "../../../Data/trainingProjects.json";
import skillsData from "../../../Data/skillsData.json";
import personalData from "../../../Data/PersonalData.json";

import Carrousel from "../../Items/Carrousel/Carrousel";
import Skill from "../../Items/Skill/Skill";
import SoftSkills from "../../Items/SoftSkills/SoftSkills";
import HardSkills from "../../Items/HardSkills/HardSkills";
import LinksBar from "../../Items/LinksBar/LinksBar";
import Identity from "../../Items/Identity/Identity";
import Motive from "../../Items/Motive/Motive";

export default function Home() {
  const allProjects = [
    ...trainingProjects,
    ...personalProjects,
    ...professionalProjects,
  ];

  allProjects.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const latestProjects = allProjects.slice(0, 3);

  return (
    <main className={Styles.homeMain}>
      <div className={Styles.skillTrainingBloc}>
        <section className={Styles.skillSection}>
          <h2 className={Styles.sectionTitle}>Mes competences</h2>
          <div className={Styles.skills}>
            {skillsData.map((skill, index) => (
              <Skill key={index} title={skill.title} page="home" />
            ))}
          </div>
        </section>
        <section className={Styles.trainingSection}>
          <h2 className={Styles.sectionTitle}>Mes 3 derniers projets</h2>
          <div className={Styles.carrousel}>
            <Carrousel
              images={latestProjects.map((project) => project.cover)}
              page="home"
            />
          </div>
        </section>
      </div>
      <div className={Styles.aboutBloc}>
        <section className={Styles.aboutSection}>
          <h2 className={Styles.sectionTitle}>Je suis ...</h2>
          <Identity personalData={personalData}/>
          <LinksBar personalData={personalData}/>
          <Motive motivations={personalData.motivations}/>
          <div className={Styles.hardSoft}>
            <SoftSkills page="home" />
            <HardSkills page="home" />
          </div>
        </section>
      </div>
    </main>
  );
}
