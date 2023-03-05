import React from "react";
import { useState } from "react";
import Menu from "./Menu";
import NavItems from "./NavItems";
export default function Nav() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <nav className="font-overPass py-10 pt-12">
      <div className="container mx-auto flex items-center justify-between px-6 relative md:justify-start">
        <div className="md:min-w-[150px]">
          <img src="./assets/images/logo.svg" alt="logo" />
        </div>
        <div
          onClick={() => setActiveMenu((prev) => !prev)}
          className="select-none md:hidden"
        >
          {activeMenu && (
            <img src="./assets/images/icon-close.svg" alt="close" />
          )}
          {!activeMenu && (
            <img src="./assets/images/icon-hamburger.svg" alt="menu" />
          )}
        </div>
        <div className="hidden md:flex font-ubuntu font-bold">
          <NavItems />
        </div>
        <div className="ml-auto gap-8 hidden text-white font-ubuntu font-bold md:flex">
          <button>
            <a href="#">Login</a>
          </button>
          <button className="text-introGrad-2/75 bg-white p-3 px-10 rounded-[25px] duration-200 ease-in-out whitespace-nowrap  hover:bg-opacity-20 hover:text-white">
            <a href="#">Sign Up</a>
          </button>
        </div>
        <Menu active={activeMenu} />
      </div>
    </nav>
  );
}
