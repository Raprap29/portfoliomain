"use client";

import React, { useState, useEffect, useRef } from "react";
import { Fredericka_the_Great, Notable } from "next/font/google";
import { AnimatePresence, motion, Variants } from "framer-motion"
import { Rum_Raisin } from "next/font/google";
import ShowContextDetails from "../components/ShowContextProject";

const Fredericka_the_Great_Font = Fredericka_the_Great({ subsets: ['latin'], weight: "400" });
const Notable_Font = Notable({ subsets: ['latin'], weight: "400" });

interface TypeProps {
  name: string;
  color: string;
  textcolor: string;
}
interface imgShow {
  img: string;
}

interface MyProjectsProps {
  isMobile: number;
}

interface ProjectProps {
  image: string;
  name: string;
  type: TypeProps[];
  imgShow: imgShow[];
  description: string;
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

  
  const ArrayForTheProject: ProjectProps[] = [
    {
      image: "2.png",
      name: "Wisehunt System",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff",
        },
        {
          name: "NEXT JS",
          color: "#fff",
          textcolor: "#000"
        },
        {
          name: "PC ONLY",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "Wisehunt/1"
        },
        {
          img: "Wisehunt/2"
        },
        {
          img: "Wisehunt/3"
        },
        {
          img: "Wisehunt/4"
        },
        {
          img: "Wisehunt/5"
        },
      ],
      description: "This system is to operate the products and optimize per product of what is the lowest qty, also to track the sales of the products.",
    },
    {
      image: "1.png",
      name: "Cake E-Commerce",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "REACT JS",
          color: "#303F9F",
          textcolor: "#fff"
        },
        {
          name: "PC ONLY",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "Cake/1"
        },
        {
          img: "Cake/2"
        },
      ],
      description: "This e-commerce platform is for purchasing cake products or other items. I use MongoDB as the database, and for login security, I employ JWT authentication.",
    },
    {
      image: "4.png",
      name: "PRIME GAME SITE",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "REACT JS",
          color: "#303F9F",
          textcolor: "#fff"
        },
        {
          name: "PC ONLY",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "Prime/1"
        },
        {
          img: "Prime/2"
        },
        {
          img: "Prime/3"
        },
        {
          img: "Prime/4"
        },
      ],
      description: "This game site is using node js and react js and the database is Mongodb.",
    },
    {
      image: "5.png",
      name: "QUOTES",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "EJS",
          color: "#FFAE42",
          textcolor: "#fff"
        },
        {
          name: "NOT AVAILABLE",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "Quotes/1"
        },
        {
          img: "Quotes/2"
        },
        {
          img: "Quotes/3"
        },
        {
          img: "Quotes/4"
        },
      ],
      description: "This site is a quotes where you can list all your plan. It is using node js and ejs and the database is mongodb",
    },
    {
      image: "6.png",
      name: "NEVERSTOP",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "REACT JS",
          color: "#303F9F",
          textcolor: "#fff"
        },
        {
          name: "PC ONLY",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "NonStop/1"
        },
        {
          img: "NonStop/2"
        },
        {
          img: "NonStop/3"
        }
      ],
      description: "This site is using node js and react js and the database is Mongodb.",
    },
    {
      image: "7.png",
      name: "LUXIRALOOM",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "REACT JS",
          color: "#303F9F",
          textcolor: "#fff"
        },
        {
          name: "PC/MOBILE",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "LuxuriaLoom/1"
        },
        {
          img: "LuxuriaLoom/2"
        },
        {
          img: "LuxuriaLoom/3"
        },
        {
          img: "LuxuriaLoom/4"
        },
        {
          img: "LuxuriaLoom/5"
        },
      ],
      description: "This site is using node js and react js and the database is Mongodb. This is a e-commerece where the products is more on fashion shirt.",
    },
    {
      image: "9.png",
      name: "JAMA REALTY",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "NEXT JS",
          color: "#fff",
          textcolor: "#000"
        },
        {
          name: "PC/MOBILE",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "RealEstate/1"
        },
        {
          img: "RealEstate/2"
        },
        {
          img: "RealEstate/3"
        },
        {
          img: "RealEstate/4"
        },
        {
          img: "RealEstate/5"
        },
        {
          img: "RealEstate/6"
        },
      ],
      description: "This site is a real state to sell the house to manage the house also.",
    },
    {
      image: "11.png",
      name: "INTERIOR WEBSITE",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "REACT JS",
          color: "#303F9F",
          textcolor: "#fff"
        },
        {
          name: "PC/MOBILE",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "LuxCraftInterior/1",
        },
        {
          img: "LuxCraftInterior/2",
        },
        {
          img: "LuxCraftInterior/3",
        },
        {
          img: "LuxCraftInterior/4",
        },
        {
          img: "LuxCraftInterior/5",
        },
        {
          img: "LuxCraftInterior/6",
        },
        {
          img: "LuxCraftInterior/7",
        },
        {
          img: "LuxCraftInterior/8",
        },
       
      ],
      description: "This website is a collaboration with the front-end developer; I fix the other CSS and add additional features like login. Additionally, I develop the backend, utilizing GraphQL for querying the database.",
    },
    {
      image: "3.png",
      name: "Inventory MNZ Management",
      type: [
        {
          name: "PHP",
          color: "#A020F0",
          textcolor: "#fff"
        },
        {
          name: "PC",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "mnz/1",
        },
        {
          img: "mnz/2",
        },
        {
          img: "mnz/3",
        },
        {
          img: "mnz/4",
        }
       
      ],
      description: "This website is to manage the inventory of the motor products.",
    },
    {
      image: "12.png",
      name: "CLOTHING E-COMMERCE",
      type: [
        {
          name: "HTML",
          color: "#ffa500",
          textcolor: "#fff"
        },
        {
          name: "CSS",
          color: "#0000ff",
          textcolor: "#fff"
        },
        {
          name: "JAVASCRIPT",
          color: "#ffff00",
          textcolor: "#fff"
        },
        {
          name: "PC",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "Clothing/1",
        },
        {
          img: "Clothing/2",
        },
        {
          img: "Clothing/3",
        },
        {
          img: "Clothing/4",
        },
        {
          img: "Clothing/5",
        },
        {
          img: "Clothing/6",
        },
        {
          img: "Clothing/7",
        },
        {
          img: "Clothing/8",
        },
       
      ],
      description: "This website is a project of the students of website about e-commerce for designing also about products using html, css, and javascript.",
    },
  ];
  

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
      {/* <div className="w-full bg-[#ccc] flex items-center w-full h-[80px] overflow-hidden">
        <div style={{ transform: `translateX(${-scrollPosition}px)` }}>
          <p ref={textRef} className={`${Fredericka_the_Great_Font.className} text-[30px] font-bold text-[#000] whitespace-nowrap`}>
            I am Ralph Matthew Maglaya a Developer my mission is to make
            your website better, and especially of your business company. With a
            blend of technical expertise and creative flair, I aim to optimize
            user experience, technology functionality, and enhance visual
            aesthetics. Let's collaborate to make your online presence shine
            brighter!
          </p>
        </div>
      </div> */}
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
