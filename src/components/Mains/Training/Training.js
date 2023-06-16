import React from 'react';
import Styles from "./Training.module.css";
import Gallery from '../../Items/Gallery/Gallery';
import trainingProjects from "../../../Data/trainingProjects.json";
import personalProjects from '../../../Data/personalProjects.json';
import professionalProjects from '../../../Data/professionalProjects.json';



export default function Training() {
  return (
    <main className={Styles.trainingMain}>
      <section className={Styles.trainingSection}>
        <h2 className={Styles.titleSection}>Projets Formation</h2>
        <Gallery items={trainingProjects}/>
      </section>
      <section className={Styles.trainingSection}>
        <h2 className={Styles.titleSection}>Projets personnels</h2>
        <Gallery items={personalProjects}/>
      </section>
      <section className={Styles.trainingSection}>
        <h2 className={Styles.titleSection}>Projets Professionnels</h2>
        <Gallery items={professionalProjects}/>
      </section>
    </main>
  )
}
