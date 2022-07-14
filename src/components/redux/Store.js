import { configureStore } from "@reduxjs/toolkit";
import deviceSlice from "./deviceSlice";
import shoppingCartSlice from "./shoppingCartSlice";
import { loadState } from "./localStorage";

const savedState = loadState();

export default configureStore({
    reducer: {
        device: deviceSlice,
        shoppingCart: shoppingCartSlice
    },
    preloadedState: {
        shoppingCart: savedState
    }
})