import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      {/* Main Container */}
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Brand Name */}
          <div className="text-3xl font-bold text-white mb-4 md:mb-0">
            <Link href="/">StivDon</Link>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link href="/" className="hover:text-indigo-500 transition">
              Home
            </Link>
            <Link href="/contact-me" className="hover:text-indigo-500 transition">
              Contact Me
            </Link>
            <Link href="/my-projects" className="hover:text-indigo-500 transition">
              Projects
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6">
          <div className="mb-4 md:mb-0">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:stevowny@gmail.com"
                className="hover:text-indigo-500 transition"
              >
                stevowny@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+254114228361"
                className="hover:text-indigo-500 transition"
              >
                0114228361
              </a>
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://wa.me/254114228361"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500 transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/steve-dongich"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/stevedon1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://x.com/SDongich"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()} StivDon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
