// app/projects/page.js
import React from "react";
import Navbar from "../components/Navbar";

const projects = [
  {
    title: "[WIP] Roommate Schedule Coordinator",
    description:
      "Full Stack App to coordinate schedules and assign tasks between roommates",
    image: "/images/roommate-schedule.png",
  },
  {
    title: "[WIP] International Talent Finder",
    description:
      "Start up business idea to connect international students in India with small companies in the US",
    image: "/images/talent-finder.png",
  },
  {
    title: "E-Commerce Store Page",
    description: "Full Stack Web Application of an E-Commerce page",
    image: "/images/ecommerce-store.png",
  },
  {
    title: "Personal Portfolio Website",
    description: "This website!",
    image: "/images/personal-portfolio.png",
  },
  {
    title: "Android Studio Dungeon Crawler Game",
    description: "Video game built with 4 other classmates as part of CS2340",
    image: "/images/dungeon-crawler.png",
  },
];

const Projects = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center text-white mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 text-white p-4 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl mb-2">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
