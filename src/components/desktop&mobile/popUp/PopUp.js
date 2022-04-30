import React from 'react'
import styles from './styles.module.css'

export default function PopUp(props) {
    setTimeout(() => {
        props.toggle();
    }, 2000)

  return (
      <div className={styles.popUp}>
          <p className={styles.text}><span className={styles.productName}>{props.product.name}</span> added to shopping cart!</p>
          <button className={styles.closeButton} onClick={() => {
              props.toggle();
          }}>Close</button>
      </div>
  )
}
