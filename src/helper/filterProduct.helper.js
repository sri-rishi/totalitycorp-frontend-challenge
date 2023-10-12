const getFilterByPriceRangeData = (productList, priceRange) => {
    return productList.filter(product => product.price < priceRange);
}

const getFilteredByRatingsData = (productList, rating) => productList.filter(product => product.rating >= rating);

const getSortedProductList = (productList, sortBy) => {
    if (sortBy === "") {
        return productList
    }

    if (sortBy === "Low-to-High") {
        return [...productList].sort((firstItem, secondItem) => firstItem.price - secondItem.price);
    }

    if (sortBy === "High-to-Low") {
        return [...productList].sort((firstItem, secondItem) => secondItem.price - firstItem.price)
    }
}

const getFilteredByCategoriesData = (productList, selectedCategories) => {
    if (selectedCategories.length > 0) {
        return productList.filter(product => selectedCategories.includes(product.category));
    }
    return productList;
}

export {
    getFilterByPriceRangeData,
    getFilteredByCategoriesData,
    getFilteredByRatingsData,
    getSortedProductList
}