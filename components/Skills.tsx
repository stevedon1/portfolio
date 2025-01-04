"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-gray-800 mb-6 text-center"
      >
        Skills (Technical)
      </motion.p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
        {/* Skill 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <Image
            src="/images/nextjs.jpeg"
            alt="Next.js icon"
            width={100}
            height={100}
            className="rounded-md"
          />
          <p className="text-gray-800 font-semibold text-lg">Next.js</p>
        </motion.div>

        {/* Skill 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <Image
            src="/images/react js.png"
            alt="React.js icon"
            width={100}
            height={100}
            className="rounded-md"
          />
          <p className="text-gray-800 font-semibold text-lg">React.js</p>
        </motion.div>

        {/* Skill 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <Image
            src="/images/tailwind css.png"
            alt="Tailwind CSS icon"
            width={100}
            height={100}
            className="rounded-md"
          />
          <p className="text-gray-800 font-semibold text-lg">Tailwind CSS</p>
        </motion.div>

        {/* Skill 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <Image
            src="/images/express node.jpg"
            alt="Express.js icon"
            width={100}
            height={100}
            className="rounded-md"
          />
          <p className="text-gray-800 font-semibold text-lg">Express.js</p>
        </motion.div>

        {/* Skill 5 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <Image
            src="/images/mongodb.png"
            alt="MongoDB icon"
            width={100}
            height={100}
            className="rounded-md"
          />
          <p className="text-gray-800 font-semibold text-lg">MongoDB</p>
        </motion.div>

        {/* Skill 6 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <Image
            src="/images/JavaScript.png"
            alt="JavaScript icon"
            width={100}
            height={100}
            className="rounded-md"
          />
          <p className="text-gray-800 font-semibold text-lg">JavaScript</p>
        </motion.div>

        {/* Skill 7 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <Image
            src="/images/css.jpg"
            alt="CSS icon"
            width={100}
            height={100}
            className="rounded-md"
          />
          <p className="text-gray-800 font-semibold text-lg">CSS</p>
        </motion.div>

        {/* Skill 8 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <Image
            src="/images/html.png"
            alt="HTML icon"
            width={100}
            height={100}
            className="rounded-md"
          />
          <p className="text-gray-800 font-semibold text-lg">HTML</p>
        </motion.div>
      </div>
    </div>
  );
}
