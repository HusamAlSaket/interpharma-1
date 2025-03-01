
  // AboutUs.jsx
  import { Suspense } from "react";
  import AboutHero from "../components/AboutHero";
  import Image from "next/image";
  
  export default function AboutUs() {
    return (
      <>
        <AboutHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-white to-orange-50">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="h-1.5 w-24 bg-orange-500 rounded-full mb-1"></div>
              <div className="h-1.5 w-16 bg-orange-300 rounded-full ml-8"></div>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Our <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Story</span>
            </h2>
            <h3 className="text-xl text-gray-600 max-w-2xl mx-auto">
              Committed to excellence in pharmaceutical research and innovation
            </h3>
          </div>
  
          <div className="relative">
            {/* Decorative elements */}
            <div className="hidden lg:block absolute -left-16 top-1/3 w-32 h-32 bg-orange-200 rounded-full opacity-50"></div>
            <div className="hidden lg:block absolute -right-20 top-2/3 w-40 h-40 bg-orange-300 rounded-full opacity-40"></div>
            
            {/* Content container */}
            <div className="relative z-10 bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10">
              {/* Content Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                
                {/* Who We Are */}
                <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl border-t-4 border-orange-500 p-8 relative">
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-orange-400 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </span>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                        Who We Are
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      We are a private pharmaceutical research company, founded in 2017 in Jordan by a team of experts with extensive experience in pharmaceutical development across the MENA region.
                    </p>
                    
                    <div className="mt-8 flex justify-center">
                      <div className="h-1 w-24 bg-orange-200 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Our Objective */}
                <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl border-t-4 border-orange-500 p-8 relative">
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-orange-400 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                        Our Objective
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Our goal is to leverage our expertise to provide top-notch services, helping clients meet their quality and growth targets in line with regional and global health authority standards.
                    </p>
                    
                    <div className="mt-8 flex justify-center">
                      <div className="h-1 w-24 bg-orange-200 rounded"></div>
                    </div>
                  </div>
                </div>
  
                {/* Our Vision - Full Width */}
                <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl border-t-4 border-orange-500 p-8 relative lg:col-span-2">
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-orange-400 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-orange-400 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </span>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                        Our Vision
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto text-lg">
                      We aspire to be a leading, innovative pharmaceutical contract research organization, creating value in the MENA region and achieving global recognition.
                    </p>
                    
                    <div className="mt-8 flex justify-center">
                      <div className="h-1 w-32 bg-orange-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Stats Section */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: "2017", label: "Founded" },
                  { number: "25+", label: "Expert Researchers" },
                  { number: "100+", label: "Completed Projects" },
                  { number: "15+", label: "Country Collaborations" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                    <div className="text-gray-500 uppercase text-sm tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="mt-16 mb-8 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl p-8 md:p-12 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-white rounded-full"></div>
              <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-white rounded-full"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Join our growing network of partners in the pharmaceutical industry 
                and benefit from our expertise in research and development.
              </p>
              <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-xl">
                Contact Us Today
              </button>
            </div>
          </div>
          
          {/* Bottom decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full"></div>
          </div>
        </div>
      </>
    );
  }