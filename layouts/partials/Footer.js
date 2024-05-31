// components/Footer.js
import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center mb-2">
          <span className="text-lg">Find us on</span>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <FaInstagram className="text-pink-600 text-2xl" />
          </a>
        </div>
        <div className="text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} All rights reserved by Festival Inovasi
          Karya Kehutanan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
