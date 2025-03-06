import React from "react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            Get in Touch with <span className="text-orange-500">Our Team</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg">
            Have questions or need more information? Contact us today and our team will get back to you as soon
            as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-orange-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Phone</h3>
            <div className="w-10 h-1 bg-orange-200 mb-4 rounded-full"></div>
            <p className="text-gray-300">
              +(962) 6515 1133
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-orange-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
            <div className="w-10 h-1 bg-orange-200 mb-4 rounded-full"></div>
            <p className="text-gray-300">
              info@interpharmaone.com
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-orange-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Address</h3>
            <div className="w-10 h-1 bg-orange-200 mb-4 rounded-full"></div>
            <p className="text-gray-300">
              Amman, Jordan
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link
            href="/contact-us"
            className="inline-block px-8 py-4 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition-colors duration-300 font-semibold text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;