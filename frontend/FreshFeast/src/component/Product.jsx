 
import React, { useContext } from 'react';
import { assets } from '../assets/food del assets/frontend_assets/assets';
import { DataContext } from '../context/ItemsContext';

const Product = ({ item }) => {
    const { cartItems, addtoCart, removeFromCart  ,url} = useContext(DataContext);

    return (
        <div className='relative rounded-2xl flex flex-col mx-5 items-center justify-center sm:py-0 border border-yellow-300 shadow-sm'>
            <img className='rounded-t-2xl' src={url+"/images/"+item.image} alt={item.name} />
            <div className='absolute right-2 md:right-4 flex items-center'>
                {cartItems[item._id] ? (
                    <div className='flex space-x-2 bg-white mt-16 sm:mt-8 rounded-full py-2 px-2 sm:py-1 shadow-lg'>
                        <img
                            src={assets.add_icon_green}
                            alt='Add'
                            className='w-6 h-6 md:w-8 md:h-8 cursor-pointer'
                            onClick={() => addtoCart(item._id)}
                        />
                        <p className='font-semibold text-sm md:text-base'>{cartItems[item._id]}</p>
                        <img
                            src={assets.remove_icon_red}
                            alt='Remove'
                            className='w-6 h-6 md:w-8 md:h-8 cursor-pointer'
                            onClick={() => removeFromCart(item._id)}
                        />
                    </div>
                ) : (
                    <img
                        src={assets.add_icon_white}
                        className='w-8 md:w-8 md:h-8 rounded-full cursor-pointer mt-16 sm:mt-8 border border-gray-200'
                        alt='Add'
                        onClick={() => addtoCart(item._id)}
                    />
                )}
            </div>
            <div className='ml-2 space-y-1'>
                <hr className='mt-5 mx-3 border border-gray-300' />
                <div className='flex justify-between'>
                    <h1 className='font-bold'>{item.name}</h1>
                </div>
                <div>
                    <p className='text-xs text-gray-500'>{item.description}</p>
                </div>
                <div className='text-yellow-400 text-xl font-bold py-1'>${item.price}</div>
            </div>
        </div>
    );
};

export default Product;



// {
//     "1": 1
// }



// cartItems: { "1": 1 }