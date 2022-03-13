import { React, useState, useEffect } from 'react'
import styles from "./styles.module.css";

export default function HamburgerMenu(props) {
    const [hamburgerLineStyle, setHamburgerLineStyle] = useState(styles.hamburgerLine);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
      if(animation === true){
          setHamburgerLineStyle(styles.hamburgerLine + " " + styles.hamburgerLineAnimationIn);
      }
      if(animation === false){
          setHamburgerLineStyle(styles.hamburgerLine + " " + styles.hamburgerLineAnimationOut);
      }
    
    }, [animation])
    
  

  return (
      <div className={styles.hamburgerWrapper} onClick={()=>{
          (async () =>{
              await setAnimation(!animation);
              props.getAnimationState(animation);
          })();    
      }}>
        <div className={hamburgerLineStyle}></div>
        <div className={hamburgerLineStyle}></div>
        <div className={hamburgerLineStyle}></div>
      </div>
  )
}