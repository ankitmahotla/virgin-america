import React, { useState } from "react";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);
  return (
    <div className="w-screen h-[60px] z-10 bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 drop-shadow-lg">
      <div className="px-2 flex justify-between items-center h-full w-auto">
      <div className="lg:hidden md:hidden mr-4 text-white cursor-pointer" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        <div className="flex items-center gap-4 px-10">
          <img src={logo} className="h-10 w-auto" />
          <div>
            <ul className="hidden ml-8 p-4 md:flex gap-6 text-white text-xl font-semibold">
              <li><a href="#">BOOK</a></li>
              <li><a href="#">CHECK IN</a></li>
              <li><a href="#">MANAGE</a></li>
            </ul>
          </div>
          <div>
            <ul className="ml-4 p-4 hidden lg:flex gap-4 text-white">
              <li><a href="#">Deals</a></li>
              <li><a href="#">Flying With Us</a></li>
              <li><a href="#">Where We Fly</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Fees</a></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <h1 className="hidden lg:block text-2xl mr-5 font-light cursor-pointer text-white">
            elevate
          </h1>
          <ul className=" flex gap-6 text-white mr-3">
            <li className="hidden md:block mt-1 cursor-pointer">Sign Up</li>
            <li className="mt-1 cursor-pointer">Sign In</li>
          </ul>
          <div className="hidden md:block mr-4 text-white ml-3 mt-1 cursor-pointer lg:hidden" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-gradient-to-r from-fuchsia-500 via-red-600 text-white via-red-600 w-full px-8 py-3'}>
          <li className='border-b-2 border-slate-100 w-full'><a href="#" smooth={true} duration={500}>Deals</a></li>
          <li className='border-b-2 border-slate-100 w-full'><a href="#" smooth={true} offset={-200} duration={500}>Flying With Us</a></li>
          <li className='border-b-2 border-slate-100 w-full'><a href="#" smooth={true} offset={-200} duration={500}>Where We Fly</a></li>
          <li className='border-b-2 border-slate-100 w-full'><a href="#" smooth={true} offset={-200} duration={500}>Shop</a></li>
          <li className='border-b-2 border-slate-100 w-full'><a href="#" smooth={true} offset={-200} duration={500}>FAQ</a></li>
          <li className='w-full'><a href="#" smooth={true} offset={-50} duration={500}>Fees</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
