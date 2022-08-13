import React from 'react'
import Navbar from '../navbar/navbar/Navbar'
import Footer from '../../desktop&mobile/footer/Footer'

export default function DesktopRouteWrapper(props) {
  return (
    <div className='desktop-page'>
          <Navbar></Navbar>     
          <div className='desktop-page-content'>
            {props.children}
          </div>
            <Footer></Footer>
        </div>
  )
}
