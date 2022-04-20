import React from 'react'
import styles from './styles.module.css'
import { useSearchParams } from 'react-router-dom'
import Product from './productInfo/ProductInfo.js'
import data from '../../../assets/products/products.json'

export default function Products() {
  let allResults = 0
  let showedResults = 0;
  let defaultResultsPerPage = 15;
  let renderedProducts = 0;

  const [searchParams] = useSearchParams();
  let productCategory = searchParams.get("category");
  let products = data.products;
  let imgs = [];

  for (let i = 0; i < products.length; i++){
    imgs[i] = require(`../../../assets/products/${products[i].src}`);
  }

  products.forEach((product, i) => {
    if (productCategory === products[i].category || productCategory === null) {
      allResults++;
    }
  });

  if (allResults > defaultResultsPerPage) showedResults = defaultResultsPerPage;
  else {
    showedResults = allResults;
  }
  
  return (
    <div className={styles.products}>
      <h1 className={styles.productsH1}>Our products</h1>
      <div className={styles.resultsSorting}>
        <div className={styles.results}>Showing 1-{showedResults} of {allResults} results</div>
        <div className={styles.sorting}>No sorting</div>
      </div>
      <div className={styles.productsSorted}>
        {products.map((product, i) => {
          if (renderedProducts<(defaultResultsPerPage)) {
            if (productCategory === products[i].category || productCategory === null) {
              renderedProducts++;
              return (
                <Product product={products[i]}></Product>
              )
            }
          }
          else {
            return null;
          }
        })
        }
      </div>
    </div>
  )
}
