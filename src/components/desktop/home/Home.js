import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar/Navbar'
import Footer from '../../desktop&mobile/footer/Footer'
import styles from './styles.module.css'
import Matrix from '../../desktop&mobile/matrix/Matrix'

export default function Home() {
  return (
    <div className="desktop-page">
      <Navbar></Navbar>
      <div className={styles.home}>
        <div className={styles.poster}>
          <div className={styles.posterContent}>
            <div className={styles.motto}>Start a <span className={styles.mottoHighlight}>React</span>ion.</div>
            <Link className={styles.category} to="/products?category=Hook">Try our Hooks!</Link>
            <Link className={styles.category} to="/products?category=Redux">Check out Redux!</Link>
            <Link className={styles.category} to="/products?category=Prop">Get new Props!</Link>
          </div>
          <Matrix speed={12} lettersColor="green" letterSize={5}></Matrix>
          <div className={styles.banner}></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
