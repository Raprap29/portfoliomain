"use client";

import React, {useState, useEffect, useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from "swiper";
import { Goblin_One } from "next/font/google";
import 'swiper/css';
const Goblin_One_Font = Goblin_One({subsets: ['latin'], weight: "400"})
import { Autoplay } from 'swiper/modules';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface ImageProps {
    image: number;
}

const Certificate: React.FC = () => {
    const swiperRef: React.MutableRefObject<SwiperType | null> = useRef<SwiperType | null>(null);
    
    const ArrayImage: ImageProps[] = [
        {
            image: 1,
        },
        {
            image: 2,
        },
        {
            image: 3,
        },
        {
            image: 4,
        },
        {
            image: 5,
        },
        {
            image: 6
        },
        {
            image: 7,
        },
        {
            image: 8,
        },
        {
            image: 9,
        },
        {
            image: 10,
        },
        {
            image: 11,
        },
    ]
    
    return(
        <React.Fragment>
            <div className="bg-[#fff] w-full h-[1px]"></div>
            <div className="pt-[40px]">
                <p className={`md:text-[25px] text-center ${Goblin_One_Font.className}`}>MY CERTIFICATE ACCOMPLISHMENT</p>
            </div>
            <div className="mx-auto container max-w-[1100px] pt-[50px]">
                <div className="flex justify-center w-full items-center h-full">
                    <button type="button" className="md:block hidden" onClick={() => swiperRef.current!.slidePrev()}><BiChevronLeft size={76} /></button>
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
                            className="mySwiper"
                        >
                            {ArrayImage?.map((item: any, index: number) => (
                                <SwiperSlide key={index} className="md:px-[100px] px-[40px]">
                                    <img alt={`image-${index}`} className="w-full h-[200px] md:h-[450px]" src={`/cert/${item.image}.jpg`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    <button className="md:block hidden" type="button" onClick={() => swiperRef.current!.slideNext()}><BiChevronRight size={76} /></button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Certificate;