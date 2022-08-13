import { useState } from 'react'
import styles from './styles.module.css'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import Product from '../../desktop/products/productInfo/ProductInfo.js'
import Dropdown from '../dropdown/Dropdown'

export default function Products() {
  const [sorting, setSorting] = useState("No sorting");
  let allResults = 0
  let showedResults = 0;
  let defaultResultsPerPage = 24;
  let renderedProducts = 0;
  let sortingOptions = ["Price - Lowest", "Price - Highest", "Best Rated", "No sorting"];

  function sortProducts(products, sortingType) {
    let sortedProducts = products.slice();
    switch(sortingType){
      case "Price - Lowest":
        sortedProducts.sort((a, b) => (parseInt(a.price) > parseInt(b.price)) ? 1 : -1);
        break;
      case "Price - Highest":
        sortedProducts.sort((a, b) => (parseInt(a.price) > parseInt(b.price)) ? -1 : 1);
        break;
      case "Best Rated":
        sortedProducts.sort((a, b) => (parseInt(a.stars) > parseInt(b.stars)) ? -1 : 1);
        break;
      case "No sorting":
        sortedProducts.sort((a, b) => 0.5 - Math.random());
        break;
    }
    
    return sortedProducts;
  }

  const [searchParams] = useSearchParams();
  let productCategory = searchParams.get("category");
  let productAppType = searchParams.get("appType");
  let products = useSelector((state) => state.products);
  let sortedProducts = sortProducts(products, sorting);
  let imgs = [];

  for (let i = 0; i < sortedProducts.length; i++){
    imgs[i] = require(`../../../assets/products/${sortedProducts[i].src}`);
  }

  sortedProducts.forEach((product, i) => {
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
            <div className={styles.sorting}>
              <Dropdown options={sortingOptions} chooseSorting={setSorting}></Dropdown>
              <div className={styles.sortingType}>{sorting}</div>
            </div>
          </div>
          <div className={styles.productsSortedMobile}>
            {sortedProducts.map((product, i) => {
              if (renderedProducts < (defaultResultsPerPage)) {
                if (productCategory === product.category || productCategory === null) {
                  renderedProducts++;
                  return (
                    <Product key={product.id} product={sortedProducts[i]}></Product>
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
            <div className={styles.sorting}>
              <Dropdown options={sortingOptions} chooseSorting={setSorting}></Dropdown>
              <div className={styles.sortingType}>{sorting}</div>
            </div>
          </div>
          <div className={styles.productsSortedMobile}>
            {sortedProducts.map((product, i) => {
              if (renderedProducts < (defaultResultsPerPage)) {
                if (productCategory === sortedProducts[i].category || productCategory === null) {
                  renderedProducts++;
                  return (
                    <Product key={product.id} product={sortedProducts[i]}></Product>
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
          <div className={styles.sorting}>
            <Dropdown options={sortingOptions} chooseSorting={setSorting}></Dropdown>
            <div className={styles.sortingType}>{sorting}</div>
          </div>
      </div>
      <div className={styles.productsSorted}>
          {sortedProducts.map((product, i) => {
          if (renderedProducts<(defaultResultsPerPage)) {
            if (productCategory === sortedProducts[i].category || (productCategory === null && productAppType === null)) {
              renderedProducts++;
              return (
                <Product key={product.id} product={sortedProducts[i]}></Product>
              )
            }
            else if(productAppType === sortedProducts[i].appType || (productCategory === null && productAppType === null)) {
              renderedProducts++;
              return (
                <Product key={product.id} product={sortedProducts[i]}></Product>
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
