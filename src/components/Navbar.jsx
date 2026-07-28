import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ({ username, onLogout }) => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <header className="navbar-container">
      {/* Left: Brand Logo */}
      <div className="navbar-brand">
        <span className="brand-icon">🛍️</span>
        <span className="brand-name">Shoppers Post</span>
      </div>

      {/* Center: Nav Tabs */}
      <nav className="navbar-nav">
        <Link to="/">Product</Link>
        <Link to="/Cart">Cart</Link>
      </nav>

      {/* Right: User Profile & Logout */}
      <div className="navbar-user-section">
        <div className="divider"></div>
        <span className="user-greeting">Hi, {username}</span>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};
