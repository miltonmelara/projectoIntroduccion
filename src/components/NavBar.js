import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Dashboard</Link>
      <Link to="/workout" className="nav-link">Workout</Link>
      <Link to="/nutrition" className="nav-link">Nutrition</Link>
      <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
      <Link to="/chat" className="nav-link">Chat</Link>
    </nav>
  );
};

export default NavBar;
