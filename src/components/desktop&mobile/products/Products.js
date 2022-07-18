import React from 'react'
import styles from './styles.module.css'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import Product from '../../desktop/products/productInfo/ProductInfo.js'

export default function Products() {
  let allResults = 0
  let showedResults = 0;
  let defaultResultsPerPage = 24;
  let renderedProducts = 0;

  const [searchParams] = useSearchParams();
  let productCategory = searchParams.get("category");
  let productAppType = searchParams.get("appType");
  let products = useSelector((state) => state.products);
  console.log(products);
  let imgs = [];

  for (let i = 0; i < products.length; i++){
    imgs[i] = require(`../../../assets/products/${products[i].src}`);
  }

  products.forEach((product, i) => {
    if (productCategory === product.category || productCategory === null) {
      allResults++;
    }
  });

  if (allResults > defaultResultsPerPage) showedResults = defaultResultsPerPage;
  else {
    showedResults = allResults;
  }

  let componentChildren;
  let device = useSelector((state) => state.device.type);

  let url = useLocation().pathname;

  if (device === "Mobile") {
    if (url == "/" || url == "/home") {
      componentChildren =
        <div className={styles.productsMobile}>
          <div className={styles.resultsSorting}>
          </div>
          <div className={styles.productsSortedMobile}>
            {products.map((product, i) => {
              if (renderedProducts < (defaultResultsPerPage)) {
                if (productCategory === product.category || productCategory === null) {
                  renderedProducts++;
                  return (
                    <Product key={product.id} product={products[i]}></Product>
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
    }
    else {
      componentChildren =
        <div className={styles.productsMobile}>
          <h1 className={styles.productsH1}>Our products</h1>
          <div className={styles.resultsSorting}>
            <div className={styles.results}>Showing 1-{showedResults} of {allResults} results</div>
            <div className={styles.sorting}>No sorting</div>
          </div>
          <div className={styles.productsSortedMobile}>
            {products.map((product, i) => {
              if (renderedProducts < (defaultResultsPerPage)) {
                if (productCategory === products[i].category || productCategory === null) {
                  renderedProducts++;
                  return (
                    <Product key={product.id} product={products[i]}></Product>
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
    }
  }
  else {
    componentChildren = 
    <div className={styles.products}>
      <h1 className={styles.productsH1}>Our products</h1>
      <div className={styles.resultsSorting}>
        <div className={styles.results}>Showing 1-{showedResults} of {allResults} results</div>
        <div className={styles.sorting}>No sorting</div>
      </div>
      <div className={styles.productsSorted}>
        {products.map((product, i) => {
          if (renderedProducts<(defaultResultsPerPage)) {
            if (productCategory === products[i].category || (productCategory === null && productAppType === null)) {
              renderedProducts++;
              return (
                <Product key={product.id} product={products[i]}></Product>
              )
            }
            else if(productAppType === products[i].appType || (productCategory === null && productAppType === null)) {
              renderedProducts++;
              return (
                <Product key={product.id} product={products[i]}></Product>
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
  }
  
  return (
    <>
      {componentChildren}    
  </>
  )
}
