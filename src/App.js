// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ConfirmationPage from './components/ConfirmationPage';
import HomePage from './components/HomePage';
import UserProfilePage from './components/UserProfilePage';
import UserProfileEditPage from './components/UserProfileEditPage';
import GardenBrowserPage from './components/GardenBrowserPage';
import GardenPage from './components/GardenPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Mặc định / => Login */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Hoặc /login => Login */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Đăng ký */}
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Xác nhận đăng ký */}
        <Route path="/confirmation" element={<ConfirmationPage />} />

        {/* Home */}
        <Route path="/home" element={<HomePage />} />

        {/* Profile */}
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/profile-edit" element={<UserProfileEditPage />} />

        {/* Garden Browser */}
        <Route path="/garden-browser" element={<GardenBrowserPage />} />

        {/* Garden Page (chi tiết 1 garden). */}
        <Route path="/garden/:id" element={<GardenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
