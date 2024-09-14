// CateringPage.js
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const CateringPage = () => (
  <div className="bg-white">
    <NavBar />
    <div className="banner bg-gray-200 p-4 text-center">Catering Banner</div>
    <div className="contact flex justify-center space-x-4 my-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Email</button>
      <button className="bg-green-500 text-white py-2 px-4 rounded">Phone</button>
    </div>
    <div className="events grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="event text-center">
        <img src="wedding.jpg" alt="Wedding" className="mx-auto mb-2" />
        <p>Weddings</p>
      </div>
      <div className="event text-center">
        <img src="grad.jpg" alt="Grad Party" className="mx-auto mb-2" />
        <p>Grad Party</p>
      </div>
      <div className="event text-center">
        <img src="cookout.jpg" alt="Cookout" className="mx-auto mb-2" />
        <p>Cookout/Social Outing</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default CateringPage;
