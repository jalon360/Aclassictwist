// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LaunchPage from './LaunchPage';
import HomePage from './HomePage';
import CateringPage from './CateringPage';
import AboutUsPage from './AboutUsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LaunchPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/catering" element={<CateringPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  </Router>
);

export default App;
