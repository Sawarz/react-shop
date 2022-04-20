import React from 'react'
import styles from './styles.module.css'
import data from '../../../assets/appTypes/appTypes.json'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar/Navbar'
import Footer from '../../desktop&mobile/footer/Footer'
import Matrix from '../../desktop&mobile/matrix/Matrix'

export default function Home() {
  let appTypes = data.appTypes;
  let imgs = [];

  for (let i = 0; i < appTypes.length; i++){
    imgs[i] = require(`../../../assets/appTypes/${appTypes[i].src}`);
  }
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
          <Matrix speed={12} lettersColor="green" letterSize={5} size={500}></Matrix>
        </div>
        <hr className={styles.hrStyle}></hr>
        <div className={styles.popularNow}>
          <div className={styles.popularTitle}>POPULAR NOW</div>
          <div className={styles.categoriesContainer}>
            <Link className={styles.popularCategory} to="/products?category=Hook">Hooks</Link>
            <Link className={styles.popularCategory} to="/products?category=JSX">JSX</Link>
            <Link className={styles.popularCategory} to="/products?category=Router">Router</Link>
            <Link className={styles.popularCategory} to="/products?category=Formik">Formik</Link>
          </div>
        </div>
        <div className={styles.appTypeTitle}>What project are you building?</div>
        <div className={styles.appTypeContainer}>
          {appTypes.map((appType, i) => {
            return (
              <div className={styles.appType}>
                <h1 className={styles.appTypeHeader}>{appType.title}</h1>
                <Link className={styles.appTypeLink} to="/products?category=ToDoList">
                  <img className={styles.appTypeImg} src={imgs[i]}></img>
                </Link>
              </div>
              )         
        })
        }
          </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
