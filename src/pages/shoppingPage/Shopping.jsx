import { Sidebar } from "../../component";
import  ProductListing from "./component/ProductListing";

const ShoppingPage = () => {
    return (
        <div className="flex flex-row gap-4 relative mt-16">
            <Sidebar />
            <ProductListing />
        </div>
    )
}

export default ShoppingPage;