// Footer.js
import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'; // Import icons from React Icons

const Footer = () => (
  <footer className="bg-red p-4 text-white text-center">
    <div className="flex justify-center space-x-6 mb-4"> {/* Use flexbox to align items */}
      <p className="mr-4">
        Contact us at Email: 
        <a href="mailto:classictwistllc@gmail.com" className="underline"> classictwistllc@gmail.com</a>
      </p>
      <p>
        Phone: 770-648-3886
      </p>
    </div>
    <div className="flex justify-center space-x-6"> {/* Use flexbox to align icons */}
      <a href="https://www.instagram.com/theclassic_twist/?igsh=YjB2djBoMjBnMTZx" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <FaInstagram className="text-xl" /> {/* Increased icon size for visibility */}
      </a>
      <a href="https://m.facebook.com/aclassic.twist.5/" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <FaFacebookF className="text-xl" /> {/* Increased icon size for visibility */}
      </a>
      <a href="https://www.tiktok.com/@aclassic_twist?_t=8qTrCMgI7oZ&_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <FaTiktok className="text-xl" /> {/* Increased icon size for visibility */}
      </a>
    </div>
  </footer>
);

export default Footer;
