import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../../assets/categories/categories.json'
import styles from './styles.module.css'
import Category from './category/Category'

export default function Categories() {
    const categories = data.categories;
    return (
    <div className={styles.categoriesWrapper}>
        <div className={styles.categoriesTitle}>
            <h1>Top Categories</h1>
            <Link className={styles.seeAll} to='/products'>See All</Link>
        </div>
        <div className={styles.categories}>
            {categories.map((category, i) => {
                return (
                    <Category name={categories[i].name}></Category>
                )
            })}</div>    
    </div>
  )
}
