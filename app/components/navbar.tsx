"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";

const Navbar = () => {

    const useBoxRef = useRef<HTMLButtonElement>(null);

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const [showbox, setshowbox] = useState<boolean>(false);

    const toggleShowBox = () => {
        setshowbox(!showbox);
    }

    useEffect(() => {
        if (showbox) {
          const handleClickOutside = (event: MouseEvent): void => {
            if (useBoxRef.current && !useBoxRef.current.contains(event.target as Node)) {
                setshowbox(false);
            }
          };
    
          document.addEventListener('click', handleClickOutside);
    
          return () => {
            document.removeEventListener('click', handleClickOutside);
          }; 
        }
      }, [showbox]);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <React.Fragment>
            <AnimatePresence>
                {visible && (
                    <motion.nav 
                    initial={{
                        opacity: 0,
                        y: "-100%",
                    }}
    
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
    
                    transition={{
                        type: "spring",
                        bounce: 0.4,
                        duration: 0.80,
                    }}
    
                    exit={{
                        opacity: 0,
                        y: "-100%",
                    }}
    
                    className={`pt-3 transition-all duration-600 border border-b-1 border-0 ease-in-out text-[#000] py-[10px]`}>
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex justify-between h-16">
                                <div className="justify-between w-full flex max-[720px]:px-[10px]">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img className="block lg:hidden h-10 w-auto" src="/image/Logo.png" alt="Logo" />
                                        <img className="hidden lg:block h-10 w-auto" src="/image/Logo.png" alt="Logo" />
                                    </div>
                                    <button ref={useBoxRef} type="button" onClick={toggleShowBox} className="max-[768px]:bg-[#fff] rounded-[10px] px-5 flex-shrink-0 flex items-center">
                                        <FaBars className="hidden max-[720px]:block" color="#000" size={30} />
                                    </button>
                                    <div className="hidden bg-[#fff] shadow-3dshadow shadow-[0px_8px_5px_0px_rgba(255,255,255,.75)] border-solid border-[3px] border border-[#000] px-[30px] rounded-[1000px] sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                        <Link scroll={true} href="#about" className="border-black text-black transition-all duration-300 ease-in-out inline-flex items-center px-1 pt-1 text-sm font-medium hover:border-b-2 transition-opacity duration-300 ease-in-out hover:opacity-50">
                                            <p className="font-bold">About Me</p>
                                        </Link>
                                        <Link scroll={true} href="#tools" className="border-black text-black transition-all duration-300 ease-in-out inline-flex items-center px-1 pt-1 text-sm font-medium hover:border-b-2 transition-opacity duration-300 ease-in-out hover:opacity-50">
                                        <p className="font-bold">My Tools</p>
                                        </Link>
                                        <Link scroll={true} href="#project" className="border-black text-black transition-all duration-300 ease-in-out inline-flex items-center px-1 pt-1 text-sm font-medium hover:border-b-2 transition-opacity duration-300 ease-in-out hover:opacity-50">
                                            <p className="font-bold">My Projects</p>
                                        </Link>
                                    </div>
                                    <div className="hidden h-full flex max-[768px]:hidden items-center sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                        <a href="#contact" className={`bg-[#fff] transition-all duration-300 ease-in-out rounded-[5px] h-[45px] gap-x-[10px] border border-solid border-[#000] text-black inline-flex items-center px-4 text-sm font-medium transition-opacity duration-300 ease-in-out hover:opacity-50`}>
                                            <FaRegUserCircle color={`#000`} size={25} />
                                            <p className={`font-bold text-black`}>Contact Me</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.nav>
                )}
             </AnimatePresence>
             <AnimatePresence>
                {showbox && (
                    <motion.div 
                    initial = {{
                        opacity: 0,
                        x: "100%"
                    }}
                    animate = {{
                        opacity: 1,
                        x: 0
                    }}

                    exit={{ 
                        opacity: 0,
                        x: "100%"
                    }}

                    transition={{
                        type: "spring",
                        bounce: 0.4,
                        duration: 2
                    }}

                    className="max-[768px]:block hidden fixed top-[95px] bg-[#000] h-[260px] border border-solid border-[#fff] w-[230px] border-[5px] right-[25px] z-[99]">
                        <div className="p-4 flex flex-col gap-y-[15px]">
                            <a href="#about" className={``}>
                                <p className="text-[24px]">About</p>
                            </a>
                            <a href="#tools" className={``}>
                                <p className="text-[24px]">My Tools</p>
                            </a>
                            <a href="#project" className={``}>
                                <p className="text-[24px]">My Projects</p>
                            </a>
                        </div>
                        <div className="bg-[#fff] w-full h-[3px]"></div>
                        <div className="flex items-center justify-center mt-4">
                            <a href="#contact" className={`bg-[green] transition-all duration-300 ease-in-out rounded-[5px] h-[45px] gap-x-[10px] border border-solid border-[#000] text-black inline-flex items-center px-4 text-sm font-medium transition-opacity duration-300 ease-in-out hover:opacity-50`}>
                                <FaRegUserCircle color={`#fff`} size={25} />
                                <p className={`text-[#fff] font-bold`}>Contact Me</p>
                            </a>
                        </div>
                    </motion.div>
                )} 
             </AnimatePresence>
        </React.Fragment>
    )
}

export default Navbar;