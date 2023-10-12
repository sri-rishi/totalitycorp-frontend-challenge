import {Image, Button} from "../index";
import {removeFromCart, reduceProduct,incrementProduct} from "../../pages/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItemCard = ({cartItem}) => {

    const dispatch = useDispatch();

    const removeProductHandler = (cartItem) => {
      dispatch(removeFromCart(cartItem));
    };

    return (
        <div className="text-gray-500 max-w-sm max-h-[40rem] w-80 sm:w-96 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
        <Image 
          className={"object-cover w-full rounded-t-lg h-52 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"}
          src={cartItem?.image}           
          alt={cartItem?.title} 
        />
        <div className="flex flex-col justify-between gap-4 p-4">
            <h5 className="mb-2 text-xl font-semibold  text-gray-700">
              {cartItem?.title}
            </h5>
            <div className="flex items-center gap-4">
              <Button 
                className={"flex flex-row items-center justify-center bg-teal-700 hover:bg-teal-800 text-white font-semibold px-2 py-1 rounded-xl"} 
                text={"+"} 
                onClick={() => dispatch(incrementProduct(cartItem))}
              />
                <span className='text-xl font-medium'>{cartItem?.quantity}</span>
              <Button 
                className={"flex flex-row items-center justify-center bg-teal-700 hover:bg-teal-800 text-white font-semibold px-2 py-1 rounded-xl"} 
                text={"-"}
                onClick={() => dispatch(reduceProduct(cartItem))}
              />
            </div>

            <div className="flex flex-row items-center">
              <Button 
                className={"flex flex-row items-center justify-center bg-teal-700 hover:bg-teal-800 text-white font-semibold p-2 rounded-xl"} 
                text={"Remove"}
                onClick={() => removeProductHandler(cartItem)}
              />
            </div>
        </div>
    </div>
    )
} 

export default CartItemCard;