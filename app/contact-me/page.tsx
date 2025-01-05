"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function ContactMe() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-600">
          I'd love to hear from you! Feel free to reach out with any questions, ideas, or opportunities.
        </p>
      </div>

      {/* Contact Form */}
      <form
        className="space-y-4 w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          alert("Form submitted successfully!");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">
          Email:{" "}
          <a href="mailto:stevowny@gmail.com" className="text-indigo-600 hover:underline">
            stevowny@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-700">
          Phone:{" "}
          <a href="tel:+254716169318" className="text-indigo-600 hover:underline">
            +254716169318
          </a>
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-indigo-600 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800 transition"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500 transition"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </div>
  );
}
