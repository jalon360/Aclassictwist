// HomePage.js
import React from 'react';
import NavBar from './comp/Navbar';
import Carousel from './Carousel';
import NewestItems from './NewestItems';
import CateringSection from './CateringSection';
import DeliveryLocations from './DeliveryLocations';
import Footer from './comp/Footer';

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
