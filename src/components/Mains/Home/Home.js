import React from 'react';
import Styles from "./Home.module.css";
import Carrousel from "../../Items/Carrousel/Carrousel";
import personalProjects from "../../../Data/personalProjects.json";
import professionalProjects from "../../../Data/professionalProjects.json";
import trainingProjects from "../../../Data/trainingProjects.json";

export default function Home() {

  const allProjects = [...trainingProjects, ...personalProjects, ...professionalProjects];

  allProjects.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const latestProjects = allProjects.slice(0, 3);




  return (
    <main className={Styles.homeMain}>
      <div>
        <section>
          <h2>Mes derniers projets</h2>
          <Carrousel images={latestProjects.map(project => project.cover)}/>
        </section>
        <section>
          <h2>Mes compétences</h2>
        </section>
      </div>
      <div>
        <section>

        </section>
      </div>
    </main>
  )
}
