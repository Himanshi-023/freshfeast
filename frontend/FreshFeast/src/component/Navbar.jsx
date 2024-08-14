import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = ({setShowlogin}) => {
  return (
    <div className="flex items-center space-x-10">
      <a href="/" className="flex space-x-1">
        <p className="text-sm md:text-xl font-semibold sm:hidden">
          fresh <span className="text-primary hover:text-ternary">feast</span>
        </p>
      </a>

      <ul className="hidden sm:flex items-center space-x-10 text-xs lg:text-base font-medium">
        <li className="hover:text-yellow-500">
          <NavLink to="/">home</NavLink>
        </li>
        <li className="hover:text-yellow-500">
          <NavLink to="/about">about us</NavLink>
        </li>
        <li className="hover:text-yellow-500">
          <NavLink to="/mobileapp">mobile app</NavLink>
        </li>
        <li className="hover:text-yellow-500">
          <NavLink to="/contact">contact us</NavLink>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;
