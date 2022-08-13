import './App.css';
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import DesktopRouteWrapper from './components/desktop/desktop-route-wrapper/DesktopRouteWrapper';
import Home from './components/desktop/home/Home';
import Products from './components/desktop&mobile/products/Products';
import Product from './components/desktop&mobile/product/Product';
import Contact from './components/desktop/contact/Contact';
import AboutUs from './components/desktop/about-us/AboutUs';
import Cart from './components/desktop/cart/Cart';
import Payment from './components/desktop&mobile/payment/Payment';

function AppDesktop() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route element={<DesktopRouteWrapper><Outlet /></DesktopRouteWrapper>}>
                    <Route path="/home" element={<Home />}></Route> 
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/products/:product" element={<Product />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/about-us" element={<AboutUs />}></Route>
                </Route>
                <Route path="/shopping-cart" element={<Cart />}></Route>
                <Route path="/payment" element={<Payment />}></Route>
            </Routes>
        </HashRouter>
  );
}

export default AppDesktop;