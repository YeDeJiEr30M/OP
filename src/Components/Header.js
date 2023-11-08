import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          <Link to="/">OP Bank</Link>
        </h1>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/history">Transaction History</Link>
            </li>
            <li>
              <Link to="/funds">Transfer Funds</Link>
            </li>
            <li>
              <Link to="/payment">Bill Payment</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/support">Help & Support</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
