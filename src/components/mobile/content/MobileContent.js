import React from 'react'
import styles from './styles.module.css'
import BargainsSlider from '../../desktop&mobile/bargainsSlider/BargainsSlider'
import Categories from '../categories/Categories'

export default function MobileContent() {
  return (
    <div className={styles.mobileContent}>
      <BargainsSlider></BargainsSlider>
      <Categories></Categories>
    </div>
  )
}
