"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed w-full bg-[#1f80f0] lg:bg-transparent text-white py-7 top-0 lg:absolute lg:pt-[17px] lg:pb-[25px] text-res-body-p1 lg:text-body-p1 z-[9999]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <Image
                            src="/navLogo.svg"
                            alt="AnyTech"
                            width={200}
                            height={100}
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="space-x-8">
                            <Link href="#" className="text-white hover:text-blue-600">
                                Solutions
                            </Link>
                            <Link href="#" className="text-white hover:text-blue-600">
                                Services
                            </Link>
                            <Link href="#" className="text-white hover:text-blue-600">
                                About Us
                            </Link>
                            <Button variant="outline" className="mr-2">
                                EN
                            </Button>
                        </div>
                        <div>
                            <Button className="bg-blue-600 text-white hover:bg-blue-700">Contact Us</Button>
                        </div>
                    </div>

                    {/* Mobile and Tablet menu button */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile and Tablet Menu with smooth slide animation */}
                <div
                    className={`fixed top-0 right-0 bg-[#1f80f0] w-full h-1/2 z-[9998] transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
                        }`}
                >
                    <div className="flex justify-end p-7">
                        <button onClick={() => setIsOpen(false)} className="text-white">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                            Solutions
                        </Link>
                        <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                            Services
                        </Link>
                        <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                            About Us
                        </Link>
                        <div className="flex flex-col space-y-2 px-3 py-2">
                            <Button variant="outline" className="w-full justify-center">
                                EN
                            </Button>
                            <Button className="w-full justify-center bg-blue-600 text-white hover:bg-blue-700">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
