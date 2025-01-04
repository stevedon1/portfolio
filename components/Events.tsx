"use client";
import React from "react";
import { motion } from "framer-motion";
import EventsSlideShow from "./EventsSlideShow";

export default function Events() {
  return (
    <div className="min-h-auto md:min-h-screen flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-50 p-4 sm:p-8 md:p-16">
      {/* Left Section: Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Slide in from the left
        whileInView={{ opacity: 1, x: 0 }} // Animate to position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }} // Trigger animation only once
        className="w-full md:w-1/2 text-left mb-8 md:mb-0"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Networking:
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          I have been able to attend several Networking Tech Events. They are a
          good platform to learn what others are doing, collaborate, and share
          knowledge.
        </p>
      </motion.div>

      {/* Right Section: Sliding Images */}
      <motion.div
        initial={{ opacity: 0, x: 50 }} // Slide in from the right
        whileInView={{ opacity: 1, x: 0 }} // Animate to position
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Smooth transition with delay
        viewport={{ once: true }} // Trigger animation only once
        className="w-full md:w-1/2"
      >
        <EventsSlideShow />
      </motion.div>
    </div>
  );
}
