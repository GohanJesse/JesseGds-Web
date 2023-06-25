import React from "react";
import Styles from "./Hobbies.module.css";

export default function Hobbies({ hobbies }) {
  return (
    <div className={Styles.hobbies}>
      {hobbies.map((hobbies, index) => (
        <p key={index}>{hobbies}</p>
      ))}
    </div>
  );
}
