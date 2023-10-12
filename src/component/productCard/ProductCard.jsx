import {Button, Image, Ratings} from "../index";
import { FaShoppingCart} from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../pages/cart/cartSlice";
import { findItemInArray } from "../../helper/helperFunctions";

const ProductCard = ({productItem}) => {
    const {cart} = useSelector(store => store?.cart);
    const dispatch = useDispatch(); 

    const addProduct = (productItem) => {
        dispatch(addToCart(productItem));
      };
    
    return (
        <div className="max-w-sm max-h-[30rem] w-80 bg-white border border-gray-200 flex flex-col gap-4 rounded-xl shadow-lg p-4">
            <div className="w-full h-52 flex flex-row items-center justify-center">
                <Image className={"w-full h-full rounded-t-lg object-contain"} src={productItem?.image} alt={"Product preview"}/>
            </div>
            <div className="flex flex-col justify-center gap-2 text-gray-500 font-medium px-2">
                <p className="text-lg text-gray-800 font-semibold">
                    {productItem?.title.length > 25 ? `${productItem?.title.slice(0, 25)} ...` : productItem?.title}
                </p>
                <div>
                    <p>
                        <span>&#8377; {productItem?.price}</span> 
                    </p>
                </div>
                <div className="flex flex-row items-center">
                    <Ratings rating={productItem?.rating}/>
                </div>
                
            </div>
            <div className="flex flex-row items-center justify-center">
                <Button 
                    className={"flex flex-row items-center justify-center bg-teal-700 hover:bg-teal-800 text-white font-semibold p-2 gap-4 rounded-xl"} 
                    text={findItemInArray(cart, productItem.id) ? "Added in cart": "Add to cart"} 
                    icon={< FaShoppingCart />}
                    onClick={() => addProduct(productItem)}
                    disabled={findItemInArray(cart, productItem.id)}
                />
            </div>
        </div>
    )
}

export default ProductCard;