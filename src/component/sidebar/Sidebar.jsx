import { useState } from "react";
import {Button} from "../index";
import {LiaTimesCircleSolid} from "../../assets/icons"; 


const Sidebar = () => {
    const [showFilter, setShowFilter] = useState(false);

    const handleFilterView = () => {
        setShowFilter(showFilter => !showFilter);
    }

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
                            min="4000" 
                            max="350000" 
                        />
                        <span className=" w-20 flex items-center justify-center self-end shadow-md p-2 font-medium text-cyan-400">4000</span>
                    </div>
                </div>
                <div className="p-2 pb-6 flex flex-col justify-center gap-2 border-b-2 border-slate-400">
                    <p className="font-medium">Sort by Price</p>
                    <ul className="flex flex-col gap-2">
                    {
                            ["Low to High", "High to Low"].map((value, i) => (
                                <li key={i} className="flex flex-row items-center gap-2">
                                    <input
                                        type="radio" 
                                        id={value}
                                        name="sort" 
                                        aria-label={value} 
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
                            ["category1","category2","category3", "category4"].map((category, i) => (
                                <li key={i} className="flex flex-row items-center gap-2">
                                    <input 
                                        id={category} 
                                        type="checkbox"
                                        name={category} 
                                        aria-label={category}
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
                                    />
                                    <label htmlFor={rating} className="mb-1">
                                        {rating}
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