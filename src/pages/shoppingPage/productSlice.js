import { createSlice } from "@reduxjs/toolkit"
import productData from "../../db/db";

const initialState = {
    products: productData,
    categoryData: [...new Set(productData.map(product => product.category))]
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload
        }
    }
});

export const {
    setProduct,
} = productSlice.actions;
export default productSlice.reducer;