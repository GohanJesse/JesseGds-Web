import React from "react";
import Styles from "./InfoTraining.module.css";
import Tag from "../Tag/Tag";

export default function InfoTraining({ training }) {

  const { title, tags } = training;

  return (
    <div className={Styles.infoTraining}>
      <h2 className={Styles.nameTraining}>{title}</h2>
      <div className={Styles.containerTag}>
        {tags.map((tag, index) => (
          <Tag  key={index} tag={tag}/>
        ))}
      </div>
    </div>
  );
}
