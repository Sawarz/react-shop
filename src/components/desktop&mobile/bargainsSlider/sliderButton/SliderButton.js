import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function SliderButton(props) {
    if (props.direction === "left")
        return (
            <button onClick={(e) => {
                props.onClick(props.direction)
            }}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
        )
    else {
        return (
            <button onClick={(e) => {
                props.onClick(props.direction)
            }}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        )
    }
}
