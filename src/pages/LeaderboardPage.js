import React from 'react';
import '../styles/LeaderboardPage.css';
import { leaderboardData } from '../data/leaderboardData'; 


const LeaderboardPage = () => {
  return (
    <div className="leaderboard-page">
      <h1>Leaderboard</h1>
      <div className="leaderboard-card">
        <div className="leaderboard-header">
          <span className="leaderboard-rank-header"></span>
          <span className="leaderboard-title">User</span>
          <span className="leaderboard-title">Points</span>
        </div>
        <div className="leaderboard-body">
          {leaderboardData.map((user, index) => (
            <div key={index} className="leaderboard-row">
              <span className="leaderboard-rank">{index + 1}</span>
              <span className="leaderboard-name">{user.name}</span>
              <span className="leaderboard-points">{user.points}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;