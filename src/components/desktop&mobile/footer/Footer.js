import React from 'react'
import styles from './styles.module.css'
import Emoji from '../emoji/Emoji.js'

export default function Footer() {
    const text = "Made by Tomasz Sawarzyński "
  return (
    <footer className={styles.footer}>
          <div>{text}
              <Emoji symbol="🐝" label="sheep"></Emoji>
        </div>
    </footer>
  )
}
