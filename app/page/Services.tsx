import React from "react";
import Image from "next/image";
import CartItemServices from "../components/cardItemServices";
import {motion, Variants} from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { GoGear } from "react-icons/go";
import { IoLogoAndroid } from "react-icons/io";

interface ServicesProps {
    isMobile: number;
}

const Services: React.FC<ServicesProps> = ({isMobile}) => {

    const CardBgZoom: Variants= {
        offscreen: {
            scale: 0
        },
        onscreen: {
            scale: 1,
            rotate: 0,
        }
    }

    const TextMotion: Variants = {
        offscreen: {
            scale: 0
        },
        onscreen: {
            scale: 1,
            rotate: 0,
        }
    }

    return (
        <div>
            <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.0 }}
            className="relative h-screen max-[768px]:h-[1580px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="container max-w-[1300px] text-white">
                <motion.div
                    variants={TextMotion}
                    transition={{
                        duration: 1,
                    }}
                >
                </motion.div>
                    <div className="relative">
                        <motion.div 
                        variants={CardBgZoom}
                        transition={{
                            duration: 1,
                        }}
                        className="bg-cover bg-center h-[1580px] lg:h-[600px] shadow-[inset_0px_0px_30px_30px_rgba(0,0,0,1)] relative" style={{backgroundImage: "url('/image/3394.jpg')"}}></motion.div>
                            <div className="absolute inset-0 bg-black opacity-60"></div>
                            <div className="absolute inset-0  mx-[30px] flex items-center justify-center text-center">
                                <div className="text-center top-[45px] absolute"><p className="text-[32px] text-white font-bold mb-4">MY SERVICES</p></div>
                                <div className="container mt-5 gap-x-[40px] gap-y-[40px] grid grid-cols-1 md:grid-cols-3 mx-auto max-w-[1100px] text-white">
                                    <CartItemServices delay={isMobile < 768 ? 0 : 0.30} TitleService="Web Developer" image={CgWebsite} description="To build custom websites tailored to your unique needs and goals. From sleek and responsive designs that captivate your audience to robust backend systems that ensure seamless functionality, I got you covered at every step of the development process." />
                                    <CartItemServices delay={isMobile < 768 ? 0 : 0.55} TitleService="Technical Support" image={GoGear} description="To help you what is the problem of your computer, I can troubleshoot your computer, or your networking, identifying hardware and software solutions, and installing software." />
                                    <CartItemServices delay={isMobile < 768 ? 0 : 0.80} TitleService="Android Developer" image={IoLogoAndroid} description="Building an Android application tailored to your unique needs and goals is my specialty. From captivating mobile UI designs to seamless system functionality, I've got you covered at every step of the mobile development process." />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </div>
    );
};

export default Services;
