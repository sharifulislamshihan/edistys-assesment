"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';

const Partner = () => {
    const brands = [
        '/brand1.webp',
        '/brand2.webp',
        '/brand3.webp',
        '/brand4.webp',
        '/brand5.webp',
        '/brand6.webp',
        '/brand7.webp',
        '/brand8.webp',
        '/brand9.webp',
        '/brand10.webp',
        '/brand11.webp',
        '/brand12.webp',
        '/brand13.webp',
        '/brand14.webp',
        '/brand15.webp',
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Desktop and Tablet View */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                {brands.map((brand, index) => (
                    <div key={index} className="flex items-center justify-center p-4 transition-shadow duration-300 rounded-lg">
                        <Image
                            src={brand}
                            alt={`Brand ${index + 1}`}
                            width={500}
                            height={500}
                            className="w-full h-full object-contain "
                        />
                    </div>
                ))}
            </div>

            {/* Mobile View Carousel */}
            <div className="md:hidden">
                <Swiper
                    slidesPerView={2.2}
                    spaceBetween={20}
                    grabCursor={true}
                    loop={true}
                    className="mySwiper"
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center p-4 h-20">
                                <Image
                                    src={brand}
                                    alt={`Brand ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-contain my-auto"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Partner;