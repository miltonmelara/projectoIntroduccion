import React from 'react';
import Dashboard from '../components/dashboard/dashboard';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 className="dashboard-title">Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
