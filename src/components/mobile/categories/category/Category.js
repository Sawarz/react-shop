import React from 'react'
import styles from './styles.module.css'

export default function Category(props) {
  return (
    <div className={styles.category}>
      {props.name}
    </div>
  )
}
