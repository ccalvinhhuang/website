import React from "react";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const HeroSection = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="flex gap-24">
        <Image
          src="/images/hero-image.jpeg"
          alt="hero image"
          className="rounded-full bg-black"
          width={200}
          height={200}
        />
        <div className="text-center sm:text-left mt-5">
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl">
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
      <h2 className="text-white text-3xl mb-4 mt-10 mx-auto text-center">
        Experience
      </h2>
      <div className="mt-10">
        <div className="text-white mb-10">
          <div className="flex gap-36">
            <div>
              <h3 className="text-xl mb-2">Machine Learning Intern</h3>
              <p className="text-[#ADB7BE] mb-4">
                EIC Lab @ Georgia Tech | Sept 2023 - Current
              </p>
              <p className="text-base mb-10">
                Description of your responsibilities and achievements.
              </p>
            </div>
            <Image
              src="/images/eiclab.png"
              alt="eic image"
              width={150}
              height={25}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        </div>
        <div className="text-white mb-10">
          <div className="flex gap-36">
            <div>
              <h3 className="text-xl mb-2">Data Analyst Intern</h3>
              <p className="text-[#ADB7BE] mb-4">
                Park Lab @ UC Irvine | Aug 2022 - Sept 2023
              </p>
              <p className="text-base mb-10">
                Description of your responsibilities and achievements.
              </p>
            </div>
            <Image
              src="/images/ucischoolimage.jpeg"
              alt="uci image"
              width={150}
              height={25}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        </div>
        <div className="text-white mb-10">
          <div className="flex gap-36">
            <div>
              <h3 className="text-xl mb-2">Software Engineering Intern</h3>
              <p className="text-[#ADB7BE] mb-4">
                Cal Poly Pomona | Dec 2021 - Jul 2023
              </p>
              <p className="text-base mb-10">
                Description of your responsibilities and achievements.
              </p>
            </div>
            <Image
              src="/images/calpolyimage.png"
              alt="cal poly image"
              width={150}
              height={25}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
