// ConfirmationPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmationPage.css';

function ConfirmationPage() {
  return (
    <div className="confirmation-page">
      <p>
        All done! You have successfully signed up, please go back and{' '}
        <Link to="/login" className="login-link">
          log in
        </Link>.
      </p>
    </div>
  );
}

export default ConfirmationPage;
