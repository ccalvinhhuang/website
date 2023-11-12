import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        Calvin Huang
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
                        CS @ Georgia Tech | AI/ML Researcher
                    </p>
                    <div>
                        <button className = "px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Download Resume</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="bg-black w-[215px] h-[215px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src = "/images/hero-image.jpeg"
                            roundedCorners={5}
                            alt = "hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width = {300}
                            height = {300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;