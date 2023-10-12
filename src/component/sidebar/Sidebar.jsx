import { useState } from "react";
import {Button} from "../index";
import {LiaTimesCircleSolid} from "../../assets/icons"; 
import { useDispatch, useSelector } from "react-redux";
import { 
    setSortBy, 
    setPriceRange, 
    setRatingValue,
    addSelectedCategory,
    removeSelectedCategory ,
} from "../../component/sidebar/productFilterSlice";


const Sidebar = () => {
    const {categoryData} = useSelector(store => store?.products) 
    const {
         
        sortBy,
        priceRange,
        selectedCategories,
        ratingValue
    } = useSelector(store => store?.productFilter);
    const [showFilter, setShowFilter] = useState(false);
    const dispatch = useDispatch();

    const handleFilterView = () => {
        setShowFilter(showFilter => !showFilter);
    }

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
          dispatch(removeSelectedCategory(category));
        } else {
          dispatch(addSelectedCategory(category));
        }
    };

    return (
        <div>
            <div className={`p-4 ${!showFilter ? "flex" : "hidden"} sm:hidden w-full bg-white fixed shadow-2xl border-t-2  border-slate-400 bottom-0`}>
                    <Button 
                        className={`font-medium text-2xl`} 
                        text={"Filters"} 
                        onClick={() =>handleFilterView()}
                    />
            </div>
            <aside 
                className={
                    `${showFilter ? "flex" : "hidden"} w-full mt-10 sm:flex sm:mt-0 sm:max-w-xs sm:min-w-[18rem] sm:w-2/6 h-full shadow-xl flex-col gap-4 px-4 pt-2 sm:pt-8 pb-20 text-gray-700 fixed overflow-scroll sidebar bg-white border-t-2 border-gray-200 sm:border-0`
                }
            >   
                <div className={`${showFilter ? "flex" : "hidden"} justify-end px-4`}>
                    <Button 
                        className={`font-medium text-4xl hover:text-gray-400  sm:hidden`}  
                        icon={ <LiaTimesCircleSolid /> }
                        onClick={() =>handleFilterView()}
                    />
                </div>
                <div className={`p-1 flex justify-between border-b-2 border-slate-400`}>
                    <p className="font-medium text-2xl">Filters</p>
                    <Button 
                        className={"text-gray hover:bg-gray-500 hover:text-white rounded-md p-1"} 
                        text={"Clear All"}
                    />
                </div>
                <div className="p-2 pb-6 flex flex-col justify-center gap-2 border-b-2 border-slate-400">
                    <p className="font-medium">Price Range</p>
                    <div className="flex flex-col gap-2">
                        <input 
                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            id="priceRange"
                            type="range" 
                            min="0" 
                            max="999" 
                            value={priceRange} 
                            onChange={(e) => dispatch(setPriceRange(e.target.value))}
                        />
                        <span className=" w-20 flex items-center justify-center self-end shadow-md p-2 font-medium text-cyan-400">
                            {priceRange}
                        </span>
                    </div>
                </div>
                <div className="p-2 pb-6 flex flex-col justify-center gap-2 border-b-2 border-slate-400">
                    <p className="font-medium">Sort by Price</p>
                    <ul className="flex flex-col gap-2">
                    {
                            ["Low-to-High", "High-to-Low"].map((value, i) => (
                                <li key={i} className="flex flex-row items-center gap-2">
                                    <input
                                        type="radio" 
                                        id={value}
                                        name="sort" 
                                        aria-label={value} 
                                        onChange={() => dispatch(setSortBy(value))} 
                                        checked={sortBy && sortBy === value}

                                    />
                                    <label className="mb-1" htmlFor={value}>{value}</label>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="p-2 pb-6 flex flex-col justify-center gap-2 border-b-2 border-slate-400">
                    <p className="font-medium">Category</p>
                    <ul className="flex flex-col gap-2">
                        {
                            categoryData.map((category, i) => (
                                <li key={i} className="flex flex-row items-center gap-2">
                                    <input 
                                        id={category} 
                                        type="checkbox"
                                        name={category} 
                                        aria-label={category}
                                        onChange={() => handleCategoryChange(category)}
                                        checked={selectedCategories.includes(category)}
                                    />
                                    <label htmlFor={category} className="mb-1">
                                        {category}
                                    </label>
                                </li>
                            ))
                        }
                    </ul>  
                </div>
                <div className="p-2 pb-6 flex flex-col justify-center gap-2 border-b-2 border-slate-400">
                    <p className="font-medium">Ratings</p>
                    <ul className="flex flex-col gap-2">
                        {
                            ["1", "2", "3", "4"].map((rating, i) => (
                                <li key={i} className="flex flex-row items-center gap-2">
                                    <input 
                                        id={rating} 
                                        type="radio" 
                                        name="rating" 
                                        aria-label={rating}
                                        onChange={() => dispatch(setRatingValue(rating))}
                                        checked={ratingValue === rating} 
                                    />
                                    <label htmlFor={rating} className="mb-1">
                                        {`${rating} or more`}
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar;