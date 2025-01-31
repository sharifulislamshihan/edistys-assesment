"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const FutureOfFinance = () => {

    // Detect Scroll Position
    const { scrollY } = useScroll();

    // Smoother and slower scroll animation
    const yOffsetRaw = useTransform(scrollY, [0, 500], [0, -50]); // Moves objects slower
    const yOffset = useSpring(yOffsetRaw, { damping: 10, stiffness: 50 }); // Adds smoothness

    // Shining animation for icons
    const shineAnimation = {
        animate: {
            opacity: [0.4, 1, 0.4], // Glowing effect
            scale: [1, 1.05, 1], // Slight pulsing
            transition: {
                duration: 2, // Smooth timing
                repeat: Infinity, // Loop
                repeatType: "reverse", // Ping-pong effect
            },
        },
    };

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* First Feature */}
                <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
                    <div>
                        <div className="text-lg font-heading font-bold text-[#1f80f0] mb-6 uppercase tracking-wider">Powering the future of finance</div>
                        <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#0b305b] font-semibold font-heading mb-8">Uncovering new ways to delight customers</h2>


                        {/* paragraph */}
                        <div className="hidden md:block">
                            <p className="text-[#164377] font-semibold font-paragraph text-lg mb-10">
                                AsnTech is revolutionizing financial technology by introducing innovative solutions that enhance customer
                                servicing capabilities, specifically designed to meet financial services.
                            </p>
                            <p className="text-[#164377] font-normal font-paragraph text-lg">
                                Our modern approach transforms traditional banking and card processing systems, empowering you with the
                                most advanced technology for world class service delivery.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-full w-full md:mt-40 ">

                        {/* Background Layer (Behind the Image) */}
                        <motion.img
                            src="/WaveLinesDesktop4.svg"
                            className="absolute -top-4 lg:-top-60 sm:left-10 md:left-0 lg:-left-10  sm:w-2/5 md:w-full lg:w-full lg:h-full"
                            style={{ y: yOffset }}
                        />

                        <img
                            src="/future.png"
                            alt="Customer Service"
                            className=" w-4/5 md:w-full lg:w-4/5 relative object-center mx-auto md:mx-0 shadow-lg"
                        />

                        {/* Floating Icons */}
                        <motion.img
                            src="/card.svg"
                            alt="Icon 1"
                            className="absolute top-24 left-2 md:-left-10 w-16 lg:w-20 h-16 lg:h-20"
                            style={{ y: yOffset }}
                            {...shineAnimation}
                        />
                        <motion.img
                            src="/stock.svg"
                            alt="Icon 2"
                            className="absolute top-1/3 left-16 md:left-10 w-20 lg:w-24 h-20 lg:h-24"
                            style={{ y: yOffset }}
                            {...shineAnimation}
                        />
                        <motion.img
                            src="/rent.svg"
                            alt="Icon 3"
                            className="absolute top-20 -right-1 md:-right-10 lg:right-14 w-24 lg:w-30 h-24 lg:h-30"
                            style={{ y: yOffset }}
                            {...shineAnimation}
                        />

                        {/* Foreground Layer (Above the Image) */}
                        <motion.img
                            src="/WaveLinesDesktop2.svg"
                            className="absolute top-48 md:-bottom-20 lg:bottom-28 md:right-5 w-5/6 -left-1 blur-sm"
                            style={{ y: yOffset }}
                        />

                        <div className=" my-20 lg:my-0" />
                        <p className="text-[#164377] font-semibold font-paragraph text-lg mb-10 md:hidden">
                            AsnTech is revolutionizing financial technology by introducing innovative solutions that enhance customer
                            servicing capabilities, specifically designed to meet financial services.
                        </p>
                        <p className="text-[#164377] font-normal font-paragraph text-lg md:hidden">
                            Our modern approach transforms traditional banking and card processing systems, empowering you with the
                            most advanced technology for world class service delivery.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FutureOfFinance;