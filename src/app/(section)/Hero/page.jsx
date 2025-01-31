import { Button } from '@/components/ui/button';
import React from 'react';

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-400/90 z-10" />
                <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Vt31cfAD1uyITMR33qm9XJLNdrodo.png')] bg-cover bg-center" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="pt-32 pb-20 md:pt-40 md:pb-32">
                    <div className="text-center md:text-left md:max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Embrace the future of finance
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                            Reimagine financial services with high-tech smart platforms, unleashed banking solution that powers
                            transformation
                        </p>
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                            Watch Our Story
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;