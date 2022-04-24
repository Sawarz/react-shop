import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export default function Category(props) {
  return (
    <Link className={styles.category} to={`/products?category=${props.name}`}>
      {props.name}
    </Link>
  )
}
