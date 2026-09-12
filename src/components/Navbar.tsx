import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-8 py-4 flex items-center justify-between">
      {/* Left: Brand Logo + Name */}
      <div className="flex items-center gap-3 cursor-pointer">
        {/* Changed from 'D' to 'DS' */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
          DS
        </div>
        <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
          Dev Stack
        </span>
      </div>

      {/* Center: Nav Links */}
      <ul className="flex items-center gap-8 font-medium text-gray-700">
        <li><a href="#home" className="hover:text-pink-600 transition-colors">Home</a></li>
        <li><a href="#technologies" className="hover:text-pink-600 transition-colors">Technologies</a></li>
        <li><a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a></li>
        <li><a href="#about" className="hover:text-pink-600 transition-colors">About</a></li>
        <li><a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a></li>
      </ul>

      {/* Right: Sign In & Sign Up Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-gray-700 font-semibold px-4 py-2 hover:text-pink-600 transition-colors">
          Sign In
        </button>
        <button className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 shadow-md hover:opacity-90 transition-opacity">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;