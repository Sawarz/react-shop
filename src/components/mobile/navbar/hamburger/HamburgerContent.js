import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css"

export default function HamburgerContent(props) {
  return (
    <div className={props.hamburgerContentStyle}>
        <div className={styles.hamburgerElement}>Home</div>
        <div className={styles.hamburgerElement}>Products</div>
        <div className={styles.hamburgerElement}>About us</div>
        <div className={styles.hamburgerElement}>Contact</div>
    </div>
  )
}
