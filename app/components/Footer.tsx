"use client";

import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Fjalla_One } from "next/font/google";
import Image from "next/image";

const Fjalla = Fjalla_One({weight: "400", subsets: ['latin']});


interface PathArray {
    name: string;
    link: string;
}

const Footer: React.FC = () => {

    const path: PathArray[] = [
        {
          name: "facebook",
          link: "https://www.facebook.com/immaglaya.26"
        },
        {
          name: "github",
          link: "https://github.com/Raprap29"
        },
        {
          name: "instagram",
          link: "https://www.instagram.com/matthewkahdjdh"
        },
      ]

    return(
        <>
            <hr />
            <div className="container mx-auto w-full text-white mt-3 mb-4">
                <p className="text-white text-center font-bold text-[30px]">CONNECT WITH ME</p>
                <div className="flex flex-col items-center w-full mt-2 text-center">
                    <div className="flex justify-center gap-x-[30px] my-[20px]">
                        {path?.map((item: any, index: number) => (
                            <Link href={item?.link} key={index} className="transition duration-300 ease-in-out scale-[1] translate-y-0 hover:-translate-y-1 hover:scale-[1.05]">
                                <Image src={`/logo/${item?.name}.png`} alt={`logo-${(index + 1)}`} width={1000} height={1000} className="rounded-[8px] w-[40px]"></Image>
                            </Link>
                        ))}
                    </div>
                    <p className="font-bold text-white max-[520px]:text-[12px]">© {new Date().getFullYear()}, made with ❤️ by Maglaya Ralph, using Next js, Tailwind CSS, and Spring Boot</p>
                </div>
            </div>
        </>
    )
}

export default Footer;