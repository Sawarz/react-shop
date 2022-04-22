import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "./shoppingCartSlice";
import { loadState } from "./localStorage";

const savedState = loadState();

export default configureStore({
    reducer: {
        shoppingCart: shoppingCartSlice
    },
    preloadedState: {shoppingCart: savedState}
})