import {Button, Image, Ratings} from "../index";
import { FaShoppingCart} from "../../assets/icons";

const ProductCard = () => {
    return (
        <div className="max-w-sm max-h-[30rem] bg-white border border-gray-200 flex flex-col gap-4 rounded-xl shadow-lg p-4">
            <div className="w-full h-52 flex flex-row items-center justify-center">
                <Image className={"w-full h-full rounded-t-lg object-contain"} src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} alt={"Product preview"}/>
            </div>
            <div className="flex flex-col justify-center gap-2 text-gray-500 font-medium px-2">
                <p className="text-xl text-gray-800 font-semibold">Product Name</p>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing ...
                </p>
                <div>
                    <p>
                        <span>&#8377; 29999</span> 
                    </p>
                </div>
                <div className="flex flex-row items-center">
                    <Ratings rating={"4.7"}/>
                </div>
                
            </div>
            <div className="flex flex-row items-center justify-center">
                <Button 
                    className={"flex flex-row items-center justify-center bg-teal-700 hover:bg-teal-800 text-white font-semibold p-2 gap-4 rounded-xl"} text={"Add to cart"} 
                    icon={< FaShoppingCart />}
                />
            </div>
        </div>
    )
}

export default ProductCard;