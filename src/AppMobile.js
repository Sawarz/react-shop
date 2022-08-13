import './App.css';
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import MobileRouteWrapper from './components/mobile/mobile-route-wrapper/MobileRouteWrapper';
import MobileContent from './components/mobile/content/MobileContent';
import MobileContact from './components/mobile/contact/Contact';
import MobileAboutUs from './components/mobile/about-us/AboutUs';
import MobileCart from './components/mobile/cart/Cart';
import Products from './components/desktop&mobile/products/Products';
import Product from './components/desktop&mobile/product/Product';
import Payment from './components/desktop&mobile/payment/Payment';

function AppMobile() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<MobileRouteWrapper><Outlet/></MobileRouteWrapper>}>
                    <Route path="/" element={<MobileContent />}></Route>
                    <Route path="/home" element={<MobileContent />}></Route> 
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/products/:product" element={<Product />}></Route>
                    <Route path="/contact" element={<MobileContact />}></Route>
                    <Route path="/about-us" element={<MobileAboutUs />}></Route>
                </Route>
                <Route path="/shopping-cart" element={<MobileCart />}></Route>
                <Route path="/payment" element={<Payment />}></Route>
            </Routes>
        </HashRouter>
  );
}

export default AppMobile;