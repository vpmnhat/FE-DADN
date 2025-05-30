import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Nếu bạn dùng React Router
import './SignupPage.css';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: API register
    // thành công => navigate('/confirmation');
    navigate('/confirmation');
  };

  return (
    <div className="signup-page">
      <h1 className="signup-title">SIGN UP</h1>
      <div className="signup-container">
        <form onSubmit={handleRegister} className="signup-form">
          <label>Username</label>
          <input
            type="text"
            placeholder="e.g. John"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="johnsmall@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="signup-button">
            Register
          </button>
        </form>
        <p className="signup-footer">
          Already got an account?{' '}
          {/* Nếu dùng React Router, dùng <Link>; nếu không, dùng <a> */}
          <Link to="/login" className="login-link">
            log in.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
