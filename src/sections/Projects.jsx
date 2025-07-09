import React from "react";
import exampleImage from "../assets/images/grain.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "PodWise",
    description:
      "An AI-powered podcast note generator that converts audio into structured summaries. Built with Node.js, React, and OpenAI.",
    image: exampleImage,
    codeLink: "#",
    liveLink: "#",
  },
  {
    id: 2,
    title: "Wait For It",
    description:
      "A suspense-themed portfolio with toggleable panels, minimal UI, and orbit animations crafted with Tailwind & Framer Motion.",
    image: exampleImage,
    codeLink: "#",
    liveLink: "#",
  },
];

const Projects = () => {
  return (
    <div id="project" className="py-16 px-4 sm:px-6 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4"
      >
        My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-lg mx-auto mb-8 sm:mb-12 text-sm sm:text-base"
      >
        A showcase of full-stack applications that blend thoughtful design with
        robust engineering.
      </motion.p>

      <div className="grid gap-6 md:gap-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-10 md:mx-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group rounded-xl overflow-hidden shadow-xl border border-white/10 backdrop-blur"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              loading="lazy"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                {project.description}
              </p>
              <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4 flex-wrap justify-center">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm transition"
                >
                  View Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white hover:bg-white hover:text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
