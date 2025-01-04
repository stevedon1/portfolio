"use client";
import React from "react";
import { motion } from "framer-motion";
import YogatImgSlideShow from "./YogatImgSlideShow";

export default function Business() {
  return (
    <div className="bg-gray-50 p-8 sm:p-16">
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8"
      >
        Business & Entrepreneurship
      </motion.h1>

      {/* Content Section */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
      <YogatImgSlideShow />
        {/* Right Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700"
        >
          <p className="text-lg leading-relaxed mb-4">
            I have 5+ years in the Business World.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I tried several types of businesses but ended up with selling yoghurts. It's a good business for me with good management skills.
          </p>
          {/* Additional Sections */}
          <div className="mt-8 space-y-4">
            <p className="text-xl font-semibold">
              <span className="font-bold">Sales and Marketing:</span> I have managed to market and sell yoghurts together with other products and it successfully worked.
            </p>
            <p className="text-xl font-semibold">
              <span className="font-bold">Team Leadership:</span> I have managed to successfully lead a team of 4 in my business — Production and Sales of yoghurt. We managed to do the most yoghurt production and sales ever.
            </p>
            <p className="text-xl font-semibold">
              <span className="font-bold">Problem Solving:</span> I like deconstructing problems into smaller sub-problems and then analyze and solve them from there. I like the first principle thinking started by Aristotle — Ancient Philosopher and then popularized by Elon Musk.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
