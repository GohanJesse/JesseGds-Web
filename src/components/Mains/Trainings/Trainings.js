import React from 'react';
import Styles from "./Trainings.module.css";
import Gallery from '../../Items/Gallery/Gallery';
import trainingProjects from "../../../Data/trainingProjects.json";
import personalProjects from '../../../Data/personalProjects.json';
import professionalProjects from '../../../Data/professionalProjects.json';



export default function Trainings () {
  return (
    <main className={Styles.trainingsMain}>
      <section className={Styles.trainingsSection}>
        <h2 className={Styles.titleSection}>Projets Formation</h2>
        <Gallery items={trainingProjects} type="training"/>
      </section>
      <section className={Styles.trainingsSection}>
        <h2 className={Styles.titleSection}>Projets personnels</h2>
        <Gallery items={personalProjects} type="personal"/>
      </section>
      <section className={Styles.trainingsSection}>
        <h2 className={Styles.titleSection}>Projets Professionnels</h2>
        <Gallery items={professionalProjects} type="professional"/>
      </section>
    </main>
  )
}
