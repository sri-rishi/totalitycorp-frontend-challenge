import {Image} from "../index"

const Ratings = ({rating}) => {
    return (
        <p>
            <span>{rating && rating}</span>
            <Image src="https://img.icons8.com/color/48/000000/filled-star--v1.png" alt="ratings" />
        </p>
    )
}

export default Ratings;