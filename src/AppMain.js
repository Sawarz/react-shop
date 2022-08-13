/* eslint-disable default-case */
import './App.css';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { setDevice } from './components/redux/deviceSlice';
import { saveState } from './components/redux/localStorage';
import { setProducts } from './components/redux/productsSlice';
import AppMobile from './AppMobile';
import AppDesktop from './AppDesktop'

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

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
    <>
      {device === "Mobile" ? <AppMobile /> : <AppDesktop />}
    </>
  );
}

export default App;
