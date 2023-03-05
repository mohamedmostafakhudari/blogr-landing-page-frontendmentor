import React from "react";
import Nav from "./Nav";
import useWindowSize from "../hooks/useWindowSize";
export default function Hero() {
  const { width } = useWindowSize();
  const heroBackground = {
    backgroundImage: `url(./assets/images/${
      width < 768 ? "bg-pattern-intro-mobile" : "bg-pattern-intro-desktop"
    }.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${width < 768 ? "40% 40%" : "30% 50%"}`,
    backgroundSize: `${width < 768 ? "400%" : "200%"}`,
  };
  return (
    <header className="bg-gradient-to-b from-introGrad-1 to-introGrad-2 min-h-[calc(100vh-5.5rem)] rounded-bl-[100px] relative md:bg-gradient-to-r">
      <div
        className="absolute inset-0 rounded-bl-[100px] opacity-70"
        style={heroBackground}
      ></div>
      <div className="absolute inset-0 grid place-items-center left-8 right-8 mobileOrientationLandScape:translate-y-12">
        <div className="text-white text-center font-overPass">
          <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
            A modern <br className="md:hidden" />
            publishing platform
          </h1>
          <p className="mt-4 md:text-lg lg:text-xl">
            Grow your audience and build your <br className="md:hidden" />{" "}
            online brand
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 notSelectable">
            <button className="bg-white text-introGrad-2/90 font-bold rounded-[25px] duration-200 ease-in-out notSelectable hover:bg-opacity-[15%] hover:text-white">
              <a href="#" className="block p-3 px-5 notSelectable">
                Start for Free
              </a>
            </button>
            <button className="border font-bold rounded-[25px] duration-200 ease-in-out notSelectable hover:bg-white hover:text-introGrad-2/90">
              <a href="#" className="block p-3 px-6 notSelectable">
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  );
}
