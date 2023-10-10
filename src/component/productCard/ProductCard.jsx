import {Button, Image, Ratings} from "../index";

const ProductCard = () => {
    return (
        <div>
            <div>
                <Image />
            </div>
            <div>
                <div>
                    <p>Product Name</p>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem nemo labore dolorum aperiam molestiae recusandae ea a consequatur voluptatem porro ad, voluptatibus natus ipsam vel! Consectetur corrupti consequatur quod repellendus nobis quidem aut porro itaque debitis cum, tempore, veniam nam voluptate eligendi eos, dignissimos repudiandae molestias quis? Quis, suscipit!
                </div>
                <div>
                    <p>
                        <span>&#8377; 29999</span> 
                    </p>
                </div>
                <div>
                    <p>
                        <Ratings rating={"4.7"}/>
                        <span>120 </span>
                    </p>
                </div>
                
            </div>
            <div>
                <Button text={"Add to cart"}/>
            </div>
        </div>
    )
}

export default ProductCard;