import React from "react";
import { useRef, useEffect } from "react";
export default function NavItem({
  title,
  subTitles,
  active,
  onActive,
  onClickOutside,
}) {
  const ref = useRef(null);
  // handle click outside navLink
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.currentTarget)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <>
      {/* desktop */}
      <li
        onClick={onActive}
        ref={ref}
        className={`relative group duration-200 ease-in-out hidden md:block ${
          active ? "text-white" : "text-grayishBlue"
        } hover:text-white`}
      >
        <div className="flex items-center gap-2 duration-200 ease-in-out cursor-pointer">
          <span className="relative select-none">
            {title}
            <div className="absolute h-[2px] bg-white w-full bottom-[4px] bg-opacity-0 duration-200 ease-in-out group-hover:bg-opacity-100"></div>
          </span>
          <div className={`${active && "rotate-180"}`}>
            <img src={`./assets/images/icon-arrow-light.svg`} alt="" />
          </div>
        </div>
        <ul
          className={`bg-white text-v-d-grayishBlue mt-3 rounded-lg absolute py-6 space-y-3 right-1/2 translate-x-1/2 duration-200 ease-in-out z-10 ${
            active
              ? "translate-y-2 opacity-100 pointer-events-auto"
              : "-translate-y-20 opacity-0 pointer-events-none"
          }`}
        >
          {subTitles.map((subTitle) => {
            return (
              <li
                key={subTitle}
                className="duration-200 ease-in-out cursor-pointer px-6 pr-12 font-semibold select-none hover:text-v-d-black-blue"
              >
                {subTitle}
              </li>
            );
          })}
        </ul>
      </li>
      {/* mobile */}
      <li onClick={onActive} className="relative md:hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 justify-center bg-white py-3">
            <span
              className={`duration-200 ease-in-out text-v-d-black-blue ${
                active && "text-v-d-grayishBlue opacity-70"
              }`}
            >
              {title}
            </span>
            <div
              className={`${active && "rotate-180"}`}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(72%) sepia(66%) saturate(3428%) hue-rotate(318deg) brightness(107%) contrast(101%)",
              }}
            >
              <img src={`./assets/images/icon-arrow-light.svg`} alt="" />
            </div>
          </div>
        </div>
        <ul
          className={`bg-grayishBlue bg-opacity-10 text-center space-y-3 py-6 duration-200 ease-in-out z-0 ${
            active
              ? "relative opacity-100 translate-y-2"
              : "absolute -translate-y-32 opacity-0 inset-x-0 pointer-events-none"
          }`}
        >
          {subTitles.map((subTitle) => {
            return (
              <li key={subTitle} className="text-v-d-grayishBlue">
                {subTitle}
              </li>
            );
          })}
        </ul>
      </li>
    </>
  );
}
