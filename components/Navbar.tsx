"use client";
import Link from 'next/link';
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
          <Link href="/">StivDon</Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden text-lg md:text-xl md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="my-projects" className="hover:text-gray-300">Projects</Link>
          <Link href="contact-me" className="hover:text-gray-300">Contact</Link>
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
          <Link href="/" onClick={closeMenu} className="block p-2 text-white text-xl text-center hover:text-gray-300">Home</Link>
          <Link href="my-projects" onClick={closeMenu} className="block p-2 text-white text-xl text-center hover:text-gray-300">Projects</Link>
          <Link href="contact-me" onClick={closeMenu} className="block p-2 text-white text-xl text-center hover:text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}
