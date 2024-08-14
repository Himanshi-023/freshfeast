import React, { useContext } from 'react';
import { DataContext } from '../context/ItemsContext';
import Product from './Product';

const DisplayItems = ({ category }) => {
    const { food_list } = useContext(DataContext);

    // Log the category and food_list for debugging
    console.log("Category:", category);
    console.log("Food List:", food_list);

    // Filter items based on the selected category
    const filteredItems = category === "All" 
        ? food_list 
        : food_list.filter(item => item.category === category);

    // Log filteredItems to debug filtering
    console.log("Filtered Items:", filteredItems);

    return (
        <>
            <h1 className='text-xl sm:text-3xl font-semibold md:ml-32 ml-5 mt-5 mb-8'>
                Top Dishes For You
            </h1>
            <div className='flex flex-col items-center justify-center sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 space-y-10 sm:space-y-0 sm:gap-5 lg:px-24'>
                {filteredItems.map((item, index) => (
                    <Product key={index} item={item} />
                ))}
            </div>
        </>
    );
};

export default DisplayItems;
