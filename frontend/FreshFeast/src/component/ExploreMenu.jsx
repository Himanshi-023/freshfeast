import React from 'react';
import { menu_list } from '../assets/food del assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <section className='mt-8'>
            <div className='lg:ml-32 sm:ml-12 px-4 sm:px-0 space-y-3'>
                <h1 className='text-xl sm:text-3xl font-semibold'>Explore Our Menu</h1>
                <p className='sm:w-[800px] text-xs sm:text-sm text-gray-700'>
                    Indulge in a world of flavors with our diverse menu. From mouth-watering starters to delectable desserts, find your next favorite dish with just a click. Discover fresh, flavorful options tailored to every taste and craving.
                </p>
            </div>
            <div className='grid grid-cols-4 gap-2 mt-5 px-4 sm:px-0 md:grid-cols-1 md:flex md:items-center md:justify-center md:overflow-x-auto'>
                {menu_list.map((cur) => (
                    <div
                        key={cur.menu_name}
                        className='flex flex-col items-center justify-center lg:mx-4 py-2'
                        onClick={() => setCategory(prev => prev === cur.menu_name ? "All" : cur.menu_name)}
                    >
                        <img
                            src={cur.menu_image}
                            className='shadow-lg lg:w-28 lg:h-28 rounded-full border-4 border-transparent transition-transform duration-300 ease-in-out hover:border-yellow-300 hover:scale-110'
                            alt={cur.menu_name}
                        />
                        <p className='text-gray-700 text-xs mt-2 font-semibold'>{cur.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr className='sm:mt-10 mt-4 border-gray-300 border border-1 mx-5 md:mx-32' />
        </section>
    );
};

export default ExploreMenu;
