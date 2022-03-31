import { React, useState, useEffect } from 'react'
import styles from "./styles.module.css";

export default function HamburgerMenu(props) {
  const [hamburgerLineStyle, setHamburgerLineStyle] = useState(styles.hamburgerLine);

  useEffect(() => {
    console.log("zmiana w X " + props.animation);
    props.getAnimationState(props.animation);
    if (props.animation === true) {
      setHamburgerLineStyle(styles.hamburgerLine + " " + styles.hamburgerLineAnimationIn);
    }
    if (props.animation === false) {
      setHamburgerLineStyle(styles.hamburgerLine + " " + styles.hamburgerLineAnimationOut);
    }
    
  }, [props.animation])



  return (
    <div className={styles.hamburgerWrapper} onClick={() => { props.getAnimationState(!props.animation) }}>
        <div className={hamburgerLineStyle}></div>
        <div className={hamburgerLineStyle}></div>
        <div className={hamburgerLineStyle}></div>
      </div>
  )
}