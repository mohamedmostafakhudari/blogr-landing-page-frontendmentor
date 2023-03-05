import React from "react";
import FooterCategory from "./FooterCategory";
const footerCategories = [
  {
    title: "Product",
    subTitles: [
      "Overview",
      "Pricing",
      "Marketplace",
      "Features",
      "Integrations",
    ],
  },
  {
    title: "Company",
    subTitles: ["About", "Team", "Blog", "Careers"],
  },
  {
    title: "Connect",
    subTitles: ["Contact", "Newsletter", "LinkedIn"],
  },
];
export default function FooterCategories() {
  return (
    <ul className="flex justify-around flex-col gap-8 text-center md:flex-row md:gap-0 md:text-left">
      {footerCategories.map(({ title, subTitles }) => {
        return (
          <FooterCategory key={title} title={title} subTitles={subTitles} />
        );
      })}
    </ul>
  );
}
