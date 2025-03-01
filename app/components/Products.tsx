import React from 'react';
import Link from 'next/link';

const Products = () => {
  return (
    <section id='products' className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-3">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
            Explore Our Comprehensive <span className="text-orange-600">Pharmaceutical</span> Products
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-lg">
            At InterPharma One, we offer a diverse range of pharmaceutical
            products tailored to meet industry standards. Our commitment to
            quality assurance ensures every product is reliable and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-orange-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Control</h3>
            <div className="w-10 h-1 bg-orange-200 mb-4 rounded-full"></div>
            <p className="text-gray-700">
              Our pharmaceutical products undergo rigorous quality control testing to ensure they meet the highest standards for safety and efficacy.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-orange-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Certified Solutions</h3>
            <div className="w-10 h-1 bg-orange-200 mb-4 rounded-full"></div>
            <p className="text-gray-700">
              Our products are certified by relevant health authorities and comply with international pharmaceutical standards and regulations.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-orange-500">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Research Innovation</h3>
            <div className="w-10 h-1 bg-orange-200 mb-4 rounded-full"></div>
            <p className="text-gray-700">
              We continuously invest in research and development to create innovative pharmaceutical products that address evolving healthcare needs.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link href="/products" legacyBehavior>
            <a className="inline-block px-8 py-4 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition-colors duration-300 font-semibold text-lg">
              View All Products
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;