import React from "react";
import grainImage from "../assets/images/grain.jpg";
import memojiImage from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg?react";
import StarIcon from "../assets/icons/star.svg?react";
import SparkleIcon from "../assets/icons/sparkle.svg?react";
import HeroOrbit from "../components/HeroOrbit";

const Hero = () => {
  return (
    <div
      className="py-20 md:py-48 lg:py-40 min-w-screen relative z-0 font-lato overflow-hidden"
      id="heroSection"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_1%,black_68%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* HERO RINGS */}
        <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_insert] shadow-emerald-300/5 border-2 size-[400px] md:size-[500px] lg:size-[700px]" />
        <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_insert] shadow-emerald-300/5 border-2 size-[500px] md:size-[600px] lg:size-[900px]" />
        <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_insert] shadow-emerald-300/5 border-2 size-[650px] md:size-[800px] lg:size-[1100px]" />

        {/* ORBITS */}
        {[
          // DRY for orbits — same as your original
          {
            size: 690,
            rotation: 0,
            icon: <StarIcon className="size-12 text-emerald-300" />,
          },
          {
            size: 810,
            rotation: 98,
            icon: <StarIcon className="size-8 text-emerald-300" />,
          },
          {
            size: 430,
            rotation: -30,
            icon: <StarIcon className="size-8 text-emerald-300/40" />,
          },
          {
            size: 440,
            rotation: 79,
            icon: <SparkleIcon className="size-5 opacity-20" />,
          },
          {
            size: 658,
            rotation: -30,
            icon: <SparkleIcon className="size-6 text-emerald-300/20" />,
          },
          {
            size: 530,
            rotation: 165,
            icon: <SparkleIcon className="size-5 text-emerald-300/20" />,
          },
          {
            size: 520,
            rotation: 25,
            icon: <SparkleIcon className="size-5 text-emerald-300" />,
          },
          {
            size: 515,
            rotation: 285,
            icon: <SparkleIcon className="size-5 text-emerald-300" />,
          },
          {
            size: 665,
            rotation: 255,
            icon: <SparkleIcon className="size-7 text-emerald-300/20" />,
          },
          {
            size: 817,
            rotation: 265,
            icon: <SparkleIcon className="size-10 text-emerald-300" />,
          },
        ].map(({ size, rotation, icon }, i) => (
          <HeroOrbit
            key={i}
            size={size}
            rotation={rotation}
            shouldOrbit
            orbitDuration="70s"
            shouldSpin
            spinDuration="70s"
          >
            {icon}
          </HeroOrbit>
        ))}
      </div>

      <div className="lg:max-w-5xl max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center ">
          <img
            src={memojiImage}
            className="w-20 h-20 md:w-32 md:h-32"
            alt="person sitting with laptop"
          />
          <div className="gap-2 bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center rounded-lg text-sm md:text-base">
            <div className="relative flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>
            </div>
            <div className="font-medium">Available For New Projects</div>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <h1 className="font-lato text-2xl text-center mt-6 tracking-wide md:text-5xl">
            Udhaya Parameshwaran
          </h1>
          <p className="mt-3 text-center text-white/70 capitalize text-sm md:text-lg">
            I specialise in transforming design into functional,
            high-performance web applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-3 flex-wrap">
          <button className="inline-flex gap-2 items-center border border-white/15 px-5 py-2 rounded-xl text-sm md:text-base">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-5 md:size-6" />
          </button>
          <a href="#" target="_blank" className="relative z-50">
            <button className="inline-flex items-center gap-2 border border-white text-gray-900 bg-white px-5 py-2 rounded-xl text-sm md:text-base">
              <span className="font-semibold">About Me | Resume</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
