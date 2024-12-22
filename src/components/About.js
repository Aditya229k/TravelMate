import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
  return (
    <div className="about-section d-flex justify-content-center align-items-center">
      <div className="card about-card">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">About This Page</h2>
          <p className="card-text">
            Welcome to <strong>TravelMate</strong>! Our platform is designed for travel enthusiasts who dream of exploring breathtaking destinations around the world. From the snowy peaks of Manali and Switzerland to the romantic streets of Paris and the luxury of Dubai, we bring you closer to the world's most incredible places.
          </p>
          <p className="card-text">
            Whether you're looking to relax on the serene beaches of the Maldives, marvel at the bustling streets of New York, or immerse yourself in the vibrant culture of Tokyo, we’ve got you covered. At TravelMate, we aim to make travel planning easier, more exciting, and full of possibilities. 
          </p>
          <p className="card-text">
            Explore, discover, and create unforgettable memories with us. Your next adventure starts here!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
