import React from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

export const Footer = () => {

    return (
        <footer className="lg:py-28 py-6 bg-gray">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="px-12 mx-auto flex justify-center items-center"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                    {/* first section */}
                    <div className="flex justify-center items-start flex-col ">
                        <h1 className="text-2xl font-bold ">The Coding Journey</h1>
                        <p className="text-dark2 text-sm md:text-md lg:text-lg">
                            TCJ is a platform dedicated to empowering aspiring developers.
                            From beginner tutorials to advanced programming concepts, we
                            provide a comprehensive learning experience designed to help you
                            master coding skills, build projects, and launch your tech career.
                        </p>
                    </div>
                    {/* second section */}
                    <div className="grid grid-cols-2 ">
                        <div className='flex justify-center items-center flex-col'>
                            <div className="">
                                <h1 className="text-2xl font-bold">Courses</h1>
                                <div className="text-dark2">
                                    <ul className="space-y-2 text-sm md:text-md lg:text-lg">
                                        <li className="cursor-pointer hover:text-secondary duration-200">
                                            Web Development
                                        </li>
                                        <li className="cursor-pointer hover:text-secondary duration-200">
                                            Software Development
                                        </li>
                                        <li className="cursor-pointer hover:text-secondary duration-200">
                                            Apps Development
                                        </li>
                                        <li className="cursor-pointer hover:text-secondary duration-200">
                                            E-learning
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:justify-center justify-start items-center flex-col">
                            <h1 className="text-2xl font-bold">Links</h1>
                            <div className="text-dark2">
                                <ul className="space-y-2 text-sm md:text-md lg:text-lg">
                                    <li className="cursor-pointer hover:text-secondary duration-200">
                                        Home
                                    </li>
                                    <li className="cursor-pointer hover:text-secondary duration-200">
                                        Services
                                    </li>
                                    <li className="cursor-pointer hover:text-secondary duration-200">
                                        About
                                    </li>
                                    <li className="cursor-pointer hover:text-secondary duration-200">
                                        Contact
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    {/* third section */}
                    <div className="flex lg:justify-center items-center">
                        <div className=' flex-col'>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl py-6 font-bold">Get In Touch</h1>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="p-3 rounded-s-xl bg-white w-full py-3 mb-3 focus:ring-0 focus:outline-none placeholder:text-dark2"
                                />
                                <button className="bg-primary text-white font-semibold py-3 mb-3 px-6 rounded-e-xl cursor-pointer hover:bg-secondary">
                                    Go
                                </button>
                            </div>
                            {/* social icons */}
                            <div className="flex space-x-6 py-3 px-3">
                                <a href="https://chat.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className="cursor-pointer hover:text-secondary hover:scale-105 duration-200" />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="cursor-pointer hover:text-secondary hover:scale-105 duration-200" />
                                </a>
                                <a href="https://thecodingjourney.com/">
                                    <TbWorldWww className="cursor-pointer hover:text-secondary hover:scale-105 duration-200" />
                                </a>
                                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className="cursor-pointer hover:text-secondary hover:scale-105 duration-200" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer >
    )
}

