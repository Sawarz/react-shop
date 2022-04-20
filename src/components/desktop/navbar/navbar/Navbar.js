import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import Logo from '../../../desktop&mobile/logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [productsClassnames, setProductsClassnames] = useState(styles.navbarLink)
  const [aboutUsClassnames, setAboutUsClassnames] = useState(styles.navbarLink)
  const [contactClassnames, setContactClassnames] = useState(styles.navbarLink)
  let location = useLocation();

  const productsRef = useRef(null);
  const aboutusRef = useRef(null);
  const contactRef = useRef(null);

  function getLastSegment(url) {
    return url.substring(url.lastIndexOf("#") + 1);
  }

  useEffect(() => {
    switch (location.pathname) {
      case getLastSegment(productsRef.current.href):
        setProductsClassnames(`${styles.navbarLink} ${styles.currentLocation}`)
        setAboutUsClassnames(`${styles.navbarLink}`)
        setContactClassnames(`${styles.navbarLink}`)
        break;
      case getLastSegment(aboutusRef.current.href):
        setAboutUsClassnames(`${styles.navbarLink} ${styles.currentLocation}`)
        setProductsClassnames(`${styles.navbarLink}`)
        setContactClassnames(`${styles.navbarLink}`)
        break;
      case getLastSegment(contactRef.current.href):
        setContactClassnames(`${styles.navbarLink} ${styles.currentLocation}`)
        setAboutUsClassnames(`${styles.navbarLink}`)
        setProductsClassnames(`${styles.navbarLink}`)
        break;
    }
    
  }, [location])

  return (
    <div className={styles.navbar}>
      <Logo/>
      <Link ref={productsRef} className={productsClassnames} to='/products'>Products</Link>
      <Link ref={aboutusRef} className={aboutUsClassnames} to='/about-us'>About us</Link>
      <Link ref={contactRef} className={contactClassnames} to='/contact'>Contact</Link>
      <Link to="/shopping-cart" className={styles.navbarLink}>
        <FontAwesomeIcon icon={faShoppingCart} size="lg"></FontAwesomeIcon>
      </Link>
    </div> 
  )
}
