import React from 'react'
import styles from './styles.module.css'
import Product from './product/Product.js'
import data from '../../../assets/products/products.json'

export default function Products() {
  let products = data.products;
  let imgs = [];
  for (let i = 0; i < products.length; i++){
    imgs[i] = require(`../../../assets/products/${products[i].src}`);
  }

  return (
    <div className={styles.products}>
      <h1 className={styles.productsH1}>Our products</h1>
      <div className={styles.resultsSorting}>
        <div className={styles.results}>Showing 1-8 of 30 results</div>
        <div className={styles.sorting}>No sorting</div>
      </div>
      <div className={styles.productsSorted}>
      {products.map((product, i) => {
          return (
            <Product product={data.products[i]}></Product>
          )
        })
        }
      </div>
    </div>
  )
}
