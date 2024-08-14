import React from 'react';

const Hero = () => {
  return (
    <div className='relative flex flex-col items-center justify-center mt-10 z-10'>
      <div className='bg-primary w-[95%] sm:w-[85%] flex items-center justify-center rounded-3xl shadow-2xl py-3 sm:py-0'>
        <img src="heroimage.png" className='rounded-3xl lg:h-[550px] md:ml-56' alt="" />
      </div>

      <div className='absolute md:left-40 sm:ml-6 space-y-1 md:space-y-4'>
        <h1 className='font-bold text-gray-900 text-xl md:text-5xl sm:text-4xl xl:text-7xl lg:text-6xl'>order</h1>
        <h1 className='font-bold text-gray-900 text-xl md:text-5xl sm:text-4xl xl:text-7xl lg:text-6xl'>your Favourite</h1>
        <h1 className='font-bold text-gray-900 text-xl md:text-5xl sm:text-4xl xl:text-7xl lg:text-6xl'>
          Food here
        </h1>
        <p className='w-[300px] text-xs md:text-sm sm:text-gray-800 sm:w-[550px] text-white'>
          Welcome to freshfeast where delicious meets convenience. Explore a wide range of mouth-watering dishes, from local favorites to exotic cuisines, all delivered right to your door.
        </p>
        <div className='flex items-center'>
          <button className='bg-yellow-300 font-medium hover:bg-yellow-400 sm:text-sm text-xs rounded-xl py-2 px-3 md:py-3.5 md:px-10'>
            View menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
