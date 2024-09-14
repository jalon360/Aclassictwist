// HomePage.js
import React from 'react';
import NavBar from './NavBar';
import Carousel from './Carousel';
import NewestItems from './NewestItems';
import CateringSection from './CateringSection';
import DeliveryLocations from './DeliveryLocations';
import Footer from './Footer';

const HomePage = () => (
  <div className="bg-white">
    <NavBar />
    <Carousel />
    <NewestItems />
    <CateringSection />
    <DeliveryLocations />
    <Footer />
  </div>
);

export default HomePage;
