"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { offerings } from "@/data";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";

const WhatWeOffer = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block">
          What We Offer
          <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-300 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our range of expert pharmaceutical services designed to meet industry standards.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay, EffectCards]}
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-orange-500',
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        spaceBetween={40}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto pb-12"
      >
        {offerings.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="group perspective-1000 h-80">
              <div className="relative w-full h-full transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-180">
                {/* Front Side: Image with overlays and animations */}
                <div className="absolute inset-0 backface-hidden rounded-2xl shadow-lg overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/60 before:to-transparent before:z-10">
                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-300 rounded-tl-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-300 rounded-tr-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-300 rounded-bl-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-300 rounded-br-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image */}
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {offer.title}
                    </h3>
                    <div className="w-12 h-1 bg-orange-400 rounded-full mb-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                    <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      Click to learn more
                    </p>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 z-10"></div>
                </div>
                
                {/* Back Side: Enhanced content */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-xl rotate-y-180 backface-hidden">
                  <div className="relative w-full h-full flex flex-col justify-center">
                    {/* Animated decorative elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 w-16 h-1 bg-white/30 rounded-full"></div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 relative">
                      {offer.title}
                      <span className="absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full"></span>
                    </h3>
                    <p className="text-white/90 mt-4 leading-relaxed max-w-full overflow-y-auto max-h-32">
                      {offer.description}
                    </p>
                    
                    {/* Call to action */}
                    <div className="mt-6 inline-block">
                      <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 border border-white/30 text-sm font-medium flex items-center gap-2">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom pagination style - additional styles to enhance default Swiper pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #e5e7eb;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #f97316 !important;
          width: 24px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default WhatWeOffer;