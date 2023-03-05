import React from "react";
import FooterCategories from "./FooterCategories";
export default function Footer() {
  return (
    <footer className="bg-v-d-black-blue rounded-tr-[100px] py-16 relative">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:items-start">
        <div className="md:grid md:justify-center md:min-w-[400px]">
          <div className="">
            <img src="./assets/images/logo.svg" alt="logo" />
          </div>
        </div>
        <div className="mt-16 md:mt-0 md:flex-1">
          <FooterCategories />
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0">
        <p className="text-white w-fit mx-auto">&copy; Mohamed Mostafa</p>
      </div>
    </footer>
  );
}
