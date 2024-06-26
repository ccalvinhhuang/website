"use client";

import React from "react";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import ScrollingText from "../components/ScrollingText";
import InternshipItem from "../components/InternshipItem";

const internships = [
  {
    title: "Software Engineer Intern",
    company: "OKSI",
    date: "Apr 2024 - Current",
    description:
      "Designed LLM-backed assistant for filling SCIF forms by integrating RAG, LLaMA, AWQ, LoRA.",
    imageSrc: "/images/oksi_logo.jpeg",
    link: "https://oksi.ai", // Example link
  },
  {
    title: "FTTP",
    company: "Jane Street Capital",
    date: "Mar 2024 - Mar 2024",
    description:
      "Selected to explore Jane Street’s trading models through classes, games, and simulations.",
    imageSrc: "/images/jslogocolored.jpeg",
    link: "https://www.janestreet.com", // Example link
  },
  {
    title: "Machine Learning Intern",
    company: "EIC Lab @ Georgia Tech",
    date: "Sep 2023 - Current",
    description:
      "Optimized custom GraphSAGE models using PyTorch to enhance GNN node classification.",
    imageSrc: "/images/eiclab.png",
    link: "https://eiclab.scs.gatech.edu/", // Example link
  },
  {
    title: "Data Science Intern",
    company: "Park Lab @ UC Irvine",
    date: "Aug 2022 - Sep 2023",
    description:
      "Analyzed correlations between AMPA exposure, hormonal blood levels and c-reactive proteins.",
    imageSrc: "/images/ucischoolimage.jpeg",
    link: "https://faculty.sites.uci.edu/parklab/", // Example link
  },
  {
    title: "Software Engineer Intern",
    company: "Softcom Lab",
    date: "Apr 2023 - Jul 2023",
    description:
      "Designed a training pipeline for fine-tuning YOLOv5 on custom data with QLoRA.",
    imageSrc: "/images/softcomlab.png",
    link: "https://github.com/softcom-lab", // Example link
  },
];
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
            Computer Science Student @{" "}
            <a href="https://www.gatech.edu/" target="_blank" className="link">
              Georgia Tech
            </a>
            <style jsx>{`
              .link {
                color: #daa520;
                text-decoration: none;
                transition: color 0.3s ease, transform 0.3s ease;
              }

              .link:hover {
                color: #ffd700; /* Change to a lighter gold on hover */
                transform: scale(1.1); /* Slightly enlarge the link */
              }
            `}</style>
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
            <div className="icon-container">
              <a
                href="https://www.linkedin.com/in/ccalvinhuang"
                target="_blank"
                className="icon-link"
              >
                <BsLinkedin color="#a3a3a3" size={25} />
              </a>
              <a
                href="https://github.com/ccalvinhhuang"
                target="_blank"
                className="icon-link"
              >
                <BsGithub color="#a3a3a3" size={25} />
              </a>
              <a href="mailto:chuang482@gatech.edu" className="icon-link">
                <CgMail color="#a3a3a3" size={30} />
              </a>
              <style jsx>{`
                .icon-container {
                  display: flex;
                  gap: 10px;
                }

                .icon-link {
                  color: #a3a3a3;
                  transition: color 0.3s ease, transform 0.3s ease;
                }

                .icon-link:hover {
                  color: #000000; /* Change to a darker color on hover */
                  transform: scale(1.1); /* Slightly enlarge the icon */
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-white text-3xl mb-4 mt-10 mx-auto text-center">
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
  );
};

export default HeroSection;
