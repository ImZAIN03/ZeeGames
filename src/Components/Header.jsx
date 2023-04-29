import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/Images/logo.jpg";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
function Header() {
  const [toggle, setToggle] = useState(false);
  const {theme,setTheme}=useContext(ThemeContext)

  useEffect(()=> {
    console.log("Theme",theme);
  },[])
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div
        className="flex bg-gray-800 p-2 w-full 
      mx-3 rounded-full items-center"
      >
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme=='light' ? (
          <HiMoon
            className="text-[35px] bg-slate-300
        text-black p-1 rounded-full cursor-pointer"
            onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
          />
        ) : (
          <HiSun
            onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}
            className="text-[35px] bg-slate-300
        text-black p-1 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
