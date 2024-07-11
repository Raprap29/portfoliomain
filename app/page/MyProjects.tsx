"use client";

import React, { useState, useEffect, useRef } from "react";
import { Fredericka_the_Great, Notable } from "next/font/google";
import { AnimatePresence, motion, Variants } from "framer-motion"
import { Rum_Raisin } from "next/font/google";
import ShowContextDetails from "../components/ShowContextProject";
import { ArrayForTheProject } from "../components/projectData";

const Fredericka_the_Great_Font = Fredericka_the_Great({ subsets: ['latin'], weight: "400" });
const Notable_Font = Notable({ subsets: ['latin'], weight: "400" });



interface MyProjectsProps {
  isMobile: number;
}



interface ImagePropsDetails {
  name: string;
  description: string;
  image: ImageDetailsView[];
}

interface ImageDetailsView {
  img: string;
}

const Rum_RaisinFont  = Rum_Raisin ({ subsets: ['latin'], weight: "400" });

const MyProjects: React.FC<MyProjectsProps> = ({ isMobile }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  const [detailsShow, setDetailsShow] = useState<ImagePropsDetails>({
    name: "",
    description: "",
    image: [{
      img: "",
    }]
  })

  const [showDetails, setshowDetails] = useState<boolean>(false);

  const [nameImage, setNameImage] = useState<string>("");

  const [viewAll, setViewAll] = useState<number>(4);

  const ZoomCard = {
    offscreen: {
      y: 400,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    }
  };

  
  const HandleClickShow = (Filter: string) => {
    setNameImage(Filter);
    setshowDetails(true);
  }

  
 

  useEffect(() => {
    const interval = setInterval(() => {
      const textElement = textRef.current;
      if (!textElement) return;

      const textWidth = textElement.scrollWidth;

      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        if (newPosition >= textWidth) {
          return newPosition - textWidth;
        } else {
          return newPosition;
        }
      });

    }, 10);
    
    return () => clearInterval(interval);
  }, [textRef]);
  
  const HideViewAll = () => {
    setViewAll(4);
  }

  const HandleViewAll = () => {
    setViewAll(ArrayForTheProject?.length)
  }

  useEffect(() => {
    const filteredImage = ArrayForTheProject.find(
      (item) => item?.name === nameImage
    );

    if (filteredImage) {
      setDetailsShow({
        name: filteredImage.name,
        description: filteredImage.description,
        image: filteredImage.imgShow?.map((item) => ({
          img: item?.img,
        })) || [],
      });
    }
  }, [nameImage]);

  return (
    <> 
      <ShowContextDetails ImageWork={detailsShow} ToggleShow={showDetails} setToggleShow={setshowDetails} />
      <div className="bg-[#fff] w-full h-[3px]"></div>
      <div className="mx-auto container max-w-[1100px] mt-5">
        <div className="flex justify-center">
          <div className="flex justify-center w-[400px] rounded-[10px] shadow-[0px_5px_10px_0px_rgba(255,255,255,.90)] bg-[#fff]">
            <p className={`${Notable_Font.className} text-center text-[30px] md:text-[50px] pb-3 text-black font-bold`}>PROJECTS</p>
          </div>
        </div>
          <div className="mx-auto container px-[20px] max-w-[1250px] mt-[5rem] gap-x-[70px] gap-y-[20px] grid-cols-1 grid md:grid-cols-2">
            {ArrayForTheProject?.slice(0, viewAll).map((item: any, index: number) => (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                key={`cardwork-${index}`}
                viewport={{ once: true, amount: 0.0 }}
              >
                  <motion.div
                  variants={ZoomCard}
                  transition={{ duration: .25 }}
                  whileHover={{
                    scale: 1.05,
                    translateY: -30,
                  }}

                  onClick={() => HandleClickShow(item?.name)}
                  className={`group relative p-2 overflow-hidden border-solid transition-all duration-300 ease-in-out scale-100 hover:scale-105 hover:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.75)] cursor-pointer border-[2px] border border-[#fff] w-full ${isMobile < 768 ? "" : index % 2 === 0 ? "mt-[6rem]" : ""}`}>
                  <div className={`relative w-full h-[200px] bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url('/imagework/${item?.image}')` }}>
                    <div className="group-hover:opacity-100 opacity-0 transition duration-300 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[rgba(0,0,0,.50)] flex justify-center items-center">
                      <p className="font-bold text-22">VIEW DETAILS</p>
                    </div>
                  </div>
                  <div className="flex p-4 mt-1 flex-col gap-y-[10px] h-full">
                    <div>
                      <p className={`font-bold text-[22px] ${Rum_RaisinFont.className}`}>{item?.name}</p>
                    </div>
                    <div className="rounded-[10px]">
                      <p className="text-[16px]">{item?.description}</p>
                    </div>
                    <div className="flex items-center flex-wrap gap-y-[15px] mt-2 gap-x-[22px]">
                      {item?.type?.map((item: any, index: number) => (
                        <div key={`type-${index}`} style={{ backgroundColor: `${item?.color}` }} className={`shadow-3dshadow border border-solid border-1 border-[#ccc] p-2 rounded-[100px] px-[20px]`}>
                          <p className={`${Rum_RaisinFont.className} font-bold`} style={{ color: `${item?.textcolor}` }}>{item?.name}</p>
                        </div>
                      ))}

                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          {viewAll <= 4 ?
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={HandleViewAll} className="shadow-[0px_6px_2px_3px_rgba(255,255,255,.75)] hover:bg-[#fff] hover:text-black transition-all duration-300 ease-in-out hover:shadow-[0px_0px_0px_0px_rgba(255,255,255,0)] px-[50px] py-[10px] shadow-3dshadow rounded-[10px] font-bold border border-solid border-[#fff] border-2">VIEW ALL</button>
          </div>
          : 
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={HideViewAll} className="shadow-[0px_6px_2px_3px_rgba(255,255,255,.75)] hover:bg-[#fff] hover:text-black transition-all duration-300 ease-in-out hover:shadow-[0px_0px_0px_0px_rgba(255,255,255,0)] px-[50px] py-[10px] shadow-3dshadow rounded-[10px] font-bold border border-solid border-[#fff] border-2">HIDE</button>
          </div>
          }
      </div>
    </>
  );
};

export default MyProjects;
