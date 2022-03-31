import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css"

export default function HamburgerContent(props) {
  async function handleClick() {
    props.getAnimationState(!props.animation)
  }
  
  return (
    <div className={props.hamburgerContentStyle}>
        <Link className={styles.hamburgerElement} to='/home' onClick={handleClick}>Home</Link>
        <Link className={styles.hamburgerElement} to='/products' onClick={handleClick}>Products</Link>
        <Link className={styles.hamburgerElement} to='/about-us' onClick={handleClick}>About us</Link>
        <Link className={styles.hamburgerElement} to='/contact' onClick={handleClick}>Contact</Link>
    </div>
  )
}
