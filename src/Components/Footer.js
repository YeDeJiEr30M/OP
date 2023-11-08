import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span>OP Bank</span>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 OP Bank. All rights reserved.</p>
          <p>Contact: contact@opbank.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
