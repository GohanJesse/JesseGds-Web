import React from "react";
import Styles from "./DescriptionMe.module.css";

export default function DescriptionMe({ description }) {
  return (
    <div className={Styles.descriptionMe}>
      {description.map((description, index) => (
        <p key={index}>{description}</p>
      ))}
    </div>
  );
}
