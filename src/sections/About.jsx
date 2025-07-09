import React, { useRef } from "react";
import { motion } from "framer-motion";
import learnImg from "../assets/images/Learning.svg";
import mapImg from "../assets/images/map.jpg";
import smileMemoji from "../assets/images/memoji-smile.png";
import leetcodeImg from "../assets/images/leetcode.svg";
import devImg from "../assets/images/dev-ecosystem.png";

const isLarge = window.screen.width > 600;

const hobbies = [
  {
    title: "Leetcode",
    emoji: leetcodeImg,
    left: "5%",
    top: "0%",
    link: "#",
  },
  {
    title: "LinkedIn",
    emoji:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
    left: "35%",
    top: "5%",
    link: "#",
  },
  {
    title: "Github",
    emoji:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    left: "20%",
    top: "50%",
    link: "#",
  },
  {
    title: "Vercel",
    emoji:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    left: "50%",
    top: "50%",
    link: "#",
  },
];

const About = () => {
  const constraintRef = useRef(null);

  return (
    <section className="py-10" id="about">
      <div className="max-w-6xl mx-3 md:mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 mb-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-3xl md:ml-30 p-4 md:p-6 relative after:content-[''] after:absolute after:inset-0 z-0 after:-z-10 overflow-hidden after:outline-2 after:-outline-offset-1 after:rounded-3xl after:outline-white/20 after:pointer-events-none w-full"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 min-w-[220px]">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Current Learning
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                  <li>Mastering React & Next.js</li>
                  <li>Deep Dive into Node.js & Backend</li>
                  <li>System Design & Scalability</li>
                  <li>DSA for coding interviews</li>
                </ul>
              </div>
              {isLarge && (
                <img
                  src={learnImg}
                  alt="Current Learning"
                  className="w-32 md:w-48 object-contain mt-4 md:mt-0"
                />
              )}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-auto relative"
          >
            <img
              src={mapImg}
              alt="Map"
              className="w-90 h-60 object-cover md:ml-15 rounded-3xl object-left-top border border-white/20"
            />
            <div className="absolute -translate-x-1/4 -translate-y-1/4 top-1/2 left-1/4 size-16 md:size-20 after:content-[''] after:absolute after:inset-0  after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 rounded-3xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-300 to-sky-400 -z-10"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <img
                src={smileMemoji}
                alt="Smile Memoji"
                className="size-16 md:size-20"
              />
            </div>
          </motion.div>
        </div>

        {/* Large Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="min-h-[220px] md:w-250 mx-auto flex flex-col rounded-2xl shadow-md border border-white/20 bg-gray-800 backdrop-blur-md overflow-hidden relative"
        >
          <div className="px-4 md:px-6 py-4 md:py-6">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              Dev Ecosystem & Tech Stack Tools
            </h2>
            <p className="text-gray-300 mt-1 text-sm">
              Click to know more About Me ⬇️
            </p>
          </div>

          <div className="relative flex-1 min-h-[150px]" ref={constraintRef}>
            {hobbies.map((hobbie, i) => (
              <motion.button
                key={hobbie.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 text-xs md:px-5 md:py-2 md:text-base text-emerald-400 border border-emerald-400 rounded-full absolute shadow-lg transition-transform hover:scale-105"
                style={{
                  left: hobbie.left,
                  top: hobbie.top,
                }}
                onClick={() => window.open(hobbie.link, "_blank")}
              >
                <span>{hobbie.title}</span>
                <img src={hobbie.emoji} className="w-3 md:w-5" />
              </motion.button>
            ))}
          </div>

          {isLarge && (
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              src={devImg}
              alt="Illustration"
              className="absolute right-2 md:right-4 bottom-2 md:bottom-4 w-24 md:w-50 h-auto opacity-90"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
