"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutMeTopSection() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 md:p-16 rounded-lg shadow-lg max-w-4xl mx-auto flex flex-col justify-center">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Start hidden and slide in from the left
        whileInView={{ opacity: 1, x: 0 }} // Become visible and slide to position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
        viewport={{ once: true }} // Trigger animation once
        className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
      >
        <div className="flex-shrink-0">
          <Image
            src="/images/dongich profile.jpg"
            alt="profile pic"
            width={400}
            height={9}
            className="rounded-md border-4 border-indigo-500"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            I am Stephen Odongo
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            A JavaScript pro. I use JavaScript to build anything. I leverage
            JavaScripts rich and popular frameworks to make me more productive
            and deliver optimized solutions.
          </p>
          <p className="text-indigo-600 mt-2 text-lg font-semibold">
            Next.js, React.js, Express.js with Node.js
          </p>
        </div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start hidden and slide in from below
        whileInView={{ opacity: 1, y: 0 }} // Become visible and slide up
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Add slight delay
        viewport={{ once: true }} // Trigger animation once
        className="mt-8"
      >
        <p className="text-gray-700 text-lg leading-relaxed">
          I have a deep passion for programming and tech in general. I started
          my journey in July 2022.{" "}
          <span className="block mt-2">
            This is after dropping a course I had done for 2 years — Petroleum Chemistry —
            and deciding to pursue a Computer Science degree at Kisii University.
          </span>
        </p>
        <p className="text-gray-700 text-lg mt-4">
          My goal is to apply my tech skills in providing solutions to the
          problems we face in Africa.
        </p>
      </motion.div>
    </div>
  )
}
