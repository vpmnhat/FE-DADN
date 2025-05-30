import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Dùng cho navigate
import './HomePage.css';
import logo from '../assets/logo.png'; // Điều chỉnh đường dẫn logo nếu khác
import { fetchGardens, fetchNotifications } from '../api';

function HomePage() {
  const navigate = useNavigate();

  // Dữ liệu garden (từ API)
  const [gardens, setGardens] = useState([]);

  // Notifications state
  const [notifications, setNotifications] = useState([]);

  // Lấy data gardens & notifications từ API khi component mount
  useEffect(() => {
    (async () => {
      try {
        const gardenData = await fetchGardens();
        setGardens(gardenData);
      } catch (err) {
        console.error('Failed to fetch gardens', err);
      }

      try {
        const notifyData = await fetchNotifications();
        setNotifications(notifyData);
      } catch (err) {
        console.error('Failed to fetch notifications', err);
      }
    })();
  }, []);

  // Đóng (xóa) một notification khỏi danh sách
  const handleCloseNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Logout -> chuyển về Login Page
  const handleLogout = () => {
    // TODO: clear session hoặc token nếu có
    navigate('/login');
  };

  // Ví dụ: chuyển sang trang Profile
  const goToProfile = () => {
    navigate('/profile');
  };

  // Ví dụ: chuyển sang trang Garden Browser
  const goToGardenBrowser = () => {
    navigate('/garden-browser');
  };

  const handleGardenClick = (gardenId) => {
    navigate(`/garden/${gardenId}`);
  };

  return (
    <div className="home-page">
      {/* HEADER */}
      <header className="home-header">
        <div className="header-left">
          <img src={logo} alt="GreenHouse Logo" className="header-logo" />
        </div>
        <div className="header-right">
          <span className="username">Netan</span>
          <button onClick={goToProfile} className="profile-button">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
          </button>
          {/* <button onClick={goToGardenBrowser} className="browser-button">
            Garden Browser
          </button> */}
          <button onClick={handleLogout} className="logout-button">
            Log Out
          </button>
        </div>
      </header>

      {/* NỘI DUNG CHÍNH */}
      <div className="home-content">
        {/* Cột Trái: My garden */}
        <div className="garden-section">
          {/* Thanh tab + Info */}
          <div className="garden-section-header">
            <div className="garden-tab active" onClick={goToGardenBrowser}>My garden</div>
            <div className="garden-info">
              <span>Total gardens: {gardens.length}</span>
              <span>Favourite garden: None</span>
            </div>
          </div>

          <h2 className="section-title">YOUR TOP GARDEN</h2>

          {/* Danh sách garden */}
          <div className="garden-list">
            {gardens.map((garden) => (
              <div
              key={garden.id}
              className="garden-card"
              onClick={() => handleGardenClick(garden.id)}
              >
                {<div key={garden.id} className="garden-card">
                <div className="garden-card-body">
                  <p>
                    <strong>Garden name:</strong> {garden.name}{' '}
                    &nbsp;&nbsp;<strong>GID:</strong> {garden.id}
                  </p>
                  <p>
                    <strong>Last time monitored:</strong> {garden.lastMonitored}
                  </p>
                  <p>
                    <strong>Location:</strong> {garden.location}
                  </p>
                  <p>
                    <strong>Description:</strong> {garden.description}
                  </p>
                </div>
                <div className="garden-card-stats">
                  <div className="stat-item">
                    <span>{garden.light}Lx</span>
                    <p>Light</p>
                  </div>
                  <div className="stat-item">
                    <span>{garden.humidity}%</span>
                    <p>Humidity</p>
                  </div>
                  <div className="stat-item">
                    <span>{garden.temperature}°C</span>
                    <p>Temp</p>
                  </div>
                  <div className="stat-item">
                    <span>GHouse</span>
                    <p>Type</p>
                  </div>
                </div>
              </div>}
              </div>
            ))}
          </div>
        </div>

        {/* Cột Phải: Notifications */}
        <div className="notification-section">
          <h2 className="section-title">NOTIFICATIONS</h2>
          <div className="notification-list">
            {notifications.map((notify) => (
              <div key={notify.id} className="notification-card">
                <button
                  className="close-button"
                  onClick={() => handleCloseNotification(notify.id)}
                >
                  ✕
                </button>
                <p>
                  <strong>{notify.title}</strong>
                </p>
                <p>
                  <em>From: {notify.from}</em>
                </p>
                <p>{notify.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
