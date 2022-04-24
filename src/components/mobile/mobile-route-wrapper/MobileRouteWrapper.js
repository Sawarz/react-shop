import React from 'react'
import MobileNavbar from '../navbar/MobileNavbar'
import Footer from '../../desktop&mobile/footer/Footer'

export default function MobileRouteWrapper(props) {
    return (
    <div className='mobile-page'>
          <MobileNavbar></MobileNavbar>     
          <div className='mobile-page-content'>
            {props.component}
          </div>
            <Footer></Footer>
        </div>
  )
}
