import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../../../component"
import { useEffect } from "react";
import { setProduct } from "../productSlice";
import {
    getFilterByPriceRangeData,
    getFilteredByCategoriesData,
    getFilteredByRatingsData,
    getSortedProductList
} from "../../../helper/filterProduct.helper";
import productData from "../../../db/db";

const ProductListing = () => {
    const {products} = useSelector(store => store?.products);
    const { 
        sortBy,
        priceRange,
        selectedCategories,
        ratingValue
    } = useSelector(store => store?.productFilter)
    const dispatch = useDispatch();

    useEffect(() => {
        const filterByRange = getFilterByPriceRangeData(productData, priceRange);
        const sortedData = getSortedProductList(filterByRange, sortBy);
        const filterByCategory = getFilteredByCategoriesData(sortedData, selectedCategories);
        const filterByRatings = getFilteredByRatingsData(filterByCategory, ratingValue);
        dispatch(setProduct(filterByRatings));
    }, [
        sortBy,
        priceRange,
        selectedCategories,
        ratingValue
    ])

    return (
        <div className="m-0 sm:ml-72 flex flex-row justify-evenly gap-4 p-8 flex-wrap">
            {
                products.length > 0?
                products.map((productItem) => (
                    <ProductCard key={productItem.id} productItem={productItem}/>
                ))
                :
                <div>
                    Loding
                </div>
            }
            
        </div>
    )
}

export default ProductListing;