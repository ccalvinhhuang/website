import React from "react";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const HeroSection = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-24">
        <Image
          src="/images/calvin.jpeg"
          alt="hero image"
          className="rounded-full bg-black"
          width={200}
          height={200}
        />
        <div className="text-center sm:text-left mt-5">
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl">
            Calvin Huang
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            CS Student @{" "}
            <a
              href="https://www.gatech.edu/"
              target="_blank"
              style={{ color: "#DAA520" }}
            >
              Georgia Tech
            </a>{" "}
            | ML Fanatic
          </p>
          <div className="flex items-center justify-center sm:justify-start space-x-4">
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
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-48">
            <div>
              <h3 className="text-xl mb-2">Software Engineer Intern</h3>
              <p className="text-[#ADB7BE] mb-4">OKSI | Apr 2024 - Cur</p>
              <p className="text-base mb-10 w-96">
                Designed an LLM-backed assistant for filling SCIF forms by
                integrating RAG with LLaMA-3, increasing accuracy by 53%.
              </p>
            </div>
            <div className="flex justify-center w-full -mt-20">
              <Image
                src="/images/oksi_logo.jpeg"
                alt="eic image"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="text-white mb-10">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-48">
            <div>
              <h3 className="text-xl mb-2">FTTP</h3>
              <p className="text-[#ADB7BE] mb-4">
                Jane Street Capital | Mar 2024 - Mar 2024
              </p>
              <p className="text-base mb-10 w-96">
                1 of 100 undergrads selected to learn about Jane Street’s
                trading models through classes, games, and simulations.
              </p>
            </div>
            <div className="flex justify-center w-full -mt-20">
              <Image
                src="/images/jslogocolored.jpeg"
                alt="eic image"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="text-white mb-10">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-48">
            <div>
              <h3 className="text-xl mb-2">Machine Learning Intern</h3>
              <p className="text-[#ADB7BE] mb-4">
                EIC Lab @ Georgia Tech | Sep 2023 - Cur
              </p>
              <p className="text-base mb-10 w-96">
                Optimized custom GraphSAGE models using PyTorch and DGL,
                enhancing GNN node classification accuracy by up to 5%.
              </p>
            </div>
            <div className="flex justify-center w-full -mt-20">
              <Image
                src="/images/eiclab.png"
                alt="eic image"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="text-white mb-10">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-48">
            <div>
              <h3 className="text-xl mb-2">Data Science Intern</h3>
              <p className="text-[#ADB7BE] mb-4">
                Park Lab @ UC Irvine | Aug 2022 - Sep 2023
              </p>
              <p className="text-base mb-10 w-96">
                Analyzed relationships between glyphosate/AMPA exposure, blood
                levels of sex hormones and c-reactive proteins.
              </p>
            </div>
            <div className="flex justify-center w-full -mt-20">
              <Image
                src="/images/ucischoolimage.jpeg"
                alt="park image"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="text-white mb-10">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-48">
            <div>
              <h3 className="text-xl mb-2">Software Engineer Intern</h3>
              <p className="text-[#ADB7BE] mb-4">
                Softcom Lab | Apr 2023 - Jul 2023
              </p>
              <p className="text-base mb-10 w-96">
                Migrated a training pipeline from a Keras-based model to a
                no-code solution for fine-tuning YOLOv5 on custom data.
              </p>
            </div>
            <div className="flex justify-center w-full -mt-20">
              <Image
                src="/images/softcomlab.png"
                alt="softcomlab image"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-white text-3xl mb-4 mx-auto text-center">Projects</h2>
    </div>
  );
};

export default HeroSection;
