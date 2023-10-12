import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../pages/shoppingPage/productSlice";
import productFilterReducer from "../component/sidebar/productFilterSlice";
import cartReducer from "../pages/cart/cartSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        productFilter: productFilterReducer,
        cart: cartReducer
    }
})