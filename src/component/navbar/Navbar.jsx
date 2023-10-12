import { Link } from "react-router-dom";
import { FaShoppingCart } from "../../assets/icons";
import { useSelector } from "react-redux";

const Navbar = () => {
    const {cart}  = useSelector(store => store?.cart)
    return (
        <div className="w-full flex items-center z-50 justify-between text-gray-700 text-2xl py-4 px-8 shadow-lg bg-white fixed">
            <div>
                <Link to="/">
                    <h1>Title</h1>
                </Link>
            </div>
            <div className="flex items-center justify-between relative">
                <Link to="/cart">
                    <FaShoppingCart/>
                    {
                    cart.length > 0 ? 
                        <span className="absolute w-5 h-5 flex flex-row items-center justify-center text-sm -top-2 -right-2 p-2 bg-red-500 text-white rounded-full">
                            {cart.length}
                        </span>
                    : ""
                    }
                </Link>
            </div>
        </div>
    )
} 


export default Navbar;