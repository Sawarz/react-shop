import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

export default function Product(props) {
    let id = props.product.id;
    let imgSrc = require(`../../../../assets/products/${props.product.src}`);
    console.log(props.product);
    function goToProductPage() {
        console.log("object");
    }
  return (
      <Link className={styles.product} to={`/products/${props.product.name}`}>
          <div>Product</div>
          <div className={styles.imgWrapper}>
            <img src={imgSrc}></img>
          </div>
          <div>{props.product.price}</div>
    </Link>
  )
}
