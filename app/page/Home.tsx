"use client"

import React, {useState, useEffect, useRef} from "react";
import {Parallax, ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import { Open_Sans, Lato } from "next/font/google";
import Typewriter from 'typewriter-effect';
import { FaArrowDown, FaDownload } from "react-icons/fa";

import Link from "next/link";
import { motion, Variants } from "framer-motion"

const OpenSans = Open_Sans({ subsets: ["latin"], weight: "800" });
const LatoFont = Lato({subsets: ["latin"], weight: "700"})

interface PathArray {
    name: string;
    link: string;
}

const Home: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleDownload = () => {
      // Generate the URL to the PDF file
      const pdfUrl = 'https://portfoliorap.netlify.app/CV.pdf';
  
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.target = '_blank'; // Open the PDF in a new tab (optional)
      link.setAttribute('download', 'CV.pdf'); // Set the filename for download
  
      // Append the anchor element to the body
      document.body.appendChild(link);
  
      // Trigger a click event on the anchor element
      link.click();
  
      // Remove the anchor element from the body
      document.body.removeChild(link);
    };
  

    const path: PathArray[] = [
        {
          name: "facebook",
          link: "https://www.facebook.com/immaglaya.26"
        },
        {
          name: "github",
          link: "https://github.com/Raprap29"
        }
      ]
    
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
      
      const AnimationOppacityFade: Variants = {
        offscreen: {
          scale: 0
        },
        onscreen: {
          scale: 1,
          rotate: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.4
          }
        }
      }
    
      const containerHomeTitle: Variants = {
        offscreen: {
          x: 400
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
      }
    return(
        <React.Fragment>
            <div className="relative mt-[-2.8rem] h-[110vh] max-[720px]:h-[1150px] w-full">
            <ParallaxBanner
              layers={[{ image: '/image/bgport.jpg', speed: 20 }]}
              className="aspect-[2/1] pt-[8rem] h-[108vh] max-[720px]:h-[1150px]"
            >
         
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.0 }}
              className="relative overflow-hidden z-10 h-full grid grid-cols-2 max-[720px]:grid-cols-1 gap-4 gap-x-[50px] max-w-[900px] justify-center mx-auto p-4 max-[768px]:mt-[0px] mt-[50px]"
           >
              <motion.div
                variants={cardVariants}

              >
                <Parallax speed={5}>
                  <motion.div
                  whileHover={{scale: 1.05}}
                  >
                    <Image src="/image/Me2.jpg" className="shadow-[0px_0px_10px_5px_rgba(255,255,255,.50)] rounded-[50%] border border-sold border-[5px] border-[#fff]" alt="Me2" width={1000} height={1000} />
                  </motion.div>
                </Parallax>
              </motion.div>
              <motion.div
                variants={containerHomeTitle}

              >
                <div className="p-4 text-black w-[430px] max-[720px]:w-full">
                  <p className={`text-[#fff] font-bold text-[18px] ${LatoFont.className}`}>Hello, I'm <span className="text-[orange]">Ralph Matthew Maglaya</span></p>
                  <div className={`text-[35px] text-[#6495ED] font-bold ${OpenSans.className}`}>
                    <Typewriter
                      options={{
                        strings: [
                          "I am a Web Developer",
                          "I am an Android Developer",
                          "I am a Technical Support",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                  <p className="text-white text-justify mt-3">Hi, I'm Ralph Maglaya, a developer with a passion for creating transformative digital experiences. I bring a comprehensive skill set to every project. I thrive on delivering technical support and innovative solutions that exceed expectations.</p>
                <div className="flex items-center gap-x-[20px] mt-8">
                  <motion.button onClick={handleDownload} transition={{ duration: 0.125, ease: "easeInOut" }} whileHover={{scale: 1.05, translateY: -5}} whileTap={{scale: 0.95, rotate: "2.5deg"}} className="bg-[#fff] transition duration-300 ease-in-out scale-[1] hover:bg-[rgba(255,255,255,.75)] rounded-[5px] gap-x-[20px] shadow-[0px_0px_10px_0px_rgba(255,255,255,.75)] flex items-center px-[20px] py-[10px] text-black">
                      <p className="font-bold">Resume</p>
                      <FaDownload color="#000" />
                  </motion.button>
                  <div className="flex items-center gap-x-[10px]">
                    <Link href="mailto:maglayaralph26@gmail.com" className="transition duration-300 ease-in-out scale-[1] translate-y-0 hover:-translate-y-1 hover:scale-[1.05]">
                      <Image src={`/logo/email.png`} alt={`logo-0`} width={1000} height={1000} className="rounded-[8px] w-[40px]"></Image>
                    </Link>
                      {path?.map((item: any, index: number) => (
                        <Link href={item?.link} key={index} className="transition duration-300 ease-in-out scale-[1] translate-y-0 hover:-translate-y-1 hover:scale-[1.05]">
                            <Image src={`/logo/${item?.name}.png`} alt={`logo-${(index + 1)}`} width={1000} height={1000} className="rounded-[8px] w-[40px]"></Image>
                        </Link>
                      ))}
                  </div>
                </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.a
              href="#project"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.0 }} 
              className="z-[10] absolute bottom-[25px] flex-col z-10 w-full flex items-center justify-center">
              <motion.div
                variants={AnimationOppacityFade}
                animate={{ y: isHovered ? 15 : 0 }}
              >
                 <div 
                  className="border group h-[65px] cursor-pointer px-[8px] relative rounded-[10px] text-[#000] bg-[#fff] border-solid border-2 border-[#000] shadow-[0px_0px_10px_0px_rgba(255,255,255,.75)]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.div
                    className="mt-2"
                    initial={{ y: 0 }}
                    animate={{ y: isHovered ? 30 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <FaArrowDown color="#000" fontSize={16} />
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                variants={AnimationOppacityFade}
                className="mt-3">
                <p>Click to swipe down~</p>
              </motion.div>
            </motion.a>
              </ParallaxBanner>
          </div>
        </React.Fragment>
    )
}

export default Home;