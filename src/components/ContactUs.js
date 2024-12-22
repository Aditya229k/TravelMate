import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}, for reaching out! We'll get back to you soon.`);
    setFormData({ name: '', email: '', query: '' }); // Reset form after submission
  };

  return (
    <div className="contact-us-section d-flex justify-content-center align-items-center">
      <div className="card contact-card">
        <h2 className="card-title text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">
              Your Query
            </label>
            <textarea
              className="form-control"
              id="query"
              name="query"
              rows="4"
              value={formData.query}
              onChange={handleChange}
              required
              placeholder="Write your query here"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
