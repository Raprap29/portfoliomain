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
            className="bg-[#FFFAFA] border border-solid border-[3px] shadow-3dshadow text-black max-[768px]:h-full h-[400px] rounded-[5px] p-3">
                <div className="flex justify-center">
                    <div className="text-[50px]">{image && React.createElement(image)}</div>
                </div>
                <div className="mt-5">
                    <h3 className="text-[22px] font-bold">{TitleService}</h3>
                </div>
                <div className="mt-4">
                    <p>{description}</p>
                </div>
        </motion.div>
       </motion.div>
    );
};

export default CartItemServices;
