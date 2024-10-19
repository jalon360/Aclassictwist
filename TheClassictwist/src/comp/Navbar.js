import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal routing
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTheme } from '../ThemeContext'; // Import the useTheme hook

const NavBar = () => {
  const { toggleTheme, theme } = useTheme(); // Get toggleTheme and current theme from context
  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">Classic Twist</Link>
        <button className="lg:hidden px-2 py-1">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/menu" className="hover:underline">Menu</Link>
          <Link to="/catering" className="hover:underline">Catering</Link>
          <Link to="/about-us" className="hover:underline">About Us</Link>
          <button
            onClick={toggleTheme}
            className="bg-transparent border border-white rounded px-2 py-1"
          >
            {theme === 'light' ? '🌙' : '🌞'}
          </button>
        {/*<NavDropdown title="More" id="nav-dropdown" className="hover:underline">
          <NavDropdown.Item as={Link} to="/testimonials">Testimonials</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
        </NavDropdown>*/}
      </div>
    </div>
  </nav>
  );
};
export default NavBar;
