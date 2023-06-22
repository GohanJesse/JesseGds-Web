import React from "react";
import Styles from "./Background.module.css";

export default function Background({ background }) {
  return (
    <div className={Styles.background}>
      {background.map((background, index) => (
        <p key={index}>{background}</p>
      ))}
    </div>
  );
}
