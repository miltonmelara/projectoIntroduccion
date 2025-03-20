import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashboardPage from './pages/DashboardPage';
import WorkoutPlanPage from './pages/WorkoutPlanPage';
import NutritionPlanPage from './pages/NutritionPlanPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ChatAssistantPage from './pages/ChatAssistantPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/projectoIntroduccion/" element={<DashboardPage />} />
        <Route path="/projectoIntroduccion/workout" element={<WorkoutPlanPage />} />
        <Route path="/projectoIntroduccion/nutrition" element={<NutritionPlanPage />} />
        <Route path="/projectoIntroduccion/leaderboard" element={<LeaderboardPage />} />
        <Route path="/projectoIntroduccion/chat" element={<ChatAssistantPage />} />
        <Route
          path="/"
          element={
            <div style={{ padding: '20px' }}>
              <h1>Welcome to the AI Fitness App</h1>
              <p>Please select an option from the navigation bar.</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
