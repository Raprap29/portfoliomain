"use client"

import React, {useState, useEffect, useRef} from "react";
import { ParallaxProvider} from "react-scroll-parallax";
import Navbar from "./components/navbar";
import dynamic from "next/dynamic"; 
import About from "./page/About";
import Services from "./page/Services";
import Home from "./page/Home";
import BackgroundEdu from "./page/BackgroundEdu";
import Tools from "./page/Tools";
import MyProjects from "./page/MyProjects";
import ContactUs from "./page/ContactUs";
import Footer from "./components/Footer";
import Certificate from "./page/Certificate";

const Main = () => {

  const [isMobile, setIsMobile] = useState<number>(window.innerWidth)


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      <ParallaxProvider>
          <div className="fixed top-0 w-full z-[99]">
            <Navbar />
          </div>
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="services">
            <Services isMobile={isMobile} />
          </div>
          <div id="edu" className="pb-[100px]">
            <BackgroundEdu isMobile={isMobile} />
          </div>
          <div id="tools">
            <Tools />
          </div>
          <div id="project" className="pb-[30px]">
            <MyProjects isMobile={isMobile} />
          </div>
          <div id="certificate" className="pb-[50px]">
            <Certificate />
          </div>
          <div id="contact">
            <div className="bg-[#fff] w-full h-[2px]"></div>
            <ContactUs />
          </div>
          <Footer />
        </ParallaxProvider>
    </React.Fragment>
  );
}

export default dynamic(() => Promise.resolve(Main), { ssr: false });