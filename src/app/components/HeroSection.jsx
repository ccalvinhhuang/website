import React from "react";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const HeroSection = () => {
  return (
    <section className="flex">
      <div className="flex gap-24 sm:flex-row mt-10 mx-auto">
        <div className="flex items-center col-span-6 sm:col-span-1 lg:mt-6">
          <div className="bg-black w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative rounded-full overflow-hidden">
            <Image
              src="/images/hero-image.jpeg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="col-span-5 sm:col-span-11 place-self-center text-center sm:text-left mt-20">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl">
            Calvin Huang
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
            CS @ Georgia Tech | AI/ML Researcher
          </p>
          <div className="flex items-center sm:justify-start space-x-4">
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
              Resume
            </button>
            <BsLinkedin color="#a3a3a3" size={25} />
            <BsGithub color="#a3a3a3" size={25} />
            <CgMail color="#a3a3a3" size={25} />
          </div>
        </div>
      </div>
      <div className="mt-10 mx-auto">
        <h2 className="text-white text-3xl mb-4">Experiences</h2>
        <div className="text-white mb-10">
          <h3 className="text-xl mb-2">Machine Learning Intern</h3>
          <p className="text-[#ADB7BE] mb-4">EIC Lab @ Georgia Tech | Sept 2023 - Current</p>
          <p className="text-base mb-10">Description of your responsibilities and achievements.</p>
        </div>
        <div className="text-white">
          <h3 className="text-xl mb-2">Data Analyst</h3>
          <p className="text-[#ADB7BE] mb-4">Park Lab @ UC Irvine | Aug 2022 - Sept 2023</p>
          <p className="text-base mb-10">Description of your responsibilities and achievements.</p>
        </div>
        <div className="text-white">
          <h3 className="text-xl mb-2">Software Development Engineer Intern</h3>
          <p className="text-[#ADB7BE] mb-4">SoftCom Lab @ Cal Poly Pomona | Dec 2021 - July 2023</p>
          <p className="text-base">Description of your responsibilities and achievements.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;