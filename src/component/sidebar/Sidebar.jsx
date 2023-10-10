const Sidebar = () => {
    return (
        <aside>
            <div>
                Filters
            </div>
            <div>
                <div>
                    <span>Price Range</span>
                </div>
                <div>
                    <input 
                        id="priceRange"
                        type="range" 
                        min="4000" 
                        max="350000" 
                    />
                    <span>4000</span>
                </div>
            </div>
            <div>
                <div>
                    <span>Sort by Price</span>
                </div>
                <ul>
                {
                        ["Low to High", "High to Low"].map((value, i) => (
                            <li key={i}>
                                <label htmlFor={value}>
                                    <input 
                                        type="radio" 
                                        id={value}
                                        name="sort" 
                                        aria-label={value} 
                                    />
                                    {value}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <div>
                    <span>Category</span>
                </div>
                <ul>
                    {
                        ["category1","category2","category3", "category4"].map((category, i) => (
                            <li key={i}>
                                <label htmlFor={category}>
                                    <input 
                                        id={category} 
                                        type="checkbox"
                                        name={category} 
                                        aria-label={category}
                                    />
                                    {category}
                                </label>
                            </li>
                        ))
                    }
                </ul>  
            </div>
            <div>
                <div>
                    <span>Ratings</span>
                </div>
                <ul>
                    {
                        ["1", "2", "3", "4"].map((rating, i) => (
                            <li key={i}>
                                <label htmlFor={rating}>
                                    <input 
                                        id={rating} 
                                        type="radio" 
                                        name="rating" 
                                        aria-label={rating} 
                                    />
                                    {rating}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;