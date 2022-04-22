/* eslint-disable default-case */
import './App.css';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { saveState } from './components/redux/localStorage';
import DesktopRouteWrapper from './components/desktop/desktop-route-wrapper/DesktopRouteWrapper';
import Home from './components/desktop/home/Home';
import Products from './components/desktop/products/Products';
import Product from './components/desktop/products/product/Product';
import Contact from './components/desktop/contact/Contact';
import AboutUs from './components/desktop/about-us/AboutUs';
import MobileRouteWrapper from './components/mobile/mobile-route-wrapper/MobileRouteWrapper';
import MobileContact from './components/mobile/contact/Contact';
import MobileProducts from './components/mobile/products/Products';
import MobileAboutUs from './components/mobile/about-us/AboutUs';
import Cart from './components/desktop/cart/Cart';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  let device;

  if(isMobile === true) device = "Mobile";
  if (isDesktop === true) device = "Desktop";
  
  let appState = useSelector((state) => state.shoppingCart);

    useEffect(() => {
        saveState(appState);
    }, [appState])

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileContact />} /> : <Home />}></Route>
        <Route path="/home" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileContact />} /> : <Home />}></Route> 
        <Route path="/products" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileProducts />} /> : <DesktopRouteWrapper component={<Products />}/>}></Route>
        <Route path="/products/:product" element={device === "Mobile" ? <MobileRouteWrapper component={<Product />} /> : <DesktopRouteWrapper component={<Product />}/>}></Route>
        <Route path="/contact" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileContact />} /> : <DesktopRouteWrapper component={<Contact />}/>}></Route>
        <Route path="/about-us" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileAboutUs />} /> : <DesktopRouteWrapper component={<AboutUs />} />}></Route>
        <Route path="/shopping-cart" element={<Cart></Cart>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
