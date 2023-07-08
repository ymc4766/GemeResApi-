import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isClose, setIsClose] = useState(false);

  const handleNav = () => setIsClose(!isClose);

  return (
    <div
      className="w-screen bg-[#545B77]  flex items-center justify-between
       text-slate-100
     px-3 py-4  z-30 fixed top-0"
    >
      <div className="flex items-center space-x-2">
        <div className="flex items-center sm:hidden" onClick={handleNav}>
          {isClose ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
        </div>
        <h3>I YMc </h3>
      </div>

      <ul className=" hidden sm:flex items-center space-x-3 cursor-pointer">
        <li className=" hover:underline ">About Ymc</li>
        <li>Contact</li>
        <li>Help</li>
        <li>Visions</li>
      </ul>

      <div className="flex items-center space-x-4">
        <button
          className="p-2 px-6 bg-slate-300 text-gray-900 hover:bg-violet-600
         hover:text-white rounded-lg"
        >
          Sign in
        </button>
        <button className=" bg-gray-800 text-slate-50 py-2 px-6 rounded-lg">
          register
        </button>
      </div>

      {/* // Menu Bar / mobile Menu  */}

      <ul
        className={
          isClose
            ? "hidden"
            : "fixed w-full md:hidden left-0 top-[68px] text-slate-50  bg-gray-800 text-gray-800"
        }
      >
        <li className="ml-6 p-3 uppercase border-b-1 border-gray-100 ">
          About Ymc
        </li>
        <li className="ml-6 p-3 ">Contact</li>
        <li className="ml-6 p-3 ">Help</li>
        <li className="ml-6 p-3">Visions</li>
      </ul>
    </div>
  );
};

export default Navbar;
