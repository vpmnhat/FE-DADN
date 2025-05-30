import React, { useState } from 'react';
import './LoginPage.css';
// Giả sử bạn có một file logo trong src/assets/logo.png
// hoặc bạn có thể dùng ảnh online, hoặc import SVG v.v.
import logo from '../assets/logo.png'; 
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    // TODO: gọi API kiểm tra đăng nhập
    // Nếu OK => navigate('/home');
    navigate('/home');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Logo ở trên cùng */}
        <img src={logo} alt="GreenHouse Logo" className="login-logo" />

        {/* Form đăng nhập */}
        <form onSubmit={handleSignIn} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Sign in
          </button>
          <button
            type="button"
            className="signup-button"
            onClick={handleSignUp}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
