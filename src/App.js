import './App.css';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import {HashRouter, Routes, Route } from "react-router-dom";
import MobileNavbar from './components/mobile/navbar/MobileNavbar';
import Footer from './components/desktop&mobile/footer/Footer.js'
import MobileContent from './components/mobile/content/MobileContent';
import MobileRouteWrapper from './components/mobile/mobile-route-wrapper/MobileRouteWrapper';
import Contact from './components/mobile/contact/Contact';
import Products from './components/mobile/products/Products';
import AboutUs from './components/mobile/about-us/AboutUs';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  let device;
  let appChildren;

  if(isMobile === true) device = "Mobile";
  if(isDesktop === true) device = "Desktop";
  
  switch (device) {
    case "Mobile":
      appChildren = 
        <div className='mobile-page'>
          <MobileNavbar></MobileNavbar>     
          <div className='page-content'>
            <MobileContent></MobileContent>
          </div>
            <Footer></Footer>
        </div>
      break;
    case "Desktop":
      appChildren = 
      <div className='page-content'>
          <Footer></Footer>
        </div>
      break;
  }

  return (
  <HashRouter>
    <Routes>
      <Route path="/" element={appChildren}></Route>
      <Route path="/home" element={appChildren}></Route> 
      <Route path="/products" element={<MobileRouteWrapper component={<Products/>}/>}></Route>
      <Route path="/contact" element={<MobileRouteWrapper component={<Contact/>}/>}></Route>
      <Route path="/about-us" element={<MobileRouteWrapper component={<AboutUs/>}/>}></Route>
      <Route path="/products"></Route>
    </Routes>
  </HashRouter>
  );
}

export default App;
