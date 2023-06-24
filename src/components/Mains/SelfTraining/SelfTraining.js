import React from 'react';
import Styles from "./SelfTraining.module.css";

export default function SelfTraining() {
  return (
    <main className={Styles.selftrainingMain}>
      <section className={Styles.articleBloc}>
        <h2 className={Styles.sectionTitle}>Ce que je compte apprendre</h2>
        <div className={Styles.articleLayout}>
          <img src={process.env.PUBLIC_URL + '/images/Autodidacte-UIDesign.jpg'} alt="Représentation UI/UX design"/>
          <article className={Styles.article}>
            <h3 className={Styles.articleTitle}>Mon Voyage Vers un Design Plus Captivant</h3>
            <p className={Styles.articleContent}>Bonjour à tous! Je suis ravi de vous annoncer que je me lance dans une aventure passionnante pour peaufiner mes compétences en design. J'ai pris conscience que j'ai des lacunes en matière d'UI design et j'ai décidé de travailler dessus afin d'améliorer le style de mes créations.</p>
            <p className={Styles.articleContent}>De plus, je suis intrigué par l'UX design et je suis résolu à explorer ce domaine également. Mon objectif est de créer des expériences utilisateur fluides et esthétiquement agréables.</p>
            <p className={Styles.articleContent}>Pour jeter les bases de mon apprentissage, je compte suivre des cours sur OpenClassRooms et Udemy, qui proposent d'excellentes ressources. Je suis enthousiaste à l'idée d’acquérir de nouvelles compétences et d’apporter une dimension supplémentaire à mon travail.</p>
            <p className={Styles.articleContent}>À bientôt avec des créations renouvelées et améliorées!</p>
          </article>
        </div>
        <h2 className={Styles.sectionTitle}>Ce que je compte Faire</h2>
        <div className={Styles.articleLayout}>
          <img src={process.env.PUBLIC_URL + '/images/Photo-01-AppMeteo.png'} alt="Représentation UI/UX design"/>
          <article className={Styles.article}>
            <h3 className={Styles.articleTitle}>La Meteo et les Actus a la Rescousse</h3>
            <p className={Styles.articleContent}>Je m'apprête à revisiter un projet entamé en octobre 2022, qui consiste en un site dynamique affichant la météo et les dernières actualités via l'API Google Actu France.</p>
            <p className={Styles.articleContent}>Ayant été mon premier essai en JavaScript, le code initial est perfectible. Armé de nouvelles compétences acquises lors de ma formation, je vais réexaminer le code, corriger les erreurs, et intégrer des éléments de design UI/UX pour améliorer l’expérience utilisateur.</p>
            <p className={Styles.articleContent}>Je suis enthousiaste à l’idée de donner à ce projet la finition qu’il mérite, et de marquer ainsi une étape importante dans mon parcours de développeur web.</p>
            <p className={Styles.articleContent}>Je vais quand même essayer de faire un truc cool ! 😎</p>
          </article>
        </div>
      </section>
    </main>
  )
}
