"use client"

import Link from "next/link"
import { Linkedin, Phone, Mail } from "lucide-react"

const Footer = () => {
    return (
        <div>
            <div className="bg-[#002045] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Footer Content */}
                    <div className="py-10">
                        <div className="flex flex-row items-center justify-between">
                            {/* Logo */}
                            <div className="mb-6 md:mb-0">
                                <Link href="/">
                                    <img
                                        src="/footerLogo.webp"
                                        alt="ASN TECH"
                                        className="h-8 w-auto"
                                    />
                                </Link>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex items-center space-x-8 text-lg font-medium font-paragraph">
                                <Link href="#" className="text-[#00e9ea]">
                                    Our Solutions
                                </Link>
                                <div className="border-x-0 text-[#00e9ea]"></div>
                                <Link href="#" className="text-[#00e9ea] hover:text-blue-600">
                                    AnyCaaS
                                </Link>
                                <Link href="#" className="text-[#00e9ea] hover:text-blue-600">
                                    AnyBaaS
                                </Link>
                                <Link href="#" className="text-[#00e9ea] hover:text-blue-600">
                                    AnyPaaS
                                </Link>
                            </nav>

                            {/* Mobile Social Links */}
                            <div className="flex lg:hidden space-x-6 mb-6">
                                <Link href="#" className="text-blue-500 hover:text-blue-400">
                                    <Linkedin className="h-6 w-6" />
                                </Link>
                                <Link href="#" className="text-blue-500 hover:text-blue-400">
                                    <Phone className="h-6 w-6" />
                                </Link>
                                <Link href="#" className="text-blue-500 hover:text-blue-400">
                                    <Mail className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer Bottom */}
            <div className="border-t bg-[#00152D] py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between text-sm text-gray-400 font-semibold">
                        <div className="mb-4 lg:mb-0">
                            <span className="text-[#367AFF]">©2023 All rights reserved.</span> Any Technology Pte Ltd.
                        </div>
                        <Link href="/privacy-policy" className="text-[#367AFF] hover:text-[#367AFF]/80">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;