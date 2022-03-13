import './App.css';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import MobileNavbar from './components/mobile/navbar/MobileNavbar';
import {HashRouter, Routes, Route } from "react-router-dom";


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
      <MobileNavbar></MobileNavbar>
      break;
    case "Desktop":
      appChildren = 
      <div>
        Desktop
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
