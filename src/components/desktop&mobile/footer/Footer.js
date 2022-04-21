import React from 'react'
import styles from './styles.module.css'
import Emoji from '../emoji/Emoji.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>Made by Tomasz Sawarzyński <Emoji symbol="🐝" label="bee"></Emoji></p>
        <p>Github: <a href="https://github.com/Sawarz"><FontAwesomeIcon icon={faCodeBranch} size="lg"></FontAwesomeIcon></a></p>
    </footer>
  )
}
