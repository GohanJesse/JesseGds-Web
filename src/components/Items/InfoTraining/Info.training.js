import React from "react";
import Styles from "./InfoTraining.module.css";
import Tag from "../Tag/Tag";

export default function InfoTraining({ training }) {
  const { title, tags, urlGithub } = training;

  return (
    <div className={Styles.infoTraining}>
      <div className={Styles.nameTrainingBloc}>
        <h2 className={Styles.nameTraining}>{title}</h2>
        <a href={urlGithub}>
          <img className={Styles.iconGithub} src={process.env.PUBLIC_URL + '/images/GithubChat.png'} alt="icon Github"/>
        </a>
      </div>
      <div className={Styles.containerTag}>
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    </div>
  );
}
