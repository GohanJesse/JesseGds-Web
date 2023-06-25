import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Styles from "./Training.module.css";
import Carrousel from "../../Items/Carrousel/Carrousel";
import InfoTraining from "../../Items/InfoTraining/Info.training";
import trainingProjects from "../../../Data/trainingProjects.json";

export default function Training({ type }) {
  const { id } = useParams();
  const urlLocation = useLocation();
  const navigate = useNavigate();
  const [training, setTraining] = useState(urlLocation.state?.item);

  useEffect(() => {
    if (!training) {
      const foundTraining = trainingProjects.find((item) => item.id === id);
      if (foundTraining) {
        setTraining(foundTraining);
        // console.log(id);
      } else {
        navigate("/NotFound");
      }
    }
  }, [id, training, navigate]);

  //Pour gérer l'erreur si non valide
  if (!training) {
    return null;
  }

  return (
    <main className={Styles.TrainingMain}>
      <div className={Styles.blocCarrousel}>
        <Carrousel images={training.pictures.map((picture) => picture)} />
      </div>
      <div className={Styles.blocInfotraining}>
        <InfoTraining training={training} urlGithub={training.urlGithub} />
      </div>
      <div className={Styles.blocDescriptionTraining}>
        <div className={Styles.descriptionTraining}>
          <h3 className={Styles.subtitleProject}>Description du Projet</h3>
          <p>{training.description}</p>
        </div>
        <div className={Styles.difficultyTraining}>
          <h3 className={Styles.subtitleProject}>Difficultes du Projet</h3>
          <p>{training.difficulty}</p>
        </div>
      </div>
    </main>
  );
}
