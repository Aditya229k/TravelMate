import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#ffffff' : '#121212';
    document.body.style.color = darkMode ? '#000000' : '#ffffff';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TravelMate</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Services">Our Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button
              className={`btn btn-sm me-3 ${darkMode ? 'btn-light' : 'btn-dark'}`}
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a className="btn btn-outline-light me-2" href="/login">Log In</a>
            <a className="btn btn-primary" href="/register">Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
