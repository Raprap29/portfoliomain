"use client";

import React, {useState, useEffect, useRef} from "react";
import 'swiper/css';
// import 'swiper/css/navigation';
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from 'swiper/modules';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
interface ShowContextProps {
    ImageWork: Record<string, any>; 
    ToggleShow: boolean;
    setToggleShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowContextDetails: React.FC<ShowContextProps> = ({ ImageWork, ToggleShow, setToggleShow }) => {

    const swiperRef: React.MutableRefObject<SwiperType | null> = useRef<SwiperType | null>(null);

    const handleClose = () => {
        setToggleShow(false);
    }

    useEffect(()=> {
     
        if(ToggleShow){
            disableBodyScroll(document.body);
        }

        return () => {
            enableBodyScroll(document.body);
        };
    }, [ToggleShow]);

    return(
        <React.Fragment>
            <div className="">
                {ToggleShow && (<div className="z-[199] bg-[rgba(0,0,0,.75)] w-full h-screen fixed top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"></div>)}
                <AnimatePresence mode="popLayout">
                    {ToggleShow && (
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
                        className="fixed z-[200] top-[20%] left-[20%] transform translate-y-[-50%] translate-x-[-50%]">
                            <div className="flex max-[768px]:flex-col p-[15px] rounded-[5px] gap-x-[20px] w-[200px] md:w-[900px] h-[400px] bg-[#000] border border-solid border-[#fff] border-2 shadow-3dshadow">
                                <div className="absolute right-[20px]">
                                    <button onClick={handleClose} type="button" className="bg-[red] text-white rounded-[5px] p-2"><FaTimes  /></button>
                                </div>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    modules={[Autoplay]}
                                    // modules={[Navigation]}
                                    className="mySwiper w-full"
                                >
                                    {ImageWork?.image?.map((item: any, index: number) => (
                                        <SwiperSlide key={index} className="h-full w-full">
                                            <img alt={`image-${index}`} className="h-[200px] md:h-full" src={`/imagework/${item?.img}.png`} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="text-white md:w-[600px] mt-1">
                                    <div>
                                        <p className="text-[22px] font-bold">{ImageWork?.name}</p>
                                    </div>
                                    <div className="text-justify w-full mt-5">
                                        <p>{ImageWork?.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </React.Fragment>
    )
}

export default ShowContextDetails;