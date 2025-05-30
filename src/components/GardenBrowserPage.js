import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Nếu dùng React Router
import './GardenBrowserPage.css';
import logo from '../assets/logo.png'; // Điều chỉnh đường dẫn logo

function GardenBrowserPage() {
  const navigate = useNavigate();

  // Dữ liệu demo
  const [gardens] = useState([
    {
      id: 10025,
      name: 'EcoRoots Garden',
      lastMonitored: '2025-03-26 14:30:00 GMT',
      location: 'Freiburg, Germany',
      description:
        'is a living laboratory dedicated to the study and conservation of biodiversity. With diverse ecosystems and native plant species, we conduct research on conse...',
      light: 5000,
      humidity: 80,
      temperature: 27,
    },
    {
      id: 70046,
      name: 'Native Bloom',
      lastMonitored: '2025-03-24 9:32:00 GMT',
      location: 'Berlin, Germany',
      description:
        'is a living laboratory dedicated to the study and conservation of biodiversity. With diverse ecosystems and native plant species, we conduct research on conse...',
      light: 2150,
      humidity: 50,
      temperature: 8,
    },
    {
      id: 81324,
      name: 'Green Tech',
      lastMonitored: '2025-03-24 19:32:00 GMT',
      location: 'Dortmund, Germany',
      description: 'is a research-driven botanical facility ...',
      light: 2100,
      humidity: 60,
      temperature: 15,
    },
  ]);

  // Từ khoá tìm kiếm
  const [searchTerm, setSearchTerm] = useState('');

  // Khi người dùng gõ search
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Lọc danh sách gardens
  const filteredGardens = gardens.filter((garden) => {
    const lowerTerm = searchTerm.toLowerCase();
    return (
      garden.name.toLowerCase().includes(lowerTerm) ||
      garden.id.toString().includes(lowerTerm)
    );
  });

  // Giả lập Logout -> chuyển về trang login
  const handleLogout = () => {
    // Clear session...
    navigate('/login');
  };

  // Giả lập Filter Options
  const handleFilterOptions = () => {
    // Mở modal, panel filter, v.v...
    console.log('Filter Options clicked');
  };

  // Ví dụ: xem chi tiết 1 garden -> /garden
  const goToGardenDetail = (gardenId) => {
    // Nếu cần param: /garden/10025
    // navigate(`/garden/${gardenId}`);
    // Tạm thời: chuyển sang /garden

    navigate('/garden/${gardenId}');
  };

  return (
    <div className="garden-browser-page">
      {/* Header */}
      <header className="gb-header">
        <div className="gb-header-left">
          <img src={logo} alt="GreenHouse Logo" className="gb-header-logo" />
        </div>
        <div className="gb-header-right">
          <span className="gb-username">Netan</span>
          <button onClick={handleLogout} className="gb-logout-button">
            Log Out
          </button>
        </div>
      </header>

      {/* Nội dung chính */}
      <div className="gb-content">
        <h1 className="gb-title">BROWSE YOUR GARDEN</h1>

        {/* Search bar & Filter */}
        <div className="gb-search-filter-row">
          <div className="gb-search-bar">
            <input
              type="text"
              placeholder="Search by name or ID"
              value={searchTerm}
              onChange={handleSearchChange}
              className="gb-search-input"
            />
            {searchTerm && (
              <button
                className="gb-clear-search"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
            <button className="gb-search-button">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          <div className="gb-filter-options" onClick={handleFilterOptions}>
            <i className="fa fa-filter" aria-hidden="true"></i>
            <span>Filter Options</span>
          </div>
        </div>

        {/* Danh sách gardens */}
        <div className="gb-garden-list">
          {filteredGardens.map((garden) => (
            <div
              key={garden.id}
              className="gb-garden-card"
              onClick={() => goToGardenDetail(garden.id)}
            >
              <div className="gb-garden-card-body">
                <p>
                  <strong>Garden name:</strong> {garden.name} &nbsp;&nbsp;
                  <strong>GID:</strong> {garden.id}
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
              <div className="gb-garden-card-stats">
                <div className="gb-stat-item">
                  <span>{garden.light}Lx</span>
                  <p>Light</p>
                </div>
                <div className="gb-stat-item">
                  <span>{garden.humidity}%</span>
                  <p>Humidity</p>
                </div>
                <div className="gb-stat-item">
                  <span>{garden.temperature}°C</span>
                  <p>Temp</p>
                </div>
                <div className="gb-stat-item">
                  <span>GHouse</span>
                  <p>Type</p>
                </div>
              </div>
            </div>
          ))}

          {/* Nếu không có garden nào khớp tìm kiếm */}
          {filteredGardens.length === 0 && (
            <p className="gb-no-result">No gardens found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GardenBrowserPage;
