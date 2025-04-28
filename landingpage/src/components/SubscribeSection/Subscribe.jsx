import React from 'react'
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.png/";
import { motion } from "framer-motion";

const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

};

export const Subscribe = () => {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={bgStyle}
                className=" py-24 md:py-48">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="flex flex-col justify-center">
                    <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
                        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold !leading-snug">
                            450K+ Students are learning from us
                        </h1>
                        <p className='text-sm md:text-md lg:text-lg px-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae iusto minima
                        </p>
                        <a
                            href=""
                            className="primary-btn !mt-8 inline-flex items-center gap-4 group hover:bg-secondary hover:text-white"
                        >
                            Subscribe Now
                            <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}


