import React from 'react'
import Styles from "./Tag.module.css"

export default function Tag({ tag }) {
  return (
    <div className={Styles.tagContainer}>{tag}</div>
  )
}
