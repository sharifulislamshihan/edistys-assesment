"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
// Import Swiper styles
import 'swiper/css';

import './styles.css';

const Philosophy = () => {
    const data = [
        {
            icon: (
                <div className="flex items-center justify-center w-[20px] h-[20px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                    <Image
                        src="/solution.svg"
                        alt="Full Suite Solutions"
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                    />
                </div>
            ),
            title: "Full-suite solutions",
            description:
                "Experience the ease of integration across multiple channels with our comprehensive suite of solutions.",
        },
        {
            icon: (
                <div className="flex items-center justify-center w-[20px] h-[20px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                    <Image
                        src="/complex.svg"
                        alt="Simplify Complex"
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                    />
                </div>
            ),
            title: "Simplify the complex",
            description:
                "Handle complex processes with ease, leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
        },
        {
            icon: (
                <div className="flex items-center justify-center w-[20px] h-[20px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                    <Image
                        src="/tech.svg"
                        alt="Cutting Edge Tech"
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                    />
                </div>
            ),
            title: "Cutting-edge tech",
            description:
                "We constantly evolve cutting-edge solutions to deliver an unparalleled fintech experience.",
        },
    ];

    return (
        <div>
            <div className="max-w-7xl mx-auto text-center font-heading mb-20">
                <h2 className="text-lg font-heading font-bold text-[#1f80f0] mb-6 uppercase tracking-wider">OUR PHILOSOPHY</h2>
                <h2 className="text-3xl md:text-6xl text-[#0b305b] font-bold mb-12">Human-centred innovation</h2>

                {/* image for desktop and tab view */}
                <div className='mx-10 my-10 hidden md:block'>
                    <Image
                        src="/desk.png"
                        alt="Philosophy"
                        width={2000}
                        height={500}
                        class='w-full h-full object-cover'
                    />
                </div>

                {/* image for mobile view */}
                <div className='mx-10 my-10 block md:hidden'>
                    <Image
                        src="/mob.png"
                        alt="Philosophy"
                        width={2000}
                        height={500}
                    />
                </div>


                {/* Carousel for mobile screens */}
                <div className="block md:hidden mx-8">
                    <Swiper
                        slidesPerView={1.5}
                        centeredSlides={true}
                        spaceBetween={20}
                        className="mySwiper px-4"
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#F8FCFF] rounded-2xl p-6 my-4 text-left min-h-[300px] w-[280px]">
                                    <div className='mb-6'>
                                        {item.icon}
                                    </div>
                                    <h3 className=" text-xl md:text-2xl font-semibold text-[#0b305b] font-heading mb-4 md:mb-6 lg:mb-9">{item.title}</h3>
                                    <p className=" text-sm md:text-md text-[#164377] font-paragraph">{item.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* Grid layout for tablet and larger screens */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }} // Start position (below)
                    whileInView={{ opacity: 1, y: 0 }} // Animate when visible in viewport
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }} // Ensures animation plays only once
                >
                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mx-10">
                        {data.map((item, index) => (
                            <div key={index} className="space-y-2 bg-[#F8FCFF] rounded-2xl md:p-6 p-4 text-left">
                                <div className='m-7'>
                                    <div className='mb-6'>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#0b305b] font-heading mb-9">{item.title}</h3>
                                    <p className="text-md text-[#164377] font-paragraph">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Philosophy;

