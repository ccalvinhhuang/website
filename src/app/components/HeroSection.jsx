import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Calvin Huang</h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
                        CS @ Georgia Tech | AI/ML Researcher
                    </p>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="bg-black w-[250px] h-[250px] relative">
                    <Image
                        src = "/images/hero-image.jpeg"
                        alt = "hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width = {300}
                        height = {300}
                    />
                </div>
                
            </div>
        </section>
    )
};

export default HeroSection;