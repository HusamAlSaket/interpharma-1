"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-orange-50 border-t border-orange-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="mb-6 md:mb-0 group">
            <h1 className="text-2xl font-bold text-gray-800 relative">
              Logo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-300 rounded-full group-hover:w-full transition-all duration-500"></span>
            </h1>
            {/* 
              Or replace the text above with an <img> tag:
              <img src="/logo.png" alt="Logo" className="h-8" />
            */}
          </div>

          <nav className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {['About Us', 'Our Services', 'Contact Us', 'Blog Posts', 'FAQs'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-gray-600 hover:text-orange-500 relative group overflow-hidden px-1"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-300 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="flex space-x-5">
            {[
              { Icon: FaFacebookF, url: "https://www.facebook.com" },
              { Icon: FaLinkedinIn, url: "https://www.linkedin.com" },
              { Icon: FaInstagram, url: "https://www.instagram.com" }
            ].map(({ Icon, url }, index) => (
              <Link
                key={index}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-orange-500 relative group"
              >
                <span className="absolute inset-0 bg-orange-100 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                <Icon className="relative z-10 text-lg transition-transform duration-300 group-hover:scale-110" />
              </Link>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-orange-200/50 to-transparent"></div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p className="mb-4 md:mb-0">© {currentYear} InterPharma One, Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <Link 
                key={item}
                href="#" 
                className="text-gray-500 hover:text-orange-500 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;