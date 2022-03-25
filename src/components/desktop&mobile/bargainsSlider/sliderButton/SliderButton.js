import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function SliderButton(props) {
    if (props.direction === "left")
        return (
            <button className={styles.sliderButton} onClick={(e) => {
                props.onClick(props.direction)
            }}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
        )
    else {
        return (
            <button className={styles.sliderButton} onClick={(e) => {
                props.onClick(props.direction)
            }}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        )
    }
}
