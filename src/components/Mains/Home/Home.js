import React from 'react';
import Styles from "./Home.module.css";
import Carrousel from "../../Items/Carrousel/Carrousel";
import Skill from "../../Items/Skill/Skill";
import personalProjects from "../../../Data/personalProjects.json";
import professionalProjects from "../../../Data/professionalProjects.json";
import trainingProjects from "../../../Data/trainingProjects.json";
import skillsData from "../../../Data/skillsData.json";
import SoftSkills from '../../Items/SoftSkills/SoftSkills';

export default function Home() {

  const allProjects = [...trainingProjects, ...personalProjects, ...professionalProjects];

  allProjects.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const latestProjects = allProjects.slice(0, 3);




  return (
    <main className={Styles.homeMain}>
      <div className={Styles.skillTrainingBloc}>
        <section className={Styles.skillSection}>
          <h2 className={Styles.sectionTitle}>Mes competences</h2>
          {skillsData.map((skill, index) => (
            <Skill key={index} title={skill.title} page="home"/>
          ))}
        </section >
        <section className={Styles.trainingSection}>
          <h2 className={Styles.sectionTitle}>Mes derniers projets</h2>
          <Carrousel images={latestProjects.map(project => project.cover)}/>
        </section>
      </div>
      <div className={Styles.aboutBloc}>
        <section className={Styles.aboutSection}>
          <h2 className={Styles.sectionTitle}>Je suis ...</h2>
          <SoftSkills />
        </section>
      </div>
    </main>
  )
}
