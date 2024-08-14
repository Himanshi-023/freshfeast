
import React from 'react';
import { assets } from '../assets/admin_assets/assets';
import { NavLink } from 'react-router-dom';

const Siderbar = () => {
  return (
    <div className=" md:w-64 h-screen p-4 mt-5 flex flex-col border-r border-gray-300 bg-white 
   md:flex-col md:mt-0 md:sticky md:left-0 md:top-0 md:h-full">
      
      <div className="flex flex-col space-y-4">
        <NavLink to="/add">
          <div className="flex items-center space-x-4 p-2 rounded-lg border cursor-pointer 
            hover:bg-green-50 hover:border-primary">
            <img src={assets.add_icon} alt="Add Items" className="w-6 h-6" />
            <p className="text-lg hidden md:block">Add Items</p>
          </div>
        </NavLink>

        <NavLink to="/list">
          <div className="flex items-center space-x-4 p-2 rounded-lg border cursor-pointer 
            hover:bg-green-50 hover:border-primary">
            <img src={assets.order_icon} alt="List Items" className="w-6 h-6" />
            <p className="text-lg hidden md:block">List Items</p>
          </div>
        </NavLink>

        <NavLink to="/orders">
          <div className="flex items-center space-x-4 p-2 rounded-lg border cursor-pointer 
            hover:bg-green-50 hover:border-primary">
            <img src={assets.order_icon} alt="Orders" className="w-6 h-6" />
            <p className="text-lg hidden md:block">Orders</p>
          </div>
        </NavLink>
      </div>

      <hr className="border-gray-300 mt-4" />
    </div>
  );
}

export default Siderbar;
