"use client";

import React from "react";
import { Anton } from "next/font/google";
import Image from "next/image";
import { Parallax, useParallax } from 'react-scroll-parallax';
import { motion, Variants } from 'framer-motion';

const AntonFont = Anton({weight: "400", subsets: ["latin"]})

const About = () => {

  
    const parallax = useParallax<HTMLDivElement>({
        scale: [0, 1],
      });

    const cardVariants: Variants = {
        offscreen: {
          y: 400
        },
        onscreen: {
          y: 0,
          rotate: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

      const slideImageVariants: Variants = {
        offscreen: {
          opacity: 0,
          y: 500,
        },
        onscreen: {
          rotate: 0,
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2
          }
        }
      }

    const headerVariant: Variants = {
        offscreen: {
          x: 1000
        },
        onscreen: {
          x: 0,
          rotate: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };
    return(
        <React.Fragment>
            <div className="relative container mx-auto max-w-[960px] max-[768px]:h-full h-[900px]">
                <div ref={parallax.ref} className="absolute top-[15%] max-[768px]:top-[30%] transform translate-y-[-50%] translate-x-[-50%] z-[-2]">
                    <Image src="/image/22914217.png" className="opacity-30" alt="LogoRobot" width={1000} height={1000} />
                </div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center justify-center px-[20px] mt-5 overflow-hidden">
                    <div className="bg-[#fff] w-full h-[1px]"></div>
                    <motion.div variants={cardVariants}><p className="text-[30px] px-[50px] w-full max-[520px]:text-[22px] flex items-center justify-center">ABOUT&nbsp;<span className="text-[#355E3B] font-bold">ME</span></p></motion.div>
                    <div className="bg-[#fff] w-full h-[1px]"></div>
                </motion.div>
                
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center justify-center px-[20px] mt-5 overflow-hidden">
                    <motion.div 
                    variants={headerVariant}
                    className="mt-4">
                        <p className={`text-[40px] text-center ${AntonFont.className}`}>Hi There! My Name Is Ralph Matthew Maglaya a Developer</p>
                    </motion.div>
                </motion.div>
              
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }} className="items-center grid grid-cols-2 max-[768px]:grid-cols-1 justify-center mt-7 gap-x-[50px]">
                        <motion.div variants={cardVariants}>
                            <p className="text-justify leading-10 text-[18px] max-[768px]:px-[20px] mb-5">
                                Hi, I am 22 years, from Sta. Mesa Manila. My interest is to play guitar, hiking, and playing video games, I am studying at Polytechnic Univeristy of the Philippines taking up Bachelor of Science in Information Technology, my mission is to make the website better.
                            </p>
                            <p></p>
                            <p className="text-justify leading-10 text-[18px] max-[768px]:px-[20px] mb-5"> 
                                With a blend of technical expertise and creative flair, I aim to optimize user experience, technology functionality, and enhance visual aesthetics.
                            </p>
                        </motion.div>
                        <motion.div 
                        variants={slideImageVariants}
                        className="max-[768px]:mx-[20px] mb-[30px] bg-[#fff] border border-solid border-1 border-[#000] p-3 rounded-[10px] shadow-[0px_0px_3px_5px_rgba(255,255,255,1)]">
                            <img 
                              src="/image/AboutMe.jpg" alt="ImageLogo" className="rounded-[10px] h-[100%] border border-solid border-[5px] border-[#000]">
                            </img>
                        </motion.div>
                </motion.div>
            </div>
        </React.Fragment>
    )
}

export default About;