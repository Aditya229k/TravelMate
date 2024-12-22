import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Register() {
  const handleGoogleRegister = () => {
    // Add logic for Google registration integration here
    alert('Google register clicked!');
  };

  return (
    <div className="auth-container">
      <h2 className="auth-heading">Register</h2>
      <form className="auth-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
      <div className="google-register">
        <button className="btn btn-outline-danger w-100 mt-3" onClick={handleGoogleRegister}>
          <i className="bi bi-google"></i> Register with Google
        </button>
      </div>
    </div>
  );
}

export default Register;
