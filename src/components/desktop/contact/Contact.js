import React from 'react'
import styles from './styles.module.css'
import ContactForm from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactHeader}>
        <h1>Feel free to contact us!</h1>
        <p>If you have any questions or remarks about our products, just write a message!</p>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactInfoElement}>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>221B Baker Street, London</p>
        </div>
        <div className={styles.contactInfoElement}>
          <FontAwesomeIcon icon={faPhone} />
          <p>+123 456 789</p>
        </div>
        <div className={styles.contactInfoElement}>
          <FontAwesomeIcon icon={faEnvelope} />
          contact@react-shop.com</div>
      </div>
      <ContactForm></ContactForm>
    </div>
  )
}
