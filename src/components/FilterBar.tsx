'use client';
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function FilterBar() {

    const searchParams = useSearchParams();
    const queries = {
        search: searchParams.get("search"),
        category: searchParams.get("category"),
        min_price: searchParams.get("min_price"),
        max_price: searchParams.get("max_price"),
    }

    const [formData, setFormData] = useState({
        search: queries.search ? queries.search : '',
        category: queries.category ? queries.category : '',
        min_price: queries.min_price ? queries.min_price : '',
        max_price: queries.max_price ? queries.max_price : '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClear = () => {
        setFormData({
            search: '',
            category: '', // Clear the selected category
            min_price: '',
            max_price: '',
        });
    };

    return (
        <div className="flex flex-col fixed w-full top-16">

            <div></div>


            <form action="" method="get" id="drawer-example" className="z-40 w-full max-w-xs p-4 bg-white dark:bg-gray-800 border rounded-lg">


                <div className="flex flex-col justify-evenly flex-1">
                    <div className="space-y-5">

                        <div className="space-y-2">
                            <h6 className="text-base font-medium text-black dark:text-white">
                                Search
                            </h6>

                            <ul className="grid w-full gap-2">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" name="search" value={formData.search} onChange={handleChange} id="default-search" className="block w-full p-4 pl-10 text-sm border rounded-lg   bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Search for Products..." />
                                </div>
                            </ul>

                        </div>

                        <div className="space-y-2">
                            <h6 className="text-base font-medium text-black dark:text-white">
                                Categories
                            </h6>

                            <ul className="grid w-full gap-2">
                                <li>
                                    <input type="radio" onChange={handleChange} checked={formData.category === ""} id="all" name="category" value="" className="hidden peer" />
                                    <label htmlFor="all" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div className="block">
                                            <div className="w-full text-md font-semibold">All</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" onChange={handleChange} checked={formData.category === "men's clothing"} id="men_clothing" name="category" value="men's clothing" className="hidden peer" />
                                    <label htmlFor="men_clothing" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div className="block">
                                            <div className="w-full text-md font-semibold">Men's Clothing</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" onChange={handleChange} checked={formData.category === "women's clothing"} id="women_clothing" name="category" value="women's clothing" className="hidden peer" />
                                    <label htmlFor="women_clothing" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div className="block">
                                            <div className="w-full text-md font-semibold">Women's Clothing</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" onChange={handleChange} checked={formData.category === 'jewelery'} id="jewelery" name="category" value="jewelery" className="hidden peer" />
                                    <label htmlFor="jewelery" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div className="block">
                                            <div className="w-full text-md font-semibold">Jewelery</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" onChange={handleChange} checked={formData.category === 'electronics'} id="electronics" name="category" value="electronics" className="hidden peer" />
                                    <label htmlFor="electronics" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div className="block">
                                            <div className="w-full text-md font-semibold">Electronics</div>
                                        </div>
                                    </label>
                                </li>
                            </ul>



                        </div>


                        <div className="space-y-2">
                            <h6 className="text-base font-medium text-black dark:text-white">
                                Prices
                            </h6>
                            <div className="flex items-center justify-between col-span-2 space-x-3">
                                <div className="w-full">
                                    <label htmlFor="min-experience-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        From
                                    </label>

                                    <input type="number" onChange={handleChange} name="min_price" id="price-from" value={formData.min_price} min="0" max="10000"
                                        className=" border outline-none text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="0" />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="price-to"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        To
                                    </label>

                                    <input type="number" onChange={handleChange} name="max_price" id="max-experience-input" min="0" value={formData.max_price} max="10000"
                                        className=" border outline-none text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                        placeholder="0" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=" flex justify-center w-full pb-4 mt-6 space-x-2">
                        <Link href={{
                            pathname: '/category', // Replace with the actual path to your page
                            query: {
                                search: formData.search,
                                category: formData.category,
                                min_price: formData.min_price,
                                max_price: formData.max_price,
                            },
                        }}
                            className="w-full px-5 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 border border-gray-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
                            Apply filters
                        </Link>

                        <button onClick={handleClear}
                            className="w-full px-5 py-2 text-sm font-medium text-gray-900 bg-white border rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Clear all
                        </button>
                    </div>
                </div>
            </form>

            
        </div>
    )
};










// <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3>


