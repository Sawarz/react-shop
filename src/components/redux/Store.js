import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "./localStorage";
import deviceSlice from "./deviceSlice";
import shoppingCartSlice from "./shoppingCartSlice";
import productsSlice from "./productsSlice";

const savedState = loadState();

export default configureStore({
    reducer: {
        device: deviceSlice,
        shoppingCart: shoppingCartSlice,
        products: productsSlice
    },
    preloadedState: {
        shoppingCart: savedState
    }
})