import React from 'react';

const About = () => {
  return (
    <section id='about' className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-3">
            Our Story
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
            Your Trusted Partner in <span className="text-orange-600">Pharmaceutical</span> Development
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10">
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">Who We Are</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              InterPharma One, established in 2017 in Jordan, is dedicated to providing exceptional 
              quality assurance and control services across the MENA region. Our expertise in 
              pharmaceutical development ensures that our clients receive the highest standards in their projects.
            </p>
            <div className="mt-8 flex items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="ml-4 text-gray-800 font-medium">Founded in 2017 by pharmaceutical experts</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-orange-500 rounded-lg opacity-10"></div>
              <img src="/about.jpg" alt="About Us" className="rounded-lg shadow-lg relative z-10" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-orange-100 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-orange-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h3>
            <div className="w-10 h-1 bg-orange-200 mb-4 rounded-full"></div>
            <p className="text-gray-700">
              We are a private pharmaceutical research company, founded in 2017 in Jordan by a team of experts with extensive experience in pharmaceutical development across the MENA region.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-orange-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Objective</h3>
            <div className="w-10 h-1 bg-orange-200 mb-4 rounded-full"></div>
            <p className="text-gray-700">
              Our goal is to leverage our expertise to provide top-notch services, helping clients meet their quality and growth targets in line with regional and global health authority standards.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-orange-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <div className="w-10 h-1 bg-orange-200 mb-4 rounded-full"></div>
            <p className="text-gray-700">
              We aspire to be a leading, innovative pharmaceutical contract research organization, creating value in the MENA region and achieving global recognition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;