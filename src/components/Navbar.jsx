import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import search from "../../assets/search.svg";
import cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "underline underline-offset-4 decoration-2 decoration-gray-500"
      : " hover:text-blue-500";
  };

  return (
    <>
   
    <nav className="bg-white shadow-md w-full fixed top-0 z-10">
    <div className="bg-black h-10 text-white flex justify-around items-center">
        <div>Summer Sale for all Swim Suits And Free Express Delivery - OFF 50% <a href="">Shop Now</a></div>
        <select name="lang" id="lang" className="bg-black text-white border-none outline-none">
            <option value="Eng">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
        </select>
    </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold ">Exclusive</span>
            </Link>
          </div>
          <div className=" flex gap-10 font-bold">
            <div className="-mr-2 flex items-center">
              <Link
                to="/home"
                className={`px-3 py-2 rounded-md text-sm ${isActive("/home")}`}
              >
                Home
              </Link>
            </div>
            <div className="-mr-2 flex items-center ">
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm ${isActive("/about")}`}
              >
                About
              </Link>
            </div>
            <div className="-mr-2 flex items-center ">
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm ${isActive(
                  "/contact"
                )}`}
              >
                Contact
              </Link>
            </div>
            <div className="-mr-2 flex items-center ">
              <Link
                to="/signup"
                className={`px-3 py-2 rounded-md text-sm ${isActive(
                  "/signup"
                )}`}
              >
                Sign up
              </Link>

            </div>
            <div className="-mr-2 flex items-center ">
                <Link
                to="/login"
                className={`px-3 py-2 rounded-md text-sm ${isActive(
                  "/login"
                )}`}
              >
                Login
              </Link>
            </div>
          </div>

          
         <div className="flex items-center gap-3">
         <div className="hidden md:flex items-center space-x-4 bg-gray-100 rounded-md w-72 h-12 px-5">
           <input type="text" placeholder="What are you looking for ?" className="bg-gray-100 border-none outline-none px-2 py-1 rounded-md w-full" />
           <img src={search} alt="" className="w-5 h-5 cursor-pointer"/>
          </div>
          <div className="flex items-center gap-2">
          <img src={heart} alt="" className="w-8 h-8 cursor-pointer"/>
          <Link 
          to='/cart'
          >
          <img src={cart} alt="" className="w-8 h-8 cursor-pointer"/>
          </Link>
          </div>
        </div>
         </div>
      </div>

     
    </nav>
    </>

  );
};

export default Navbar;
