import React from 'react';
import { Link } from 'react-router-dom';
import classicLogo from './comp/assets/cropclassic.png'; // Adjust the path as needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const LaunchPage = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center h-100 bg-black text-white">
      <div className="text-center">
        <img 
          src={classicLogo} 
          alt="Classic Twist Logo"
          className="img-fluid mb-4 max-w-[80%] h-auto transition-transform transform hover:scale-105"
        />
        <p className="text-xl mb-6 animate-bounce">Welcome to the Adventure!</p>
        <Link to="/home">
          <button 
            className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-110 active:scale-100"
            aria-label="Continue to home"
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-blue-400 rounded-full opacity-50 transform scale-0 animate-ping"></span>
              Continue
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LaunchPage;
