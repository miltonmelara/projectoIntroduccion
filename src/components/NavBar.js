import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/projectoIntroduccion" className="nav-link">Dashboard</Link>
      <Link to="/projectoIntroduccion/workout" className="nav-link">Workout</Link>
      <Link to="/projectoIntroduccion/nutrition" className="nav-link">Nutrition</Link>
      <Link to="/projectoIntroduccion/leaderboard" className="nav-link">Leaderboard</Link>
      <Link to="/projectoIntroduccion/chat" className="nav-link">Chat</Link>
    </nav>
  );
};

export default NavBar;
