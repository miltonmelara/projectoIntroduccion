import React from 'react';

const Leaderboard = ({ data }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Leaderboard</h2>
      {data && data.length > 0 ? (
        <ul>
          {data.map((user, index) => (
            <li key={index}>
              {user.email} - {user.points} pts
            </li>
          ))}
        </ul>
      ) : (
        <p>No leaderboard data available.</p>
      )}
    </div>
  );
};

export default Leaderboard;
