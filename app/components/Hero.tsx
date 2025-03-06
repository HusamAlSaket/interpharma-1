import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/70"></div>
      </div>

      {/* Orange accent elements - decorative */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400"></div>
      <div className="absolute top-1/3 left-10 w-24 h-24 bg-orange-500 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 blur-xl"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white text-center px-6 py-16">
        <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-6 mt-8 border border-orange-500/30">
          Leading Pharmaceutical Research
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Innovating Healthcare for a
          <span className="block mt-2 text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">
            Better Tomorrow
          </span>
        </h1>

        <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          InterPharma One is committed to advancing pharmaceutical research and
          providing cutting-edge healthcare solutions. Our team is dedicated to
          improving the quality of life through science and innovation.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300 font-medium flex items-center group"
          >
            Discover Our Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          <Link
            href="/about-us"
            className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300"
          >
            About Us
          </Link>
        </div>

        {/* Optional statistics bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/5">
            <h3 className="text-3xl font-bold text-orange-400">7+</h3>
            <p className="text-gray-300 mt-1">Years of Excellence</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/5">
            <h3 className="text-3xl font-bold text-orange-400">100+</h3>
            <p className="text-gray-300 mt-1">Projects Completed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/5">
            <h3 className="text-3xl font-bold text-orange-400">15+</h3>
            <p className="text-gray-300 mt-1">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
