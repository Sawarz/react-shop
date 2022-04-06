import React from 'react'
import styles from './styles.module.css'

export default function Contact() {
  
  return (
    <div className={styles.contact}>
      <div className={styles.contactHeader}>
        <h1>Feel free to contact us!</h1>
        <p>If you have any questions or remarks about our products, just write a message!</p>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactInfoElement}>221b Baker Street, London</div>
        <div className={styles.contactInfoElement}>+123 456 789</div>
        <div className={styles.contactInfoElement}>contact@react-shop.com</div>
      </div>
    </div>
  )
}
