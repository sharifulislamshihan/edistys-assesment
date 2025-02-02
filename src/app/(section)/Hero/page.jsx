"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Animation on load
const particleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
    float: {
        y: [0, -10, 0],
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
        },
    },
};

// Floating animation based on cursor
const FloatingImage = ({ src, width, height, initialX, initialY, blur }) => {
    const [position, setPosition] = useState({ x: initialX, y: initialY });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: initialX + e.clientX * 0.015,
                y: initialY + e.clientY * 0.015,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [initialX, initialY]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            whileHover="float"
            variants={particleVariants}
            className={`absolute hidden md:block ${blur ? "blur-md opacity-50" : ""}`}
            style={{ left: position.x, top: position.y }}
        >
            <Image src={src} alt="Floating Element" width={width} height={height} />
        </motion.div>
    );
};

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden">
            {/* Blue Background */}
            <div className="absolute top-0 left-0 w-full h-[70%] md:h-full bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC]"></div>

            {/* Floating Elements (Only 1 visible on tab/mobile, all on desktop) */}
            <FloatingImage src="/backgrounds/WaveLinesDesktop1.svg" width={500} height={500} initialX={50} initialY={100} blur />
            <FloatingImage src="/backgrounds/WaveLinesMobile1.svg" width={500} height={500} initialX={200} initialY={200} />
            <FloatingImage src="/backgrounds/WaveLinesMobile2.svg" width={500} height={500} initialX={100} initialY={400} />
            <FloatingImage src="/backgrounds/ctaMobileWaveLines.svg" width={120} height={120} initialX={300} initialY={300} blur />

            {/* Content (Centered on mobile, left on desktop) */}
            <div className="relative z-10 w-full px-6 md:px-20 text-center md:text-left max-w-[900px]">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Embrace the Future of Finance
                </h1>
                <p className="text-lg lg:text-xl mt-4">
                    Reimagine financial services with AnyTech’s open platform.
                </p>
                <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition">
                    Reach Out to Us
                </button>
            </div>

            {/* Image Under Content (In Tab/Mobile) & Right Side in Desktop */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }}
                className="absolute bottom-0 md:absolute md:bottom-[-50px] right-10 md:right-[10%] lg:right-[15%] w-[60%] md:w-[40%] flex justify-center"
            >
                <Image
                    src="/women.png"
                    alt="Business Woman"
                    width={400}
                    height={400}
                    className="w-full  object-contain"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
