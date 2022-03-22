import './App.css';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import {HashRouter, Routes, Route } from "react-router-dom";
import MobileNavbar from './components/mobile/navbar/MobileNavbar';
import Footer from './components/desktop&mobile/footer/Footer.js'
import MobileContent from './components/mobile/content/MobileContent';


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
        <div className='page'>
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
    <Route path="/products"></Route>
  </Routes>
  <div className="App">
      {appChildren}
    </div>
  </HashRouter>
  );
}

export default App;
