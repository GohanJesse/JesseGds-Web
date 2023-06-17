import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Styles from "./Training.module.css";
import Carrousel from "../../Items/Carrousel/Carrousel";
import InfoTraining from "../../Items/InfoTraining/Info.training";
import trainingProjects from "../../../Data/trainingProjects.json";
import personalProjects from '../../../Data/personalProjects.json';
import professionalProjects from '../../../Data/professionalProjects.json';

export default function Training({ type }) {

  const { id } = useParams();
  const urlLocation = useLocation();
  const navigate = useNavigate();
  const [training, setTraining] = useState(urlLocation.state?.item);

  let projects;
  switch (type) {
    case "personal":
      projects = personalProjects;
      break;
    case "professional":
      projects = professionalProjects;
      break;
    default:
      projects = trainingProjects;
  }

  useEffect(() => {
    if (!training) {
      const foundTraining = trainingProjects.find(item => item.id === id);//recherche du logement en fonction de l'id
      if (foundTraining) {
        setTraining(foundTraining);//Vérifier si le logement existe et met à jour si ok
        // console.log(id);
      } else {
        navigate('/NotFound');//si le logement n'est pas trouver redirection sur 404
      }
    }
  }, [id, training, navigate]);//

  //Pour gérer l'erreur si non valide
  if (!training) {
    return null;
  }


  return (
    <main className={Styles.TrainingMain}>
      <div className={Styles.blocCarrousel}>
      <Carrousel 
      pictures={training.pictures}
      />
      </div>
      <div className={Styles.blocInfotraining}>
      <InfoTraining 
        training={training} 
        />
      </div>
      <div className={Styles.blocDropdownTraining}>
        <div className={Styles.dropLeft}>
        
        </div>
        <div className={Styles.dropRight}>
        
        </div>
      </div>
    </main>
  )
}
