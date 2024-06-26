"use client";

import React from "react";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import ScrollingText from "../components/ScrollingText";

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
          </p>

          <div className="flex items-center justify-center sm:justify-start space-x-4">
            <a
              href="/images/calvin_huang_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
                Resume
              </button>
            </a>
            <BsLinkedin color="#a3a3a3" size={25} />
            <BsGithub color="#a3a3a3" size={25} />
            <CgMail color="#a3a3a3" size={30} />
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
              <p className="text-[#ADB7BE] mb-4">OKSI | Apr 2024 - Current</p>
              <p className="text-base mb-10 w-96">
                Designed LLM-backed assistant for filling SCIF forms by
                integrating RAG, LLaMA, AWQ, and LoRA.
              </p>
            </div>
            <div className="flex justify-center w-full -mt-10">
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
                Selected to explore Jane Street’s trading models through
                classes, games, and simulations.
              </p>
            </div>
            <div className="flex justify-center w-full -mt-10">
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
                EIC Lab @ Georgia Tech | Sep 2023 - Current
              </p>
              <p className="text-base mb-10 w-96">
                Optimized custom GraphSAGE models using PyTorch to enhance GNN
                node classification.
              </p>
            </div>
            <div className="flex justify-center w-full -mt-10">
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
                Analyzed correlations between AMPA exposure, hormonal blood
                levels and c-reactive proteins.
              </p>
            </div>
            <div className="flex justify-center w-full -mt-10">
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
                Designed a training pipeline for fine-tuning YOLOv5 on custom
                data with QLoRA.
              </p>
            </div>
            <div className="flex justify-center w-full -mt-10">
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
    </div>
  );
};

export default HeroSection;
