import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css"

export default function HamburgerContent(props) {
  return (
    <div className={props.hamburgerContentStyle}>
        <Link className={styles.hamburgerElement} to='/home'>Home</Link>
        <Link className={styles.hamburgerElement} to='/products'>Products</Link>
        <Link className={styles.hamburgerElement} to='/about-us'>About us</Link>
        <Link className={styles.hamburgerElement} to='/contact'>Contact</Link>
    </div>
  )
}
