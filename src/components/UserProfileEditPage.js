import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Dùng React Router
import './UserProfileEditPage.css';
import logo from '../assets/logo.png'; // Điều chỉnh đường dẫn logo nếu cần

function UserProfileEditPage() {
  // Dữ liệu cũ của user (giả lập)
  const oldData = {
    username: 'Netan',
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    preferredUnits: 'Celsius, Lux',
    bio: `Bio: Plant scientist 🌱 | Researching sustainable agriculture & plant growth 🌳
          | Exploring soil health, plant genetics, and eco-friendly practices 🌍
          | Educating through science and innovation.

          Munich, Germany 🇩🇪
          Head of:
          • Plant Research Facility  GreenTech Lab (Dortmund)
          • EcoRoots Garden (Freiburg)
          • Native Blooms Research Center (Berlin)`
  };

  // State form
  const [name, setName] = useState(oldData.fullName);
  const [email, setEmail] = useState(oldData.email);
  const [username, setUsername] = useState(oldData.username);
  const [preferredUnits, setPreferredUnits] = useState(oldData.preferredUnits);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigate = useNavigate();

  // Hàm clear text trong input
  const handleClear = (setter) => {
    setter('');
  };

  // Giả lập lưu thông tin
  const handleSave = () => {
    // Gọi API cập nhật user info nếu cần
    console.log('Saving new info:', {
      name,
      email,
      username,
      preferredUnits,
      oldPassword,
      newPassword,
    });
    // Sau khi lưu xong -> về trang Profile
    navigate('/profile');
  };

  // Giả lập cancel
  const handleCancel = () => {
    console.log('Cancel editing. Revert changes or go back...');
    // Về lại trang Profile (hoặc tuỳ ý)
    navigate('/profile');
  };

  // Giả lập logout
  const handleLogout = () => {
    console.log('Logging out...');
    // Clear session, token, v.v.
    navigate('/login');
  };

  return (
    <div className="user-edit-page">
      {/* Header */}
      <header className="ue-header">
        <div className="ue-header-left">
          <img src={logo} alt="GreenHouse Logo" className="ue-header-logo" />
        </div>
        <div className="ue-header-right">
          <span className="ue-username">{oldData.username}</span>
          <button onClick={handleLogout} className="ue-logout-button">
            Log Out
          </button>
        </div>
      </header>

      {/* Nội dung */}
      <div className="ue-content">
        {/* Cột trái: Avatar + Bio */}
        <div className="ue-left-column">
          <div className="ue-profile-card">
            <div className="ue-avatar">
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            <div className="ue-display-name">{oldData.username}</div>
            <div className="ue-bio-box">
              <p>{oldData.bio}</p>
            </div>
          </div>
        </div>

        {/* Cột phải: Form chỉnh sửa */}
        <div className="ue-right-column">
          <div className="ue-form">
            {/* Row 1: Name + Email */}
            <div className="ue-form-row">
              <div className="ue-form-group">
                <label>Name:</label>
                <div className="ue-input-container">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {name && (
                    <button
                      className="ue-clear-btn"
                      onClick={() => handleClear(setName)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              <div className="ue-form-group">
                <label>Email:</label>
                <div className="ue-input-container">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {email && (
                    <button
                      className="ue-clear-btn"
                      onClick={() => handleClear(setEmail)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Row 2: Username + Preferred Units */}
            <div className="ue-form-row">
              <div className="ue-form-group">
                <label>UserName:</label>
                <div className="ue-input-container">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {username && (
                    <button
                      className="ue-clear-btn"
                      onClick={() => handleClear(setUsername)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              <div className="ue-form-group">
                <label>Preferred Units:</label>
                <div className="ue-input-container">
                  <input
                    type="text"
                    value={preferredUnits}
                    onChange={(e) => setPreferredUnits(e.target.value)}
                  />
                  {preferredUnits && (
                    <button
                      className="ue-clear-btn"
                      onClick={() => handleClear(setPreferredUnits)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Row 3: Old password + New password */}
            <div className="ue-form-row">
              <div className="ue-form-group">
                <label>Old Password:</label>
                <div className="ue-input-container">
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  {oldPassword && (
                    <button
                      className="ue-clear-btn"
                      onClick={() => handleClear(setOldPassword)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
              <div className="ue-form-group">
                <label>New Password:</label>
                <div className="ue-input-container">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {newPassword && (
                    <button
                      className="ue-clear-btn"
                      onClick={() => handleClear(setNewPassword)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Nút Save / Cancel */}
            <div className="ue-buttons-row">
              <button className="ue-save-btn" onClick={handleSave}>
                Save
              </button>
              <button className="ue-cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileEditPage;
