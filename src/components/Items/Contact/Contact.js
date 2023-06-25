import React from 'react';
import Styles from "./Contact.module.css";

export default function Contact({ personalData }) {
  return (
    <div className={Styles.contact}>
        <p>{personalData.tel}</p>
        <p>{personalData.mail}</p>
        <p>{personalData.adress}</p>
        <p>{personalData.postal}{personalData.country}</p>
    </div>
  )
}
