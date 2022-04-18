import React from 'react'
import styles from './styles.module.css'
import { useSearchParams } from 'react-router-dom'
import Product from './productInfo/ProductInfo.js'
import data from '../../../assets/products/products.json'

export default function Products() {
  const [searchParams] = useSearchParams();
  let productCategory = searchParams.get("category");
  console.log(productCategory)
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
          if(productCategory === products[i].category || productCategory === null)
          return (
            <Product product={products[i]}></Product>
          )
        })
        }
      </div>
    </div>
  )
}
