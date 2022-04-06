import { configureStore } from "@reduxjs/toolkit";
import currentRouteSlice from "./currentRouteSlice";

export default configureStore({
    reducer: {
        currentRoute: currentRouteSlice
    }
})