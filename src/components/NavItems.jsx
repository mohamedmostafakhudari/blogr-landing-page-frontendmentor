import React from "react";
import { useState } from "react";
import NavItem from "./NavItem";
const initialNavLinks = [
  {
    title: "Product",
    subTitles: [
      "Overview",
      "Pricing",
      "Marketplace",
      "Features",
      "Integrations",
    ],
    active: false,
  },
  {
    title: "Company",
    subTitles: ["About", "Team", "Blog", "Careers"],
    active: false,
  },
  {
    title: "Connect",
    subTitles: ["Contact", "Newsletter", "LinkedIn"],
    active: false,
  },
];
export default function NavItems() {
  const [navLinks, setNavLinks] = useState(initialNavLinks);
  function handleActive(title) {
    const nextNavLinks = navLinks.map((navLink) => {
      if (navLink.title === title) {
        return {
          ...navLink,
          active: !navLink.active,
        };
      } else {
        return {
          ...navLink,
          active: false,
        };
      }
    });
    setNavLinks(nextNavLinks);
  }
  function handleClickOutside() {
    setNavLinks(initialNavLinks);
  }

  return (
    <>
      {/* desktop */}
      <ul className="hidden gap-10 items-center md:flex">
        {navLinks.map(({ title, subTitles, active }) => (
          <NavItem
            key={title}
            title={title}
            subTitles={subTitles}
            active={active}
            onActive={() => handleActive(title)}
            onClickOutside={handleClickOutside}
          />
        ))}
      </ul>
      {/* mobile */}
      <ul className="flex flex-col md:hidden">
        {navLinks.map(({ title, subTitles, active }) => (
          <NavItem
            key={title}
            title={title}
            subTitles={subTitles}
            active={active}
            onActive={() => handleActive(title)}
          />
        ))}
      </ul>
    </>
  );
}
