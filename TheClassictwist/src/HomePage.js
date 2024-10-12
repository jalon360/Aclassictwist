// HomePage.js
import React from 'react';
import NavBar from './comp/Navbar';
import Carousel from './comp/ControlledCarousel';
import NewestItems from './comp/NewestItems';
import CateringSection from './comp/CateringSection';
import DeliveryLocations from './comp/DeliveryLocations';
import Footer from './comp/Footer';

const HomePage = () => (
  <div className="bg-white">
    <NavBar />
    <Carousel />
    
    <Footer />
  </div>
);

export default HomePage;
