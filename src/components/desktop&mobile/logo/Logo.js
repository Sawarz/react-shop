import React from 'react'
import LogoImg from './LogoImg.png'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
    <img src={LogoImg} width="100px"></img>
    </Link>
  )
}
