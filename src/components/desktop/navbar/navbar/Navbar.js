import React from 'react'
import styles from './styles.module.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../desktop&mobile/logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

  return (
    <div className={styles.navbar}>
      <Logo/>
      <NavLink  className={({ isActive }) => 
        isActive ? `${styles.navbarLink} ${styles.currentLocation}` : styles.navbarLink
      } to='/products'>Products</NavLink>
      <NavLink  className={({ isActive }) => 
        isActive ? `${styles.navbarLink} ${styles.currentLocation}` : styles.navbarLink
      } to='/about-us'>About us</NavLink>
      <NavLink  className={({ isActive }) => 
        isActive ? `${styles.navbarLink} ${styles.currentLocation}` : styles.navbarLink
      } to='/contact'>Contact</NavLink>
      <Link to="/shopping-cart" className={styles.navbarLink}>
        <FontAwesomeIcon icon={faShoppingCart} size="lg"></FontAwesomeIcon>
      </Link>
    </div> 
  )
}
