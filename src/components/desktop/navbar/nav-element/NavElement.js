import React from 'react'

export default function NavElement() {
    function handleMouseEnter(){
        console.log("X")
    }
  return (
    <div onMouseEnter={handleMouseEnter}>NavElement</div>
  )
}

