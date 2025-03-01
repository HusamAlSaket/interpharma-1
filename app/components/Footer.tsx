"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Logo</h1>
            {/* 
              Or replace the text above with an <img> tag:
              <img src="/logo.png" alt="Logo" className="h-8" />
            */}
          </div>

          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Our Services
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Blog Posts
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              FAQs
            </Link>
          </nav>

          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        <div className="mt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {currentYear} InterPharma One, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
