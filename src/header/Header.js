import React, { useContext, useEffect, useState } from "react";
import { BsSearch, BsFillMoonFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";

import logo from "../assets/images/ymcLogo.png";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center space-x-3 px-3">
      <img src={logo} alt="/" width={60} height={60} />

      <div className="flex  bg-slate-200 p-2 items-center space-x-2 w-full mx-5 rounded-full">
        <BsSearch />

        <input
          placeholder="Search  Latest tranding So stories... "
          className="bg-transparent  outline-none w-full"
        />
      </div>

      <div className="">
        {theme === "light" ? (
          <BsFillMoonFill
            size={35}
            className="bg-slate-200 text-gray-800 p-1 rounded-xl"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <LuSunMoon
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
            size={35}
            className="bg-slate-200 text-gray-800 p-1 rounded-xl"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
