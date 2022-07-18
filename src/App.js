/* eslint-disable default-case */
import './App.css';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setDevice } from './components/redux/deviceSlice';
import { saveState } from './components/redux/localStorage';
import DesktopRouteWrapper from './components/desktop/desktop-route-wrapper/DesktopRouteWrapper';
import Home from './components/desktop/home/Home';
import Products from './components/desktop&mobile/products/Products';
import Product from './components/desktop/products/product/Product';
import Contact from './components/desktop/contact/Contact';
import AboutUs from './components/desktop/about-us/AboutUs';
import MobileRouteWrapper from './components/mobile/mobile-route-wrapper/MobileRouteWrapper';
import MobileContent from './components/mobile/content/MobileContent';
import MobileContact from './components/mobile/contact/Contact';
import MobileAboutUs from './components/mobile/about-us/AboutUs';
import MobileCart from './components/mobile/cart/Cart';
import Cart from './components/desktop/cart/Cart';
import Payment from './components/desktop&mobile/payment/Payment';
import { setProducts } from './components/redux/productsSlice';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  let device;
  
  if(isMobile === true) device = "Mobile";
  if (isDesktop === true) device = "Desktop";

  let dispatch = useDispatch();
  dispatch(setDevice(device));
  
  let appState = useSelector((state) => state.shoppingCart);

    useEffect(() => {
        saveState(appState);
    }, [appState])
  
  fetch("https://react-shop-products-api.herokuapp.com/products")
    .then(response => response.json())
    .then(json => dispatch(setProducts(json)))

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileContent />} /> : <Home />}></Route>
        <Route path="/home" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileContent />} /> : <Home />}></Route> 
        <Route path="/products" element={device === "Mobile" ? <MobileRouteWrapper component={<Products />} /> : <DesktopRouteWrapper component={<Products />}/>}></Route>
        <Route path="/products/:product" element={device === "Mobile" ? <MobileRouteWrapper component={<Product />} /> : <DesktopRouteWrapper component={<Product />}/>}></Route>
        <Route path="/contact" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileContact />} /> : <DesktopRouteWrapper component={<Contact />}/>}></Route>
        <Route path="/about-us" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileAboutUs />} /> : <DesktopRouteWrapper component={<AboutUs />} />}></Route>
        <Route path="/shopping-cart" element={device === "Mobile" ? <MobileCart /> : <Cart />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
