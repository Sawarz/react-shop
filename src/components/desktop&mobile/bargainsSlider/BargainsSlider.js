import React from 'react'
import styles from './styles.module.css';
import data from '../../../assets/bargains/bargains.json'

export default function BargainsSlider() {
  const bargains = data.bargains;
  let imgs = [];
  for (let i = 0; i < data.bargains.length; i++){
    console.log(bargains[i].src)
    imgs[i] = require(`../../../assets/bargains/${bargains[i].src}`);
  }
  return (
    <div className={styles.bargainsSlider}>{imgs.map((img) => {
      return (
        <img src={img} width="250px" ></img>
      )
    })}</div>
  )
}
