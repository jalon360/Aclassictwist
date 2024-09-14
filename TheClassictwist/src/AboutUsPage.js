// AboutUsPage.js
import React from 'react';
import NavBar from './comp/Navbar';
import Footer from './comp/Footer';


const AboutUsPage = () => (
  <div className="bg-white">
    <NavBar />
    <div className="banner bg-gray-200 p-4 text-center">About Us Banner</div>
    <div className="ceo text-center p-4">
      <img src="ceo.jpg" alt="CEO" className="mx-auto mb-2" />
      <p>CEO Summary</p>
    </div>
    <Footer />
  </div>
);

export default AboutUsPage;
