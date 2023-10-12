import { createSlice } from "@reduxjs/toolkit"
import productData from "../../db/db";

const initialState = {
    products: productData,
    categoryData: [...new Set(productData.map(product => product.category))],
    addressData: {},
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload
        },
        setAddressData: (state, action) => {
            state.addressData = action.payload
        }
    }
});

export const {
    setProduct,
    setAddressData
} = productSlice.actions;
export default productSlice.reducer;