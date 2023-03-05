import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Hero from "./components/Hero";
import Features from "./components/Features";
import useWindowSize from "./hooks/useWindowSize";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default App;
