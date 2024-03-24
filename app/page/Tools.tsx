"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import {motion, Variants} from "framer-motion";

import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { Luckiest_Guy } from "next/font/google";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";

import { SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

import { TbBrandKotlin } from "react-icons/tb";
import { SiAndroidstudio } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import { SiPostman } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";

const Luckiest_GuyFont = Luckiest_Guy({subsets: ['latin'], weight: "400"})

const Tools: React.FC = () => {

    const fBox: Variants = {
        offscreen: {
            x: -400,
            opacity: 0,
          },
          onscreen: {
            x: 0,
            opacity: 1,
        }

    }

    const sBox: Variants = {
        offscreen: {
            x: 400,
            opacity: 0,
          },
          onscreen: {
            x: 0,
            opacity: 1,
        }
    }
    
    const TextMotion = {
        offscreen: {
            y: 400,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
        }
    }

    const TitleMotion = {
        offscreen: {
            x: 400,
            opacity: 0,
          },
          onscreen: {
            x: 0,
            opacity: 1,
        }
    }

    const iconsFrontArray = [
        BiLogoJavascript,
        SiTailwindcss,
        FaHtml5,
        FaReact,
        SiRedux,
        FaCss3Alt,
        FaBootstrap,
        SiNextdotjs
    ];


    const backendIcons = [
        FaNodeJs,
        BiLogoSpringBoot,
        SiTypescript,
        FaJava,
        FaPhp
    ];

    
    const dataBaseIcons = [
        SiMysql,
        IoLogoFirebase,
        SiMongodb,
        GrGraphQl,
    ];
    
    const mobileBaseIcons = [
        TbBrandKotlin,
        SiAndroidstudio,
        TbBrandReactNative,
    ];
    
    const otherIcons = [
        SiPostman,
        SiVisualstudio,
        FaDocker,
        IoLogoFigma,
        IoLogoGithub,
        FaGitAlt
      ];
    


      
    return(
        <React.Fragment>
            <div className="mt-5 bg-[#1E293B] overflow-hidden">
                <div className="bg-[#fff] w-full h-[3px]"></div>
                <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.0 }}
                className="container my-5 max-w-[1100px] mx-auto px-[10px]">
                    <motion.div 
                    variants={TitleMotion}
                    transition={{
                        duration: 1,
                    }}
                    className="">
                        <p className="text-center text-[40px] font-bold max-[768px]:text-[35px] max-[420px]:text-[30px]">My Development Tools</p>
                    </motion.div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.0 }}
                    >
                        <motion.div
                            variants={TextMotion}
                            transition={{
                                duration: 2,
                            }}
                        className="mt-7">
                            <p className={`${Luckiest_GuyFont.className} text-center max-[768px]:text-[28px] max-[420px]:text-[24px] text-[30px]`}>Front-End Development</p>
                        </motion.div>
                        <motion.div 
                        variants={fBox}
                        transition={{
                            duration: 2
                        }}
                        className="bg-[#fff] m-3 rounded-[10px] py-5 text-black px-[20px] justify-between flex gap-x-[20px] flex-wrap mt-3 border border-solid border-[#000] border-[3px]">
                            {iconsFrontArray?.map((Icon: any, index: number) => (
                                <Icon key={index} size={100} />
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.0 }}
                    >
                        <motion.div
                            variants={TextMotion}
                            transition={{
                                duration: 2,
                            }} 
                        className="mt-7">
                            <p className={`${Luckiest_GuyFont.className} text-center max-[768px]:text-[28px] max-[420px]:text-[24px] text-[30px]`}>Back-End Development</p>
                        </motion.div>
                        <motion.div
                        variants={sBox}
                        transition={{
                            duration: 2,
                        }}
                        className="bg-[#fff] m-3 rounded-[10px] py-5 text-black px-[20px] justify-between flex gap-x-[20px] flex-wrap mt-3 border border-solid border-[#000] border-[3px]">
                            {backendIcons?.map((Icon: any, index: number) => (
                                <Icon key={index} size={100} />
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.0 }}
                    >
                        <motion.div
                            variants={TextMotion}
                            transition={{
                                duration: 2,
                            }}
                        className="mt-7">
                            <p className={`${Luckiest_GuyFont.className} text-center max-[768px]:text-[28px] max-[420px]:text-[24px] text-[30px]`}>Databases</p>
                        </motion.div>
                        <motion.div 
                        variants={fBox}
                        transition={{
                            duration: 2
                        }}
                        className="bg-[#fff] m-3 rounded-[10px] py-5 text-black px-[20px] justify-between flex gap-x-[20px] flex-wrap mt-3 border border-solid border-[#000] border-[3px]">
                            {dataBaseIcons?.map((Icon: any, index: number) => (
                                <Icon key={index} size={100} />
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.0 }}
                    >
                        <motion.div
                            variants={TextMotion}
                            transition={{
                                duration: 2,
                            }} 
                        className="mt-7">
                            <p className={`${Luckiest_GuyFont.className} text-center max-[768px]:text-[28px] max-[420px]:text-[24px] text-[30px]`}>Mobile Development</p>
                        </motion.div>
                        <motion.div
                        variants={sBox}
                        transition={{
                            duration: 2,
                        }}
                        className="bg-[#fff] m-3 rounded-[10px] py-5 text-black px-[20px] justify-between flex gap-x-[20px] flex-wrap mt-3 border border-solid border-[#000] border-[3px]">
                            {mobileBaseIcons?.map((Icon: any, index: number) => (
                                <Icon key={index} size={100} />
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.0 }}
                    >
                        <motion.div
                            variants={TextMotion}
                            transition={{
                                duration: 2,
                            }} 
                        className="mt-7">
                            <p className={`${Luckiest_GuyFont.className} text-center max-[768px]:text-[28px] max-[420px]:text-[24px] text-[30px]`}>Others</p>
                        </motion.div>
                        <motion.div
                        variants={fBox}
                        transition={{
                            duration: 2,
                        }}
                        className="bg-[#fff] m-3 rounded-[10px] py-5 text-black px-[20px] justify-between flex gap-x-[20px] flex-wrap mt-3 border border-solid border-[#000] border-[3px]">
                            {otherIcons?.map((Icon: any, index: number) => (
                                <Icon key={index} size={100} />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
                <div className="bg-[#fff] w-full h-[3px]"></div>
            </div>
        </React.Fragment>
    )
}

export default Tools;