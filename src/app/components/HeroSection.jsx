"use client";

import React from "react";
import Image from "next/image";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import InternshipItem from "./InternshipItem";
const internships = [
  {
    title: "Software Engineer Intern",
    company: "OKSI",
    date: "Apr 2024 - Current",
    description:
      "Designed LLM-backed assistant for filling SCIF forms by integrating RAG, LLaMA, AWQ, LoRA.",
    imageSrc: "/images/oksi_logo.jpeg",
    link: "https://oksi.ai",
  },
  {
    title: "FTTP",
    company: "Jane Street Capital",
    date: "Mar 2024 - Mar 2024",
    description:
      "Selected to explore Jane Street’s trading models through classes, games, and simulations.",
    imageSrc: "/images/jslogocolored.jpeg",
    link: "https://www.janestreet.com",
  },
  {
    title: "Machine Learning Intern",
    company: "EIC Lab @ Georgia Tech",
    date: "Sep 2023 - Current",
    description:
      "Optimized custom GraphSAGE models using PyTorch to enhance GNN node classification.",
    imageSrc: "/images/eiclab.png",
    link: "https://eiclab.scs.gatech.edu/",
  },
  {
    title: "Data Science Intern",
    company: "Park Lab @ UC Irvine",
    date: "Aug 2022 - Sep 2023",
    description:
      "Analyzed correlations between AMPA exposure, hormonal blood levels and c-reactive proteins.",
    imageSrc: "/images/ucischoolimage.jpeg",
    link: "https://faculty.sites.uci.edu/parklab/",
  },
  {
    title: "Software Engineer Intern",
    company: "Softcom Lab",
    date: "Apr 2023 - Jul 2023",
    description:
      "Designed a training pipeline for fine-tuning YOLOv5 on custom data with QLoRA.",
    imageSrc: "/images/softcomlab.png",
    link: "https://github.com/softcom-lab",
  },
  {
    title: "Coding Instructor",
    company: "Code Ninjas",
    date: "Jan 2023 - Aug 2023",
    description:
      "Taught software fundamentals and coding frameworks (Javascript, Python, Unity).  ",
    imageSrc: "/images/codeninjas.jpg",
    link: "https://github.com/softcom-lab",
  },
];

const HeroSection = () => {
  return (
    <div className="scale-down-wrapper">
      <div className="flex flex-col items-center mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
          <Image
            src="/images/calvin.jpeg"
            alt="hero image"
            className="rounded-full bg-black"
            width={150}
            height={150}
          />
          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <h1 className="text-white mb-2 text-xl sm:text-2xl lg:text-3xl">
              Calvin Huang
            </h1>
            <p className="text-[#ADB7BE] text-md sm:text-md lg:text-md mb-4">
              Computer Science Student @{" "}
              <a
                href="https://www.gatech.edu/"
                target="_blank"
                className="link"
              >
                Georgia Tech
              </a>
            </p>
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <a
                href="/images/calvin_huang_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-3 py-2 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white text-xs sm:text-xs">
                  Resume
                </button>
              </a>
              <div className="icon-container">
                <a
                  href="https://www.linkedin.com/in/ccalvinhuang"
                  target="_blank"
                  className="icon-link"
                >
                  <BsLinkedin color="#a3a3a3" size={18} />
                </a>
                <a
                  href="https://github.com/ccalvinhhuang"
                  target="_blank"
                  className="icon-link"
                >
                  <BsGithub color="#a3a3a3" size={18} />
                </a>
                <a href="mailto:chuang482@gatech.edu" className="icon-link">
                  <CgMail color="#a3a3a3" size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2
          id="experience"
          className="text-white text-2xl mb-4 mt-10 mx-auto text-center"
        >
          Experience
        </h2>
        <div className="mt-10">
          {internships.map((internship, index) => (
            <InternshipItem
              key={index}
              title={internship.title}
              company={internship.company}
              date={internship.date}
              description={internship.description}
              imageSrc={internship.imageSrc}
              link={internship.link}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .scale-down-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          overflow: auto;
          box-sizing: border-box;
        }
        .scale-down-container {
          transform: scale(0.8); /* Adjust this value as needed */
          transform-origin: top center; /* Adjust the origin if needed */
        }
        .link {
          color: #daa520;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .link:hover {
          color: #ffd700; /* Change to a lighter gold on hover */
          transform: scale(1.1); /* Slightly enlarge the link */
        }

        .icon-container {
          display: flex;
          gap: 10px;
        }

        .icon-link {
          color: #a3a3a3;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .icon-link:hover {
          color: #000000;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
