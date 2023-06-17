import React, {useState} from 'react';
import Styles from "./Carrousel.module.css";
import ArrowLeft from "./arrow_back.png";
import ArrowRight from "./arrow_forward.png";

export default function Carrousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const leftClick = () => {
    setIndex(index === 0 ? pictures.length - 1: index - 1);//retour à l'image précédente ou à la dernière image
  };

  const rightClick = () => {
    setIndex((index + 1) % pictures.length);//Avance à l'image suivante, calcul du reste avec modulo pour revenir à la première image
  };

  return (
    <div className={Styles.carrousel} style={{ backgroundImage: `url(${pictures[index]})` }}>
      <img src={ArrowLeft} className={Styles.arrowLeft} onClick={leftClick} alt="Left arrow"/>
      <img src={ArrowRight} className={Styles.arrowRight} onClick={rightClick} alt="Right arrow"/>
      <p className={Styles.account}>{index + 1}/{pictures.length}</p>
    </div>
  )
}
