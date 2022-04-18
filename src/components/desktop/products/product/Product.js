/* eslint-disable no-fallthrough */
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import styles from './styles.module.css'
import data from '../../../../assets/products/products.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as starEmpty} from '@fortawesome/free-regular-svg-icons'
import { faStar as starFilled } from '@fortawesome/free-solid-svg-icons'

export default function Product() {
    let product;
    
    let stars = [starEmpty, starEmpty, starEmpty, starEmpty, starEmpty];
    let productURL = useParams().product;
    data.products.forEach((currentProduct) => {
        if (currentProduct.name === productURL) {
            product = currentProduct;
        }
    })
    let imgSrc = require(`../../../../assets/products/${product.name}.png`);

    (function determineStars() {
        console.log(product.stars);
        // eslint-disable-next-line default-case
        switch (product.stars) {
            case 5:
                stars[4] = starFilled;
                console.log("5")
            case 4:
                console.log("es")
                stars[3] = starFilled;
            case 3:
                stars[2] = starFilled;
            case 2:
                stars[1] = starFilled;
            case 1:
                stars[0] = starFilled;
        }
    })();

    useEffect(() => {
       console.log(product); 
    },[])
  return (
      <div className={styles.product}>
          <div className={styles.mainInfo}>
              <div className={styles.imgWrapper}>
                <img className={styles.productImg} src={imgSrc} alt={product.name}></img>
              </div>
              <div className={styles.shortInfo}>
                  <div className={styles.infoTitle}>
                      {product.name}
                  </div>
                  <div className={styles.category}>
                      {product.category}
                  </div>
                  <div className={styles.infoReviews}>
                      <FontAwesomeIcon icon={stars[0]}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={stars[1]}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={stars[2]}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={stars[3]}></FontAwesomeIcon>
                      <FontAwesomeIcon icon={stars[4]}></FontAwesomeIcon>
                  </div>
                  <div className={styles.description}>
                      {product.description}
                  </div>
                  <div className={styles.mainAdvantages}></div>
              </div>
          </div>
    </div>
  )
}
