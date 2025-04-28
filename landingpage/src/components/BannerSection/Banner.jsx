import React from "react";
import Bannerimage from "../../assets/education.png"
import { motion } from "framer-motion";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../HeroSection/Hero";




export const Banner = () => {
    return (
        <div>
            <section>
                <div className=" py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 bg-white">
                    {/* Banner Image */}
                    <div className="flex justify-center items-center">
                        <motion.img
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            src={Bannerimage}
                            alt=""
                            className="lg:w-[350px] md:max-w-[450px] object-cover drop-shadow w-50"
                        />
                    </div>
                    {/* Banner Text */}
                    <div className="flex flex-col justify-center">
                        <div className="text-center md:text-left space-y-12">
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl md:text-3xl px-2 md:px-0 lg:text-4xl font-bold !leading-snug"
                            >
                                The World's Leading Online learning Platform
                            </motion.h1>
                            <div className="flex flex-col gap-6 px-3 md:px-6 lg:px-6">
                                <motion.div
                                    variants={FadeUp(0.2)}
                                    initial="initial"
                                    whileInView={"animate"}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 lg:p-6 p-3 bg-gray rounded-2xl hover:bg-light duration-300 hover:shadow-2xl"
                                >
                                    <FaBookReader className="text-2xl" />
                                    <p className="text-lg">10,000+ Courses</p>
                                </motion.div>
                                <motion.div
                                    variants={FadeUp(0.4)}
                                    initial="initial"
                                    whileInView={"animate"}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 lg:p-6 p-3 bg-gray rounded-2xl hover:bg-light duration-300 hover:shadow-2xl"
                                >
                                    <GrUserExpert className="text-2xl" />
                                    <p className="text-lg">Expert Instruction</p>
                                </motion.div>
                                <motion.div
                                    variants={FadeUp(0.6)}
                                    initial="initial"
                                    whileInView={"animate"}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 lg:p-6 p-3 bg-gray rounded-2xl hover:bg-light duration-300 hover:shadow-2xl group"
                                >
                                    <MdOutlineAccessTime className="text-2xl" />
                                    <p className="text-lg group-hover:text-bold">Lifetime Access</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

