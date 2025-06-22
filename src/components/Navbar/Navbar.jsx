

import React from "react";
import Profile from "../../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className=" py-4 lg:py-6">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-3xl lg:text-4xl font-semibold">
            TASTY<span className="text-primary">ERA</span>
          </p>
        </div>
        {/* Menu section */}
        <div className="flex justify-center items-center gap-10 cursor-pointer ">
          <ul className="gap-8 hidden sm:flex cursor-pointer">
            <li className="hover:border-b-2 border-primary uppercase ">Home</li>
            <li className="hover:border-b-2 border-primary uppercase">Menu</li>
            <li className="hover:border-b-2 border-primary uppercase">About</li>
             <li className="hover:border-b-2 border-primary uppercase">Contact</li>
          </ul>
          {/* login section */}
          <div className="flex gap-4 items-center">
            <img src={Profile} alt="" className="w-10 rounded-full " />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
