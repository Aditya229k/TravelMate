import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  return (
    <div className="home-section d-flex justify-content-center align-items-center">
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_1280.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2021/11/22/20/32/nature-6817376_1280.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2023/05/03/19/57/passau-7968535_1280.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 4"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
