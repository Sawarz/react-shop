import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export default function Payment() {
  return (
      <div className={styles.payment}>
          <h1 className={styles.header}>Payment screen placeholder</h1>
          <Link className={styles.link} to="/">Go back to the shop</Link>
    </div>
  )
}
