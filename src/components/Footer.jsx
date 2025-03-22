import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#04091A] pt-12 pb-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Huge Gradient Title */}
        <div className="text-center mb-10">
          <h1
            className="
              text-[72px] 
              sm:text-[100px] 
              lg:text-[200px] 
              font-extrabold 
              leading-none 
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r 
              from-purple-400 
              to-pink-600
            "
          >
            DevHire
          </h1>
        </div>
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Find your next job</h3>
            <p className="text-gray-400">
              Explore top listings and land your dream role with ease.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Hire top talent</h3>
            <p className="text-gray-400">
              Quickly connect with skilled candidates who can power your business forward.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Level up your career</h3>
            <p className="text-gray-400">
              Enhance your skillset and achieve professional growth with expert advice.
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <h4 className="text-xl font-bold text-white">DevHire</h4>
            <p className="text-gray-400">Connecting talent with opportunity</p>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-400 hover:text-white transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white transition">
              About
            </Link>
            <Link to="/JobListing" className="text-gray-400 hover:text-white transition">
              Jobs
            </Link>
            <Link to="/PostJobs" className="text-gray-400 hover:text-white transition">
              Post Job
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DevHire. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
