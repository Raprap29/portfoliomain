"use client";

import React, {useState, FormEvent, ChangeEvent, useEffect} from "react";
import { Goblin_One, Rum_Raisin } from "next/font/google";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import axios from "axios";

const Goblin_One_Font = Goblin_One({subsets: ['latin'], weight: "400"})
const Rum_RaisinFont  = Rum_Raisin ({ subsets: ['latin'], weight: "400" });

interface PropsSubmit {
    email: string;
    name: string;
    message: string;
}

interface PropsSubmitError {
    email: string;
    name: string;
    message: string;
}

interface error24hrs {
    error24hrs?: string;
}

const ContactUs: React.FC = () => {

    const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);

    const [Loading, setLoading] = useState<boolean>(false);

    const AnimationCardMotion = {
        offscreen: {
            opacity: 0,
            y: 200,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.4
            }
        }
    }

    const AnimationFormMotion = {
        offscreen: {
            opacity: 0,
            scale: 0
        },
        onscreen: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.4
            }
        }
    }

    const TitleMotion = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.4
            }
        }
    }
    

    const [formSubmit, setFormSubmit] = useState<PropsSubmit>({
        email: '',
        name: '',
        message: '',
    })

    const [formSubmitError, setFormSubmitError] = useState<PropsSubmitError>({
        email: '',
        name: '',
        message: '',
    })
    
    const [form24Error, setForm24Error] = useState<error24hrs>({
        error24hrs: ''
    })

    const ClearAllValues = () =>{

        setFormSubmitError({
            email: '',
            name: '',
            message: '',
        })
    
        setFormSubmit({
            email: '',
            name: '',
            message: '',
        })

        setForm24Error({
            error24hrs: '',
        })

    }


    const handleChangeSubmit = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormSubmit({...formSubmit, [e.target.name]: e.target.value});
    }

    function isValidEmail(email: string) {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
        return pattern.test(email);
    }


    const handleSubmitEmail = async (e: FormEvent) => {
        e.preventDefault();

        try{
            setLoading(true);
            const {
                email,
                name,
                message,
            } = formSubmit;

            const errors: PropsSubmitError  = {...formSubmitError};

            if(!name){
                errors.name = '* Name is required';
              }
              else{
                errors.name = '';
              }
      
            if(!email){
                errors.email = '* Email is required';
            }else if (!isValidEmail(email)) {
                errors.email = '* Invalid email format';
            }
            else{
                errors.email = '';
            }

            if(!message){
                errors.message = "* Message is required";
            }
            else{
                errors.message = '';
            }
            
            setFormSubmitError(errors);

            if (Object.values(errors).every((error) => !error)) {

                const error24: error24hrs = {...form24Error};

                // Check if last submission was more than 24 hours ago
                if (!lastSubmitTime || Date.now() - lastSubmitTime >= 24 * 60 * 60 * 1000) {
                    localStorage.setItem("lastSubmitTime", Date.now().toString());
                    error24.error24hrs = "";
                } else {
                    // If it's been less than 24 hours, prevent submission
                    error24.error24hrs = "YOU ARE ALREADY SUBMITTED PLEASE COME BACK LATER!!!"
                }

                setForm24Error(error24);
    
                if (Object.values(error24).every((error) => !error)) {
                    const data = {
                        Subject: "Message client",
                        message: `Name: ${name}\n\nEmail: ${email}\n\n${message}`
                      };
                      
                    await axios.post(`${process.env.NEXT_PUBLIC_API}/send`, data);
                      
                    // await axios.post(`${process.env.NEXT_PUBLIC_API}/send`, {
                    //     mailStructure: {
                    //         Subject: name,
                    //         message: `Email: ${email}\n\n\n${message}`
                    //     }
                    // })

                    ClearAllValues();   
                }

            }
      
            setLoading(false);
        }catch(err)
        {
            return console.error(err);
        }
    }
    
    // Load last submission time from browser storage on component mount
    useEffect(() => {
        const lastSubmit = localStorage.getItem("lastSubmitTime");
        if (lastSubmit) {
            setLastSubmitTime(parseInt(lastSubmit));
        }
    }, []);

    return(
        <React.Fragment>
            <div className="container mx-auto max-w-[1100px] pb-5">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.0 }}
                >
                    <motion.div 
                    variants={TitleMotion}
                    className="flex justify-center">
                        <p className={`text-center font-bold text-[40px] mt-5 ${Goblin_One_Font.className}`}>Contact</p>
                    </motion.div>
                </motion.div>
                <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.0 }}
                className="flex flex-wrap gap-y-[40px] gap-x-[50px] mt-5 justify-center items-center">
                    <motion.div 
                    variants={AnimationCardMotion}
                    className="justify-center flex items-center">
                        <Link href="https://web.facebook.com/matthew.maglaya.1" className={`${Rum_RaisinFont.className} bg-[#303F9F] px-[35px] shadow-3dshadow rounded-[10px] shadow-[0px_5px_5px_5px_rgba(255,255,255,.75)] transition-all hover:bg-[rgba(48,63,159,0.50)] transform hover:translate-y-[-10px] duration-300 ease-in-out hover:shadow-[0px_5px_5px_5px_rgba(255,255,255,0)] text-[40px]`}>FACEBOOK</Link>
                    </motion.div>
                    <motion.div 
                    variants={AnimationCardMotion}
                    className="justify-center flex items-center">
                        <Link href="https://www.instagram.com/matthewkahdjdh/" className={`${Rum_RaisinFont.className} bg-[#833AB4] px-[35px] shadow-3dshadow rounded-[10px] shadow-[0px_5px_5px_5px_rgba(255,255,255,.75)] transition-all hover:bg-[rgba(131,58,180,0.50)] transform hover:translate-y-[-10px] duration-300 ease-in-out hover:shadow-[0px_5px_5px_5px_rgba(255,255,255,0)] text-[40px]`}>INSTAGRAM</Link>
                    </motion.div>
                    <motion.div 
                    variants={AnimationCardMotion}
                    className="justify-center flex items-center">
                        <Link href="https://www.linkedin.com/in/ralph-matthew-maglaya-98a27b2b9/" className={`${Rum_RaisinFont.className} bg-[#0077b5] px-[35px] shadow-3dshadow rounded-[10px] shadow-[0px_5px_5px_5px_rgba(255,255,255,.75)] transition-all hover:bg-[rgba(0,119,181,0.50)] transform hover:translate-y-[-10px] duration-300 ease-in-out hover:shadow-[0px_5px_5px_5px_rgba(255,255,255,0)] text-[40px]`}>LINKEDIN</Link>
                    </motion.div>
                </motion.div>
                <motion.div
                 initial="offscreen"
                 whileInView="onscreen"
                 viewport={{ once: true, amount: 0.0 }}
                >
                    <motion.div 
                    variants={AnimationFormMotion}
                    className="flex justify-center items-center flex-col px-[30px] mt-[4rem]">
                        <div className="w-full flex flex-col items-center justify-center">
                            <p className={`${Goblin_One_Font.className}`}>MESSAGE ME</p>
                            <div className="mb-2 text-center">{form24Error.error24hrs && <p className="text-[red] font-bold">{form24Error.error24hrs}</p>}</div>
                        </div>
                        <div className="border border-solid border-1 border-[#fff] w-full md:w-[500px] h-full mt-[2rem]">
                            <div className="w-full p-4">
                                <div className="mb-2 text-center">{formSubmitError.name && <p className="text-[red] font-bold">{formSubmitError.name}</p>}</div>
                                <p className={`${Goblin_One_Font.className} text-[22px] text-center`}>Name</p>
                                <input name="name" value={formSubmit.name} onChange={handleChangeSubmit} className="focus:border-[#088F8F] border-[5px] placeholder:italic w-full mt-3 py-[10px] px-[8px] text-black outline-none rounded-[5px] border-[black] border border-solid shadow-3dshadow" placeholder="Enter Name..." type="text" />
                            </div>
                            <div className="w-full p-4">
                            <div className="mb-2 text-center">{formSubmitError.email && <p className="text-[red] font-bold">{formSubmitError.email}</p>}</div>
                                <p className={`${Goblin_One_Font.className} text-[22px] text-center`}>Email</p>
                                <input name="email" value={formSubmit.email} onChange={handleChangeSubmit} className="focus:border-[#088F8F] border-[5px] placeholder:italic w-full mt-3 py-[10px] px-[8px] text-black outline-none rounded-[5px] border-[black] border border-solid border-[3px] shadow-3dshadow" placeholder="Enter Email..." type="text" />
                            </div>
                            <div className="w-full p-4">
                            <div className="mb-2 text-center">{formSubmitError.message && <p className="text-[red] font-bold">{formSubmitError.message}</p>}</div>
                                <p className={`${Goblin_One_Font.className} text-[22px] text-center`}>Message</p>
                                <textarea name="message" value={formSubmit.message} onChange={handleChangeSubmit} className="focus:border-[#088F8F] border-[5px] placeholder:italic w-full mt-3 py-[10px] px-[8px] text-black outline-none rounded-[5px] border-[black] border h-[100px] border-solid border-[3px] shadow-3dshadow" placeholder="Enter Message..."></textarea>
                            </div>
                            <div className="w-full px-[50px] pb-5 mt-4">
                                <button type="button" onClick={handleSubmitEmail} className={`${Loading ? "pointer-events-none" : ""} bg-[#1F4329] py-3 border border-solid border-[3px] border-[#fff] text-white rounded-[5px] w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#183520] duration-300 transistion ease-in-out font-bold`}>{Loading ? "Loading..." : "SEND"}</button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </React.Fragment>
    )
}

export default ContactUs;