"use client";
import { useState } from 'react';

export default function Navbar() {
  // State to toggle the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-indigo-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">StivDon</a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden text-lg md:text-xl md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            <span className="block w-6 h-0.5 bg-white mb-2"></span>
            <span className="block w-6 h-0.5 bg-white mb-2"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when isOpen is true) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-indigo-700 py-4 z-50">
          <a href="#home" onClick={closeMenu} className="block text-white text-center hover:text-gray-300">Home</a>
          <a href="#about" onClick={closeMenu} className="block text-white text-center hover:text-gray-300">About</a>
          <a href="#projects" onClick={closeMenu} className="block text-white text-center hover:text-gray-300">Projects</a>
          <a href="#contact" onClick={closeMenu} className="block text-white text-center hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
}
