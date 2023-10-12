import { useSelector } from 'react-redux';
import { Button } from '../../../component';
import { totalPrice } from '../../../helper/helperFunctions';
import { Link } from 'react-router-dom';


const PriceSummary = () => {
    const {cart} = useSelector(store => store?.cart);

    return (
        <div className="flex flex-col w-96 h-fit p-4 rounded-lg  gap-4 shadow-lg">
            <h6 className="text-lg font-semibold border-b-2 border-slate-400">Price Details</h6>
            <div className="flex flex-col gap-4 border-b-2 border-slate-400 ">
                <p className="flex flex-row items-center justify-between">
                    <span className="text-lg">Price ({cart.length } item)</span> 
                    <span>&#8377;{totalPrice(cart)}</span>
                </p>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 border-slate-400">
                <h6 className="text-lg">Total Amount</h6>
                <p>{totalPrice(cart)}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Link to="/address">
                    <Button 
                        className="flex flex-row items-center justify-center bg-teal-700 hover:bg-teal-800 text-white font-semibold p-2 rounded-xl" 
                        text="Place Order" 
                    />
                </Link>
            </div>
        </div>
    )
}

export default PriceSummary;