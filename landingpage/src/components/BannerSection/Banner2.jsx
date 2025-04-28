import React from "react";
import Bannerimage from "../../assets/banner.png"
import { motion } from "framer-motion";

export const Banner2 = () => {
    return (
        <div>
            <section>
                <div className="lg:px-12 px-3 bg-white py-14 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                    {/* Banner Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex flex-col justify-center"
                    >
                        <div className=" md:text-left space-y-4 lg:max-w-[450px] text-center lg:ml-6">
                            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold !leading-snug">
                                Join Our Community to Start your Journey
                            </h1>
                            <p className="text-dark2 'text-sm md:text-md lg:text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
                                incidunt!
                            </p>
                            <a
                                href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"
                                className="primary-btn !mt-8 hover:bg-secondary hover:text-white"
                            >
                                Join Now
                            </a>
                        </div>
                    </motion.div>
                    {/* Banner Image */}
                    <div className="flex justify-center md:justify-end lg:justify-center items-center">
                        <motion.img
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            src={Bannerimage}
                            alt=""
                            className="lg:w-[350px] md:max-w-[450px]  object-cover drop-shadow w-50"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

