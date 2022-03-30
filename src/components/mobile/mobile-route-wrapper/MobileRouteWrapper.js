import React from 'react'
import MobileNavbar from '../navbar/MobileNavbar'
import MobileContent from '../content/MobileContent'
import Footer from '../../desktop&mobile/footer/Footer'

export default function MobileRouteWrapper(props) {
  return (
    <div className='mobile-page'>
          <MobileNavbar></MobileNavbar>     
          <div className='page-content'>
            {props.component}
          </div>
            <Footer></Footer>
        </div>
  )
}
