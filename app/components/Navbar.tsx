"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          <Image src="/logo.svg" alt="Logo" width={100} height={50} />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/about-us" className="text-white hover:text-orange-300 transition-all">About Us</Link>
          <Link href="/services" className="text-white hover:text-orange-300 transition-all">Our Services</Link>
          <Link href="/products" className="text-white hover:text-orange-300 transition-all">Our Products</Link>
          <Link href="/contact-us" className="text-white hover:text-orange-300 transition-all">Contact us</Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-white shadow-md">
          <Link href="#about" className="block py-2">About Us</Link>
          <Link href="#services" className="block py-2">Our Services</Link>
          <Link href="#products" className="block py-2">Our Products</Link>
          <Link href="#more" className="block py-2">More Info</Link>
          <Link href="/signup" className="block py-2 bg-purple-600 text-white text-center rounded-lg">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
