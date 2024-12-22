import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer d-flex justify-content-between align-items-center">
      <div className="footer-text">
        &copy; {new Date().getFullYear()} TravelMate. All Rights Reserved.
      </div>
      <div className="footer-icons">
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="Instagram"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="Twitter"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          aria-label="LinkedIn"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
