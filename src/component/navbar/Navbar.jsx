import { FaShoppingCart , BiSolidUserCircle} from "../../assets/icons";

const Navbar = () => {
    return (
        <div className="w-full flex items-center z-50 justify-between text-2xl py-4 px-8 shadow-lg bg-white fixed">
            <div>
                <h1>Title</h1>
            </div>
            <div className="flex items-center justify-between gap-x-4">
                <div>
                    <FaShoppingCart />
                </div>
                <div>
                    <BiSolidUserCircle />
                </div>
            </div>
        </div>
    )
} 


export default Navbar;