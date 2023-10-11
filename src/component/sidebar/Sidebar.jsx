import {Button} from "../index";
const Sidebar = () => {
    return (
        <aside className="max-w-xs min-w-[18rem] w-2/6 h-full shadow-xl flex flex-col gap-4 px-4 pt-8 pb-20 text-gray-700 fixed overflow-scroll sidebar">
            <div className="p-1 flex justify-between border-b-2 border-slate-400">
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
    )
}

export default Sidebar;