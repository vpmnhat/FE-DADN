import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Dùng React Router để điều hướng
import './GardenPage.css';
import logo from '../assets/logo.png';  // Điều chỉnh đường dẫn logo

// Chart.js setup
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Đăng ký các thành phần của chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function GardenPage() {
  const navigate = useNavigate();

  // Dữ liệu chart (demo)
  const chartData = {
    labels: [
      '00:00',
      '02:30',
      '05:00',
      '07:30',
      '10:00',
      '12:30',
      '15:00',
      '17:30',
      '20:00',
      '22:30',
    ],
    datasets: [
      {
        label: 'Temperature (smoothed)',
        data: [0.4, 0.35, 0.45, 0.55, 0.7, 0.72, 0.68, 0.64, 0.7, 0.65],
        borderColor: 'orange',
        backgroundColor: 'orange',
        tension: 0.3,
      },
      {
        label: 'Humidity (smoothed)',
        data: [0.55, 0.52, 0.48, 0.35, 0.45, 0.58, 0.65, 0.7, 0.68, 0.6],
        borderColor: 'dodgerblue',
        backgroundColor: 'dodgerblue',
        tension: 0.3,
      },
      {
        label: 'Light Level (smoothed)',
        data: [0.55, 0.65, 0.7, 0.6, 0.54, 0.48, 0.42, 0.5, 0.57, 0.45],
        borderColor: 'crimson',
        backgroundColor: 'crimson',
        tension: 0.3,
      },
    ],
  };

  // Tuỳ chọn chart
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Sensors data past 24 hours',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (HH:MM)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Normalized smoothed values',
        },
        min: 0.3,
        max: 0.8,
      },
    },
  };

  // Giả lập data readings & summary
  const currentReadings = {
    lightLevel: 4000,
    temperature: 33,
    humidity: 70,
    power: 60,
    lastMeasured: '22:30',
  };

  const summary = {
    maxTemp: 40,
    minTemp: 28,
    avgTemp: 33,
    maxHum: 80,
    minHum: 40,
    avgHum: 60,
    maxLight: 5000,
    minLight: 1250,
    avgLight: 3000,
  };

  // Quản lý tab record / change log
  const [activeTab, setActiveTab] = useState('record'); // 'record' hoặc 'changelog'
  const records = [
    {
      time: '2025-3-24 4:56 GMT',
      temperature: '40°C',
      humidity: '40%',
      light: '1020Lx',
      power: '5Wh'
    },
    {
      time: '2025-3-24 6:10 GMT',
      temperature: '35°C',
      humidity: '45%',
      light: '2050Lx',
      power: '8Wh'
    },
    {
      time: '2025-3-24 9:05 GMT',
      temperature: '30°C',
      humidity: '50%',
      light: '3000Lx',
      power: '10Wh'
    },
  ];
  const changeLogs = [
    {
      time: '2025-3-24 3:00 GMT',
      detail: 'Changed light level from auto to 80% manual.'
    },
    {
      time: '2025-3-23 21:30 GMT',
      detail: 'Adjusted humidity threshold to 50%.'
    },
  ];

  // Giả lập logout
  const handleLogout = () => {
    // clear session...
    navigate('/login');
  };

  // Filter records / logs
  const handleFilter = () => {
    console.log('Filtering by date...');
    // Thêm logic tuỳ ý
  };

  return (
    <div className="garden-page">
      {/* Header */}
      <header className="gp-header">
        <div className="gp-header-left">
          <img src={logo} alt="GreenHouse Logo" className="gp-header-logo" />
        </div>
        <div className="gp-header-right">
          <span className="gp-username">Netan</span>
          <button onClick={handleLogout} className="gp-logout-button">
            Log Out
          </button>
        </div>
      </header>

      {/* Nội dung */}
      <div className="gp-content">
        {/* Cột chính: Chart, Readings, Summary */}
        <div className="gp-main-column">
          <h2 className="gp-section-title">Sensors data past 24 hours</h2>
          <div className="gp-chart-container">
            <Line data={chartData} options={chartOptions} />
          </div>

          {/* Current readings */}
          <div className="gp-readings">
            <h3>Current readings</h3>
            <p>Light level: {currentReadings.lightLevel}Lx</p>
            <p>Temperature: {currentReadings.temperature}°C</p>
            <p>Humidity: {currentReadings.humidity}%</p>
            <p>Power consumption: {currentReadings.power}Wh</p>
            <p>Last measured: {currentReadings.lastMeasured}</p>
          </div>

          {/* Summary */}
          <div className="gp-summary">
            <h3>Summary</h3>
            <p>Maximum temperature: {summary.maxTemp} °C</p>
            <p>Minimum temperature: {summary.minTemp} °C</p>
            <p>Average temperature: {summary.avgTemp} °C</p>
            <p>Maximum humidity: {summary.maxHum} %</p>
            <p>Minimum humidity: {summary.minHum} %</p>
            <p>Average humidity: {summary.avgHum} %</p>
            <p>Maximum light level: {summary.maxLight}Lx</p>
            <p>Minimum light level: {summary.minLight}Lx</p>
            <p>Average light level: {summary.avgLight}Lx</p>
          </div>
        </div>

        {/* Cột phải: Record & Change log */}
        <div className="gp-right-column">
          <h2>Records and Change log</h2>
          <div className="gp-tabs">
            <button
              className={`gp-tab ${activeTab === 'record' ? 'active' : ''}`}
              onClick={() => setActiveTab('record')}
            >
              Record
            </button>
            <button
              className={`gp-tab ${activeTab === 'changelog' ? 'active' : ''}`}
              onClick={() => setActiveTab('changelog')}
            >
              Change Log
            </button>
          </div>

          {/* Filter thời gian */}
          <div className="gp-date-filter">
            <label>
              Start date
              <input type="date" />
            </label>
            <label>
              End date
              <input type="date" />
            </label>
            <button onClick={handleFilter} className="gp-filter-button">
              Filter
            </button>
          </div>

          {/* Danh sách record / change log */}
          <div className="gp-log-list">
            {activeTab === 'record' &&
              records.map((item, idx) => (
                <div key={idx} className="gp-log-card">
                  <p><strong>Time:</strong> {item.time}</p>
                  <p>Temperature: {item.temperature}</p>
                  <p>Humidity: {item.humidity}</p>
                  <p>Light level: {item.light}</p>
                  <p>Power consumption: {item.power}</p>
                </div>
              ))}

            {activeTab === 'changelog' &&
              changeLogs.map((log, idx) => (
                <div key={idx} className="gp-log-card">
                  <p><strong>Time:</strong> {log.time}</p>
                  <p>{log.detail}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Cột Control Panel (demo) */}
        <div className="gp-control-panel">
          <h2>Control Panel</h2>
          <p>&lt;&lt; Control Option &gt;&gt;</p>
        </div>
      </div>
    </div>
  );
}

export default GardenPage;
