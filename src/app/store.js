import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/shoppingPage/productSlice";
import productFilterReducer from "../component/sidebar/productFilterSlice"

export const store = configureStore({
    reducer: {
        products: productReducer,
        productFilter: productFilterReducer
    }
})