import { useNavigate } from "react-router-dom";
import Button from "../button/Button"
import { useDispatch } from "react-redux";
import { removeAll } from "../../pages/cart/cartSlice";

const ConfirmOrderModal = ({addressData, setShowConfirmModel}) => {
    const { 
        name,
        street,
        city,
        state, 
        zip
    } = addressData;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClose = () => {
        setShowConfirmModel(false);
        dispatch(removeAll());
        navigate("/");
    }
    return (
        <div className="flex flex-col w-full max-w-xl bg-white items-center gap-4 text-slate-700 font-semibold p-4 border-2 border-slate-700 rounded-xl">
            <p>Hey {name}</p>
            <p>Your order is placed</p>
            <p>It will be delivered at {`${street}, ${city}, ${state}, ${zip}`}</p>
            <Button 
                className={"flex flex-row items-center justify-center bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2  px-6 rounded-xl"} 
                text={"Close"}
                onClick={() => handleClose()}
            />
        </div>
    )
}

export default ConfirmOrderModal;