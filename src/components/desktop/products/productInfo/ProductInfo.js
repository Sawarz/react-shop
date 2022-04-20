import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

export default function ProductInfo(props) {
    let imgSrc = require(`../../../../assets/products/${props.product.src}`);
  
  return (
      <Link className={styles.product} to={`/products/${props.product.name}`}>
          <div className={styles.imgWrapper}>
            <img src={imgSrc} alt={props.product.name}></img>
          </div>
          <div className={styles.price}>{props.product.price}</div>
    </Link>
  )
}
