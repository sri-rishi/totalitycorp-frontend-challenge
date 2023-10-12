import { useSelector } from "react-redux"
import { CartItemCard } from "../../../component";

const CartItemList = () => {
    const {cart} = useSelector(store => store?.cart);
    return (
        <div className="flex flex-col gap-4">
            <div className="p-4 w-full shadow">
                <h4>My Cart({cart.length && cart.length})</h4>
            </div>
            <div className="flex flex-col items-center jusitfy-center gap-4">
                {
                    cart.map((cartItem) => (
                        <CartItemCard key={cartItem.id} cartItem={cartItem}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CartItemList;