// HomePage.js
import React from 'react';
import NavBar from './comp/Navbar';
import Carousel from './comp/Carousel';
import NewestItems from './comp/NewestItems';
import CateringSection from './comp/CateringSection';
import DeliveryLocations from './comp/DeliveryLocations';
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
