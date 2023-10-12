import { Link } from "react-router-dom"
import Button from "../button/Button"
import Image from "../image/Image"

const EmptyCart = () => {
    return (
        <div className="mt-20 w-full h-full flex flex-row items-center justify-center">
                <div className="w-full max-w-2xl h-full flex flex-col items-center justify-center gap-4">
                    <Image 
                        className={"w-full h-full object-contain"}
                        src="https://static-00.iconduck.com/assets.00/empty-cart-illustration-512x428-mcol2auz.png" 
                        alt="empty cart"
                    />


                    <Link to="/">
                        <Button 
                            className={"flex flex-row items-center justify-center bg-teal-700 hover:bg-teal-800 text-white font-semibold p-2 gap-4 rounded-xl"} 
                            text={"Shop now"} 
                        />
                    </Link>
            </div>
        </div>
    )
}

export default EmptyCart;