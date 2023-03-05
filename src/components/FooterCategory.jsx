import React from "react";

export default function FooterCategory({ title, subTitles }) {
  return (
    <li>
      <h6 className="text-white">{title}</h6>
      <ul className="mt-5 flex flex-col items-center space-y-2 md:items-start">
        {subTitles.map((title) => (
          <li
            key={title}
            className="text-grayishBlue relative w-fit group cursor-pointer"
          >
            <div className="absolute bg-grayishBlue h-[2px] inset-x-0 left-0 bottom-[2px] opacity-0 duration-200 ease-in-out group-hover:opacity-100"></div>
            {title}
          </li>
        ))}
      </ul>
    </li>
  );
}
