import React, { Suspense } from 'react'
import styles from './styles.module.css'
import data from '../../../assets/appTypes/appTypes.json'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar/Navbar'
import Footer from '../../desktop&mobile/footer/Footer'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../../assets/React'

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
            <Link className={styles.category} to="/products?category=Hooks">Try our Hooks!</Link>
            <Link className={styles.category} to="/products?category=Redux">Check out Redux!</Link>
            <Link className={styles.category} to="/products?category=Formik">Create a form with Formik!</Link>
          </div>
          <div className={styles.modelContainer}>
            <div className={styles.dragMessage}>Drag me!</div>
            <Canvas
            camera={{ position: [1, 0, 10], fov: 5 }}
            style={{
              backgroundColor: 'transparent',
              width: '400px',
              height: '400px',
              zIndex: '0',
              boxShadow: '0px 8px 15px 10px rgba(0, 0, 0, 0.1)'
            }}>
              <ambientLight intensity={1.25} />
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.4} />
              <Suspense fallback={null}>
                  <Model></Model>
              </Suspense>
              <OrbitControls />
            </Canvas>
          </div>
        </div>
        <hr className={styles.hrStyle}></hr>
        <div className={styles.popularNow}>
          <div className={styles.popularTitle}>POPULAR NOW</div>
          <div className={styles.categoriesContainer}>
            <Link className={styles.popularCategory} to="/products?category=Hooks">Hooks</Link>
            <Link className={styles.popularCategory} to="/products?category=Formik">Formik</Link>
            <Link className={styles.popularCategory} to="/products?category=React-Router">React-Router</Link>
            <Link className={styles.popularCategory} to="/products?category=Redux">Redux</Link>
          </div>
        </div>
        <div className={styles.appTypeTitle}>What project are you building?</div>
        <div className={styles.appTypeContainer}>
          {appTypes.map((appType, i) => {
            return (
              <div key={appType.id} className={styles.appType}>
                <h1 className={styles.appTypeHeader}>{appType.title}</h1>
                <Link className={styles.appTypeLink} to={`/products?appType=${appType.category}`}>
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
