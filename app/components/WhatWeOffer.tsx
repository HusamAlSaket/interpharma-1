"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { offerings } from "@/data";
import { Autoplay, Pagination } from "swiper/modules";

const WhatWeOffer = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          What We Offer
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our range of expert pharmaceutical services designed to meet industry standards.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {offerings.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="group perspective-1000">
              <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front Side: Image */}
                <div className="absolute inset-0 backface-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                {/* Back Side: Title & Description */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white p-6 rounded-lg shadow-lg rotate-y-180 backface-hidden">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <h3 className="text-xl font-semibold md:w-1/3 text-center md:text-left">
                      {offer.title}
                    </h3>
                    <p className="text-sm md:w-2/3 text-center md:text-left">
                      {offer.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatWeOffer;
