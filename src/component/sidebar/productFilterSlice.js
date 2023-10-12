import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sortBy: "",
    selectedCategories: [],
    priceRange: 999,
    ratingValue: 0,
}

const productFilterSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
        },
        setRatingValue: (state, action) => {
            state.ratingValue = action.payload;
        },
        addSelectedCategory: (state, action) => {
            state.selectedCategories.push(action.payload);
        },
        removeSelectedCategory: (state, action) => {
            state.selectedCategories = state.selectedCategories.filter(
                (category) => category !== action.payload
            );
        },
    }
});

export const {
    setSortBy,
    setCategoryValue,
    setPriceRange,
    setRatingValue,
    addSelectedCategory,
    removeSelectedCategory,
} = productFilterSlice.actions;

export default productFilterSlice.reducer;