import { ProductCard } from "../../../component"

const ProductListing = () => {
    return (
        <div className="ml-72 flex flex-row justify-evenly gap-4 p-8 flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default ProductListing;