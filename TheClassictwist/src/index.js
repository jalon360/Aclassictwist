// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import Tailwind CSS
import App from './App';
import { ThemeProvider } from './ThemeContext'; // Import the ThemeProvider

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
