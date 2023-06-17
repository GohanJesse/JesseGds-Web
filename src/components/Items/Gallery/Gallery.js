import React from 'react';
import Styles from "./Gallery.module.css";
import Card from "../Card/Card";

export default function Gallery({ items, type }) {


  return (
    <div className={Styles.gallery}>
      {items.map((item) => (
        <Card key={item.id} item={item} type={type} />
      ))}
    </div>
  )
}
