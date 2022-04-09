import './App.css';
import { useMediaQuery } from 'react-responsive';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import Footer from './components/desktop&mobile/footer/Footer.js';
import Navbar from './components/desktop/navbar/navbar/Navbar';
import DesktopRouteWrapper from './components/desktop/desktop-route-wrapper/DesktopRouteWrapper';
import Products from './components/desktop/products/Products';
import Contact from './components/desktop/contact/Contact';
import AboutUs from './components/desktop/about-us/AboutUs';
import MobileNavbar from './components/mobile/navbar/MobileNavbar';
import MobileContent from './components/mobile/content/MobileContent';
import MobileRouteWrapper from './components/mobile/mobile-route-wrapper/MobileRouteWrapper';
import MobileContact from './components/mobile/contact/Contact';
import MobileProducts from './components/mobile/products/Products';
import MobileAboutUs from './components/mobile/about-us/AboutUs';

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
          <div className='mobile-page-content'>
            <MobileContent></MobileContent>
          </div>
            <Footer></Footer>
        </div>
      break;
    case "Desktop":
      appChildren = 
        <div className='desktop-page'>
          <Navbar></Navbar>
          <div className='desktop-page-content'>
            <Footer></Footer>
          </div>
        </div>
      break;
  }

  return (
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={appChildren}></Route>
        <Route path="/home" element={appChildren}></Route> 
        <Route path="/products" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileProducts />} /> : <DesktopRouteWrapper component={<Products />}/>}></Route>
        <Route path="/contact" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileContact />} /> : <DesktopRouteWrapper component={<Contact />}/>}></Route>
        <Route path="/about-us" element={device === "Mobile" ? <MobileRouteWrapper component={<MobileAboutUs />} /> : <DesktopRouteWrapper component={<AboutUs />}/>}></Route>
        <Route path="/products"></Route>
      </Routes>
    </HashRouter>
  </Provider>
  );
}

export default App;
