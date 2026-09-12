import React from 'react';
// If you placed the image in src/assets/, import it like this:
import bannerStack from '../assets/banner-stack.png'; 

const Hero: React.FC = () => {
  return (
    <section className="px-16 py-24 bg-white flex items-center justify-between">
      {/* Left Content */}
      <div className="max-w-2xl">
        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex items-center gap-4">
          <button className="px-8 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 shadow-md hover:opacity-90 transition-opacity">
            Explore Technologies
          </button>
          <button className="px-8 py-3.5 rounded-full text-gray-700 font-semibold border-2 border-gray-300 hover:border-pink-500 hover:text-pink-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Visual: 3D Stack Illustration */}
      <div className="flex items-center justify-center">
        <img 
          src={bannerStack} 
          alt="Banner Stack Architecture" 
          className="w-[420px] h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;