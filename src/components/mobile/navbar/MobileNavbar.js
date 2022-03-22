import { React, useState } from 'react'
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Logo from "../../desktop&mobile/logo/Logo.js"
import NavElement from '../../desktop/navbar/nav-element/NavElement';
import HamburgerMenu from './hamburger/Hamburger.js';
import HamburgerContent from './hamburger/HamburgerContent.js'
import shoppingCartIcon from '../../../assets/icons/shopping-cart.png'

export default function MobileNavbar() {
    const [hamburgerContentStyle, setHamburgerContentStyle] = useState(styles.hamburgerContent);

    function getAnimationState(animationState){
        if(animationState === true){
            setHamburgerContentStyle(styles.hamburgerContent + " " + styles.hamburgerContentOut);
        }
        else{
            setHamburgerContentStyle(styles.hamburgerContent + " " + styles.hamburgerContentIn);
        }
    }

  return (
    <div className={styles.navbar}>
        <HamburgerMenu getAnimationState={getAnimationState}></HamburgerMenu>
        <Logo></Logo>
        <HamburgerContent hamburgerContentStyle={hamburgerContentStyle}></HamburgerContent>
        <Link to="/shopping-cart">
            <img src={shoppingCartIcon} width="32px" height="32px"></img>
        </Link>
    </div>
  )
}
