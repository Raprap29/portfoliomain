"use client";

import React, {useState, useEffect} from "react";
import { AnimatePresence, motion, Variants } from "framer-motion"
import { Russo_One, Rum_Raisin } from "next/font/google";
import { FaLocationArrow } from "react-icons/fa";
interface BackgroundEduProps {
    isMobile: number;
}

interface BackgroundEduArr {
    logo: string;
    year: string;
    schoolname: string;
    program: string;
    address: string;
    delay: number;
    program2: string;
}

interface OptionList {
    program: string;
    delay: number;
}

const Russo_Font  = Russo_One({ subsets: ['cyrillic'], weight: "400" });
const Rum_RaisinFont  = Rum_Raisin ({ subsets: ['latin'], weight: "400" });

const BackgroundEdu: React.FC<BackgroundEduProps> = ({isMobile}) =>{
    
    const [school, setSchool] = useState<string>("College");

    const SlideHeight: Variants = {
        offscreen: {
            x: -400,
            opacity: 0,
          },
          onscreen: {
            x: 0,
            opacity: 1,
          }
    }

    const SlideText: Variants = {
        offscreen: {
            x: "-100%",
            opacity: 0,
          },
          onscreen: {
            x: 0,
            opacity: 1,
          }
    }

    const ListOfTheProgram: OptionList[] = [
        {
            program: "College",
            delay: 0.25,
        },
        {
            program: "Shs",
            delay: 0.50,
        },
        {
            program: "Jhs",
            delay: 0.75,
        },
        {
            program: "Elementary",
            delay: 1,
        },
    ]

    const BackgroundStoreArr: BackgroundEduArr[] = [
        {
            logo: 'ImageSchool/2012.jpg',
            year: '2020 to present',
            schoolname: 'Polytechnic University of the Philippines',
            program: 'Bachelor of Science in Information Technology',
            address: 'San Juan City, Metro Manila',
            delay: 0.25,
            program2: "College",
        },
        {
            logo: 'ImageSchool/kiddie.jfif',
            year: '2018 to 2020',
            schoolname: 'Agoo Kiddie Special School',
            program: 'Senior High School',
            address: 'Brgy. Consolacion, Agoo, La Union',
            delay: 0.50,
            program2: "Shs"
        },
        {
            logo: 'ImageSchool/sma.png',
            year: '2014 to 2018',
            schoolname: 'Saint Marys Academy',
            program: 'Junior High School',
            address: 'Brgy. Consolacion, Agoo, La Union',
            delay: 0.75,
            program2: "Jhs"
        },
        {
            logo: 'ImageSchool/monte.png',
            year: '2008 to 2014',
            schoolname: 'Agoo Montessori Learning Center & High School Inc.',
            program: 'Elementary',
            address: 'Jose D. Aspiras Hwy, Barangay San Antonio, Agoo, La Union',
            delay: 1,
            program2: "Elementary"
        },
    ]

    return(
        <React.StrictMode>
            <div className="px-[15px]">
                <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.0 }}
                className="container max-w-[1100px] mx-auto border border-solid border-[#fff] border-[5px] p-2 py-4 rounded-[10px]"
                >
                    <div className="flex justify-center">
                        <motion.div 
                        variants={SlideText}
                        transition={{duration: 2}}
                        className="relative">
                            <p className={`text-[30px] max-[568px]:text-[16px] text-center ${Russo_Font.className}`}>EDUCATIONAL BACKGROUND</p>
                            <div className="absolute bottom-0 h-[1px] bg-[#fff] w-full max-[768px]:hidden"></div>
                        </motion.div>
                    </div>
                    <div className="flex justify-center w-full mt-5">
                        <div className="flex mx-[20px] max-[768px]:flex-col w-[800px] justify-between gap-x-[50px]">
                            <div className="flex w-full flex-col gap-y-[40px] mt-5 justify-center">
                                {ListOfTheProgram?.map((item: any, index: number) => (
                                    <motion.div
                                        key={index}
                                        variants={SlideHeight}
                                        transition={{
                                            type: "spring",
                                            bounce: 0.4,
                                            duration: 2,
                                            delay: item?.delay,
                                        }}
                                    >
                                        <motion.button
                                            type="button"
                                            onClick={() => setSchool(item?.program)}
                                            whileHover={{
                                                scale: 1.05
                                            }}

                                            transition={{
                                                duration: 0.25
                                            }}

                                            className={`border rounded-[10px] transition-all duration-300 ease-in-out hover:text-[#000] ${item?.program === school ? "bg-[#fff] text-black pointer-events-none" : ""} hover:bg-[#fff] text-[#fff] rounded-r-[100px] px-[40px] flex justify-between items-center border-solid border-2 border-[#fff] w-full`}
                                        >
                                            <p className={`${Rum_RaisinFont.className} text-[40px] max-[768px]:text-[28px]`}>{item?.program}</p>
                                            <FaLocationArrow size={20} />
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-5">
                                {BackgroundStoreArr?.map((item: any, index: number) => (
                                    <AnimatePresence key={index} mode="popLayout">
                                        {school === item?.program2 && (
                                            <motion.div
                                                initial={{
                                                    scale: 0,
                                                }}
                                                animate={{
                                                    scale: 1,
                                                }}

                                                exit={{
                                                    scale: 0,
                                                }}
                                                
                                                transition={{
                                                    duration: 1.25,
                                                    ease: "backInOut",
                                                }}
                                            >
                                                <div key={index} className={`${school === item?.program2 ? "" : "hidden"}`}>
                                                    <div className="relative overflow-hidden">
                                                        <div className="">
                                                            <motion.div 
                                                            initial={{
                                                                y: "2000%",
                                                            }}
                                                            animate={{
                                                                y: "5%",
                                                            }}
                                                            
                                                            transition={{
                                                                duration: 2,
                                                                ease: "backInOut",
                                                                delay: 0.20,
                                                            }}
                                                            className="absolute transform rounded-[10px] left-[5%] translate-x-[-50%] translate-y-[-50%] w-[90%] h-[90%] bg-[rgba(0,0,0,.75)]">
                                                                <div className="flex justify-center h-full flex-col p-3 gap-y-[30px] md:gap-y-[40px] md:gap-y-[70px]">
                                                                    <p className={`text-[16px] md:text-[20px]`}>Name: {item?.schoolname}</p>
                                                                    <p className={`text-[16px] md:text-[20px]`}>Address: {item?.address}</p>
                                                                    <p className={`text-[16px] md:text-[20px]`}>Year: {item?.year}</p>
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                        <img src={item?.logo} alt="logo" className="w-[1000px] shadow-3dshadow rounded-[10px] h-[400px]" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                ))}
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </React.StrictMode>
    )
}

export default BackgroundEdu;