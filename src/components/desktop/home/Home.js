import React from 'react'
import Navbar from '../navbar/navbar/Navbar'
import Footer from '../../desktop&mobile/footer/Footer'
import styles from './styles.module.css'

export default function Home() {
  return (
    <div className="desktop-page">
      <Navbar></Navbar>
      <div className={styles.home}>
        <div className={styles.poster}>
          <div className={styles.posterContent}>
          <div className={styles.motto}>Start a <span className={styles.mottoHighlight}>React</span>ion.</div>
          </div>
          
          <div className={styles.banner}></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
