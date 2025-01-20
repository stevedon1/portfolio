"use client";

import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        "service_cv0h90q", // Replace with your EmailJS Service ID
        "template_y3rn0fy", // Replace with your EmailJS Template ID
        formRef.current!, // Reference to the form element
        "y-xM7nvnl3Tdnp3VL" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          formRef.current?.reset(); // Clear form after successful submission
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-600">
          I would love to hear from you! Feel free to reach out with any questions, ideas, or opportunities.
        </p>
      </div>
      <form
        className="space-y-4 w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
        ref={formRef}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="name" // Add name attribute
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="email"
          name="user_email" // Add name attribute
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <textarea
          name="message" // Add name attribute
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
      <div className="flex justify-center gap-4 mt-6">
        <a
          href="https://www.linkedin.com/in/steve-dongich"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-indigo-600 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/stevedon1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800 transition"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://x.com/SDongich"
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
