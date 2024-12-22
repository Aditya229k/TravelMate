import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login() {
  const handleGoogleLogin = () => {
    // Add logic for Google login integration here
    alert('Google login clicked!');
  };

  return (
    <div className="auth-container">
      <h2 className="auth-heading">Log In</h2>
      <form className="auth-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Log In</button>
      </form>
      <div className="google-login">
        <button className="btn btn-outline-danger w-100 mt-3" onClick={handleGoogleLogin}>
          <i className="bi bi-google"></i> Log in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
