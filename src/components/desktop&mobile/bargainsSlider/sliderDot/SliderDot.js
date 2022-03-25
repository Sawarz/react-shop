import React from 'react'
import styles from './styles.module.css'

export default function SliderDot(props) {
    if(props.currentSlide === props.id)
        return (
            <div className={`${styles.sliderDot} ${styles.sliderDotFilled}`}></div>
        )
    else {
        return (
            <div className={styles.sliderDot}></div>
        )
    }
}
