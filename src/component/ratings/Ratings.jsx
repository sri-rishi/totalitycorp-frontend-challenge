import {AiFillStar} from "../../assets/icons";

const Ratings = ({rating}) => {
    return (
        <p className="flex flex-row items-center gap-1 px-2 py-1 rounded-lg bg-cyan-200 text-gray-700">
            <span>{rating && rating}</span>
            <AiFillStar className="text-yellow-400 text-lg"/>
        </p>
    )
}

export default Ratings;