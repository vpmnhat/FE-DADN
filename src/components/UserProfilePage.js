import React from 'react';
import { useNavigate } from 'react-router-dom'; // Nếu dùng navigate
import './UserProfilePage.css';
import logo from '../assets/logo.png'; // Điều chỉnh đường dẫn logo nếu cần

function UserProfilePage() {
  // Giả lập dữ liệu người dùng
  const userData = {
    username: 'Netan',
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    preferredUnits: 'Celsius, Lux',
    password: '******', // Hoặc chuỗi đã mã hoá
    bio: `Bio: Plant scientist 🌱 | Researching sustainable agriculture & plant growth 🌳
          | Exploring soil health, plant genetics, and eco-friendly practices 🌍
          | Educating through science and innovation.
          
          Munich, Germany 🇩🇪
          Head of:
          • Plant Research Facility  GreenTech Lab (Dortmund)
          • EcoRoots Garden (Freiburg)
          • Native Blooms Research Center (Berlin)`
  };

  const navigate = useNavigate();

  // Ví dụ: Quay lại trang trước
  const handleGoBack = () => {
    // Hoặc window.history.back();
    navigate(-1);
  };

  // Logout -> Quay về Login Page (hoặc Home tuỳ ý)
  const handleLogout = () => {
    // Clear session...
    navigate('/login');
  };

  // Giả lập nút Edit Bio
  const handleEditBio = () => {
    console.log('Edit bio...');
    // Mở form, hiển thị modal, v.v.
  };

  // Giả lập nút Edit Name
  const handleEditName = () => {
    console.log('Edit name...');
  };

  // Chuyển sang trang Profile Edit
  const handleEditInformation = () => {
    navigate('/profile-edit');
  };

  return (
    <div className="user-profile-page">
      {/* Header */}
      <header className="up-header">
        <div className="up-header-left">
          <img src={logo} alt="GreenHouse Logo" className="up-header-logo" />
        </div>
        <div className="up-header-right">
          <span className="up-username">{userData.username}</span>
          <button onClick={handleLogout} className="up-logout-button">
            Log Out
          </button>
        </div>
      </header>

      {/* Nội dung chính */}
      <div className="up-content">
        {/* Cột trái: nút Back + profile card */}
        <div className="up-left-column">
          <button className="up-back-button" onClick={handleGoBack}>
            &larr; Back
          </button>

          <div className="up-profile-card">
            <div className="up-avatar">
              {/* Icon user cần Font Awesome hoặc thay icon khác */}
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            <div className="up-name-row">
              <span className="up-name">{userData.username}</span>
              <button className="up-edit-icon" onClick={handleEditName}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </div>
            <div className="up-bio-box">
              <p>{userData.bio}</p>
              <button className="up-bio-edit-icon" onClick={handleEditBio}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Cột phải: Thông tin chi tiết */}
        <div className="up-right-column">
          <div className="up-userinfo-box">
            <p>
              <strong>Name:</strong> {userData.fullName}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>UserName:</strong> {userData.username}
            </p>
            <p>
              <strong>Preferred Units:</strong> {userData.preferredUnits}
            </p>
            <p>
              <strong>Password:</strong> {userData.password}
            </p>
          </div>
          <button className="up-edit-info-button" onClick={handleEditInformation}>
            Edit Information
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
