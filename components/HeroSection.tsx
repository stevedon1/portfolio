"use client";

import React from "react";
import { loadFull } from "tsparticles"; // Load tsParticles
import Particles from "react-tsparticles";
import { ReactTyped } from "react-typed"; // Import react-typed

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-custom-purple">
      {/* Particle Background */}
      <Particles
        className="absolute inset-0"
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#11054f", // Dark gray background color
            },
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff", // White particles
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 20,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
        }}
        init={async (engine: any) => await loadFull(engine)} // Initialize full particles
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-lg md:text-xl text-white mb-8">Hi, am Steve,</p>
        {/* Headline */}
        <h1 className="text-4xl font-serif md:text-6xl font-bold text-white mb-4">
          A Full Stack Developer.
        </h1>
        {/* Tagline */}
        <p className="text-lg md:text-xl text-white mb-8">
        <ReactTyped
              strings={["I build scalable full-stack web apps using the MERN stack, with a focus on seamless user experiences and performance."]}
              typeSpeed={50} // typing speed
              backSpeed={50} // backspacing speed
              backDelay={1000} // delay before backspacing
              startDelay={1} // delay before starting typing
              loop={false} // doesn't loop after finishing
            />
        </p>
        
        {/* Buttons */}
        <div className="flex justify-evenly pt-4 mt-4 gap-6">
          <a
            href="#projects"
            className="bg-white text-lg font-bold font-sans text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300"
          >
            My Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 text-lg border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
