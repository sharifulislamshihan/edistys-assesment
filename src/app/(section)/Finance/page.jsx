"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const data = [
    {
        title: "Purpose-built financial services",
        subtitle: "CUSTOMER FOCUSED",
        description:
            "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
        extra:
            "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
        image: "/customer1.png",
    },
    {
        title: "Adaptable financial solutions",
        subtitle: "AGILE AND ADAPTABLE",
        description:
            "Optimize financial workflows with adaptable, technology-driven solutions for evolving customer needs.",
        extra:
            "Stay ahead with cutting-edge AI-driven financial insights and predictive analytics.",
        image: "/agile1.png",
    },
    {
        title: "Regulatory compliance solutions",
        subtitle: "COMPLIANCE READY",
        description:
            "Ensure compliance with global regulations while maintaining operational efficiency.",
        extra:
            "Leverage real-time auditing tools and automated risk assessment to safeguard your business.",
        image: "/manage2.png",
    },
    {
        title: "Secure and reliable financial systems",
        subtitle: "SECURE AND SAFE",
        description:
            "Enhance security and reliability in financial transactions with state-of-the-art encryption and fraud prevention.",
        extra:
            "Implement advanced security protocols and real-time monitoring for risk mitigation.",
        image: "/highly3.png",
    },
];


const Finance = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Autoplay every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-14">
                <h2 className="text-lg font-heading font-bold text-[#1f80f0] mb-6 uppercase tracking-wider">
                    TECHNOLOGY BUILT FOR YOU
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#0b305b] font-semibold font-heading mb-8">
                    The future of finance
                </h2>
            </div>

            {/* Pagination (Only on Desktop) */}
            <div className="hidden lg:flex justify-center mb-10 space-x-4">
                {data.map((item, index) => (
                    <button
                        key={index}
                        className={`px-10 py-4 rounded-full text-lg font-paragraph font-medium mb-14 transition-all ${currentIndex === index
                            ? "bg-[#b9d9ff] text-[#1f80f0]"
                            : "bg-white text-[#1f80f0] hover:bg-blue-50"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        {item.subtitle}
                    </button>
                ))}
            </div>

            {/* Carousel */}
            <div className="relative mx-8 mb-10 w-full h-[400px] md:h-[800px] lg:h-[500px] overflow-hidden shadow-lg rounded-xl">
                <div className="flex transition-transform duration-500 ease-in-out ">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full absolute transition-opacity duration-500 ${currentIndex === index ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-lg rounded-xl h-fixed px-8 py-12 bg-white">
                                {/* Text Content */}
                                <div>
                                    <h4 className="text-blue-500 font-heading font-bold uppercase mb-3 lg:mb-7">
                                        {item.subtitle}
                                    </h4>
                                    <h2 className="text-4xl lg:text-5xl font-heading font-semibold text-gray-900 mb-3 lg:mb-7">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600 mt-4 font-paragraph font-bold text-md md:text-lg mb-3 lg:mb-7">
                                        {item.description}
                                    </p>
                                    <p className="text-gray-600 mt-4 font-paragraph font-semibold text-sm lg:text-md mb-5">{item.extra}</p>
                                </div>

                                {/* Image */}
                                <div className=" w-full flex justify-center pb-5">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                        className="w-[250px] h-auto sm:w-[350px] md:w-[658px] lg:w-[490px] lg:h-[425px] rounded-lg object-cover pb-7"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Finance;

