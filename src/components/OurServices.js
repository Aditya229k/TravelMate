import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurServices.css';

function OurServices() {
  const destinations = [
    { name: "Manali", img: "https://cdn.pixabay.com/photo/2020/02/04/19/02/manali-4819132_1280.jpg" },
    { name: "Switzerland", img: "https://cdn.pixabay.com/photo/2020/02/26/19/40/snow-4882626_1280.jpg" },
    { name: "Paris", img: "https://cdn.pixabay.com/photo/2021/11/17/15/07/paris-6803796_1280.jpg" },
    { name: "Dubai", img: "https://cdn.pixabay.com/photo/2018/02/17/22/31/city-3161105_1280.jpg" },
    { name: "Maldives", img: "https://cdn.pixabay.com/photo/2017/03/31/04/15/maldives-2190384_1280.jpg" },
    { name: "New York", img: "https://cdn.pixabay.com/photo/2022/11/07/20/23/new-york-7577186_1280.jpg" },
    { name: "Tokyo", img: "https://cdn.pixabay.com/photo/2019/04/20/11/39/japan-4141578_1280.jpg" },
    { name: "Bali", img: "https://cdn.pixabay.com/photo/2013/11/16/13/58/temple-211558_1280.jpg" },
  ];

  return (
    <div className="services-section container mt-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {destinations.map((destination, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className="card service-card">
              <img
                src={destination.img}
                className="card-img-top"
                alt={destination.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{destination.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
