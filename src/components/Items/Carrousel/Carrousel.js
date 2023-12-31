import React, { useState } from "react";
import Styles from "./Carrousel.module.css";
import ArrowLeft from "./arrow_back.png";
import ArrowRight from "./arrow_forward.png";

export default function Carrousel({ images, page }) {
  const homeCarrousel =
    page === "home" ? Styles.homeCarrousel : Styles.carrousel;
  const [index, setIndex] = useState(0);

  const leftClick = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1); //retour à l'image précédente ou à la dernière image
  };

  const rightClick = () => {
    setIndex((index + 1) % images.length); //Avance à l'image suivante, calcul du reste avec modulo pour revenir à la première image
  };

  if (!Array.isArray(images) || images.length === 0) {
    return <div className={Styles.carrousel}>Aucune image disponible</div>;
  }

  return (
    <div
      className={`${Styles.carrousel} ${homeCarrousel}`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + images[index]})`,
      }}
    >
      <div className={Styles.arrowBall}>
        <img
          src={ArrowLeft}
          className={Styles.arrowLeft}
          onClick={leftClick}
          alt="Left arrow"
        />
      </div>
      <div className={Styles.arrowBall}>
        <img
          src={ArrowRight}
          className={Styles.arrowRight}
          onClick={rightClick}
          alt="Right arrow"
        />
      </div>
    </div>
  );
}
