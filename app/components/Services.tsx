import { services } from "@/data";
import React from "react";

const Services = () => {
  return (
    <section className="bg-gradient-to-br from-white to-orange-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-3 border border-orange-200">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 text-gray-800">
            Comprehensive Pharmaceutical 
            <span className="block mt-2 text-orange-500">Quality Assurance Services</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-600 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            At InterPharma One, we specialize in delivering top-notch pharmaceutical development and quality
            assurance services. Our expertise ensures that your products meet the highest standards of
            safety and efficacy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg border-l border-orange-500 hover:border-l-4 transition-all duration-300"
            >
              {/* Top accent decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 opacity-75"></div>
              
              {/* Decorative circle */}
              <div className="absolute -right-16 -bottom-16 w-40 h-40 bg-orange-500 rounded-full opacity-5 group-hover:scale-125 transition-transform duration-500"></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 pl-16">
                  {service.description}
                </p>
                <div className="mt-6 pl-16">
                  <button className="text-orange-600 hover:text-orange-500 text-sm font-medium flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;