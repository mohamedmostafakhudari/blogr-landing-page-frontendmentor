import React from "react";
import NavItems from "./NavItems";
export default function Menu({ active }) {
  return (
    <div
      className={`${
        active ? "opacity-100 visible" : "opacity-0 invisible"
      } absolute left-5 right-5 font-overPass bg-white top-20 z-10 py-8 px-6 rounded duration-300 ease-in-out md:hidden`}
    >
      <NavItems />
      <hr className="my-8" />
      <div className="flex flex-col gap-6 font-ubuntu">
        <button className="">
          <a href="#">Login</a>
        </button>
        <button className="text-white bg-gradient-to-r from-introGrad-1 to-introGrad-2 w-fit mx-auto p-3 px-8 rounded-[25px] font-bold">
          <a href="#">Sign Up</a>
        </button>
      </div>
    </div>
  );
}
