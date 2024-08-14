

import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { DataContext } from "../context/ItemsContext";
import { assets } from "../assets/food del assets/frontend_assets/assets";

const Header = ({ setShowlogin }) => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const { totalAmount, token, setToken } = useContext(DataContext);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="bg-gray-200/70 cursor-pointer">
      <div className="flex justify-between items-center sm:mx-10 py-6 mx-4">
        <a href="/" className="flex space-x-1 flex-grow">
          <p className="text-sm md:text-2xl font-semibold">
            fresh<span className="text-primary hover:text-ternary">feast</span>
          </p>
          <p className="flex items-center scale-150 text-primary">
            <MdFoodBank className="scale-150" />
          </p>
        </a>

        <div className="hidden sm:flex flex-grow">
          <Navbar />
        </div>

        <div className="flex items-center space-x-8 md:px-12">
          <div className="hidden sm:flex">
            {!token ? (
              <button
                className="px-3 py-1 border border-green-500 hover:bg-ternary rounded-md md:py-1.5 md:px-5 transition-colors duration-300"
                onClick={() => setShowlogin(true)}
              >
                Login
              </button>
            ) : (
              <div className="relative">
                <img
                  src={assets.profile_icon}
                  alt="Profile"
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={handleDropdownToggle}
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-gray-100 border border-gray-300 rounded-md shadow-lg z-50"> {/* Added z-50 */}
                    <NavLink
                      to="/Order"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Orders
                    </NavLink>
                    <button
                      className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="sm:hidden">
            <button onClick={handleToggleMenu}>
              {open ? <CgClose size={24} /> : <CgMenu size={24} />}
            </button>
          </div>
          <div className="hidden sm:block">
            <NavLink to="/Cart" className="relative">
              <FaShoppingBag className="hover:text-ternary scale-150" />
              {totalAmount() === 0 ? null : (
                <span className="bg-primary absolute left-3 py-1.5 bottom-2 scale-100 text-xs rounded-2xl px-2 text-white">
                .
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      {open && (
        <div className="sm:hidden flex flex-col items-center py-5 bg-gray-100">
          <ul className="space-y-6 flex flex-col items-center font-medium">
            <li className="hover:text-primary">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink to="/About">ABOUT</NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink to="/Products">PRODUCTS</NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink to="/Contact">CONTACT</NavLink>
            </li>
            <button
              className="border border-primary hover:bg-ternary rounded-md py-1.5 px-5"
              onClick={() => setShowlogin(true)}
            >
              LOG IN
            </button>
            <li className="relative">
              <NavLink to="/Cart" className="relative">
                <FaShoppingBag className="hover:text-ternary scale-150" />
                {totalAmount() === 0 ? null : (
                  <span className="bg-primary absolute left-3 py-1.5 bottom-2 scale-100 text-xs rounded-2xl px-2 text-white">
                    {totalAmount()}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
