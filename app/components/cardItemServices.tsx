import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { IconType } from 'react-icons';

interface CartItemServicesProps {
    image: IconType;
    TitleService: string;
    description: string;
    delay: number;
    
}

const CartItemServices: React.FC<CartItemServicesProps> = ({delay, image, TitleService, description}) => {

    const CardMotion: Variants = {
        offscreen: {
            y: 2000
        },
        onscreen: {
            y: 0,
            rotate: 0,
        }
    }

    return (
       <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.0 }}
       >
            <motion.div
            variants={CardMotion}
            transition={{
                type: "spring",
                bounce: 0.4,
                duration: 2,
                delay: delay,
            }}
            className="text-white border border-solid border-1 shadow-3dshadow text-black max-[768px]:h-full h-[400px] rounded-[5px] p-3">
                <div className="flex justify-center">
                    <div className="text-[50px]">{image && React.createElement(image)}</div>
                </div>
                <div className="mt-5">
                    <h3 className="text-[22px] font-bold">{TitleService}</h3>
                </div>
                <div className="mt-4">
                    <p>{description}</p>
                </div>
                <div className="mt-5 flex justify-center">
                    <Link className="group w-[140px] border border-solid border-1 border-[#ccc] p-2 rounded-[5px]" href="#contact">
                        <p>Contact me</p>
                        <div className="bg-[#fff] transition-all duration-300 ease-in-out w-[0px] group-hover:w-full h-[2px]"></div>
                    </Link>
                </div>
        </motion.div>
       </motion.div>
    );
};

export default CartItemServices;
