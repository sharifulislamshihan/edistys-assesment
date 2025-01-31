"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-transparent text-white max-lg:bg-blue-main max-lg:py-8 top-0 lg:absolute w-full lg:pt-[17px] lg:pb-[25px] text-res-body-p1 lg:text-body-p1 z-[9999]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            ASN TECH
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#" className="text-gray-700 hover:text-blue-600">
                            Solutions
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-blue-600">
                            Services
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-blue-600">
                            About Us
                        </Link>
                        <Button variant="outline" className="mr-2">
                            EN
                        </Button>
                        <Button className="bg-blue-600 text-white hover:bg-blue-700">Contact Us</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
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
                )}
            </div>
        </nav>
    );
};

export default Navbar;