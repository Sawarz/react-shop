import { React, useState } from 'react'
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Logo from "../../desktop&mobile/logo/Logo.js"
import HamburgerMenu from './hamburger/Hamburger.js';
import HamburgerContent from './hamburger/HamburgerContent.js'
import shoppingCartIcon from '../../../assets/icons/shopping-cart.png'

export default function MobileNavbar() {
    const [hamburgerContentStyle, setHamburgerContentStyle] = useState(styles.hamburgerContent);
    const [animation, setAnimation] = useState(false);
    
    function getAnimationState(animationState) {
        setAnimation(animationState);
        if(animationState === true){
            setHamburgerContentStyle(styles.hamburgerContent + " " + styles.hamburgerContentIn);
        }
        else{
            setHamburgerContentStyle(styles.hamburgerContent + " " + styles.hamburgerContentOut);
        }
    }

  return (
    <div className={styles.navbar}>
          <HamburgerMenu animation={animation} getAnimationState={getAnimationState}></HamburgerMenu>
        <Logo></Logo>
          <HamburgerContent animation={animation} hamburgerContentStyle={hamburgerContentStyle} getAnimationState={getAnimationState}></HamburgerContent>
        <Link to="/shopping-cart">
            <img src={shoppingCartIcon} width="32px" height="32px"></img>
        </Link>
    </div>
  )
}
