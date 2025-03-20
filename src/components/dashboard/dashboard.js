// src/components/Dashboard/Dashboard.js
import React, { useState, useEffect } from 'react';
import '../../styles/Dashboard.css';
import WorkoutPlan from './workoutPlan';
import NutritionPlan from './nutritionPlan';
import { leaderboardData } from '../../data/leaderboardData'; 

const workoutIcon = require('../../icons/WorkoutIcon.png');
const trophyIcon = require('../../icons/TrophyIcon.png');
const nutritionIcon = require('../../icons/NutritionIcon.png');

const Dashboard = () => {
  // State for workout plan, nutrition plan, and top 5 leaderboard
  const [workoutPlan, setWorkoutPlan] = useState('');
  const [nutritionPlan, setNutritionPlan] = useState('');
  const [dashboardLeaderboard, setDashboardLeaderboard] = useState([]);

  useEffect(() => {
    // Set the multi-day workout plan
    setWorkoutPlan(
      `Day 1 - Push (Chest, Shoulders, Triceps)
Day 2 - Pull (Back, Biceps, Rear Delts)
Day 3 - Legs (Quadriceps, Hamstrings, Glutes, Calves)
Day 4 - Push (Chest, Shoulders, Triceps)
Day 5 - Pull (Back, Biceps, Rear Delts)
Day 6 - Legs (Focus on Glutes & Hamstrings)
Day 7 - Rest or Active Recovery`
    );

    // Set a dummy nutrition plan
    setNutritionPlan(
      `Breakfast:
Omelet (eggs, mushrooms, tomatoes, cheese)
Whole wheat toast
Black coffee

Snack:
Handful of walnuts & an apple

Lunch:
Lean ground beef (150g)
Brown rice (½ cup)
Steamed broccoli

Snack:
Protein shake with frozen berries

Dinner:
Grilled chicken breast
Roasted red potatoes
Side salad with olive oil dressing`
    );

    // Slice the first 5 users from the shared leaderboard data
    const topFive = leaderboardData.slice(0, 5);
    setDashboardLeaderboard(topFive);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        
        {/* WORKOUT PLAN CARD (Top-left) */}
        <div className="card workout-card">
          <div className="card-header split">
            <div className="card-title">Workout Plan</div>
            <div className="card-icon">
              <img src={workoutIcon} alt="Workout Icon" />
            </div>
          </div>
          <div className="card-content">
            {/* Hide the nested title if the WorkoutPlan component has one */}
            <WorkoutPlan data={workoutPlan} hideTitle={true} />
          </div>
        </div>
        
        {/* NUTRITION PLAN CARD (Right column, spans both rows) */}
        <div className="card nutrition-card">
          <div className="card-header nutrition">
            <div className="card-title">Nutrition Plan</div>
            <div className="card-icon">
              <img src={nutritionIcon} alt="Nutrition Icon" />
            </div>
          </div>
          <div className="card-content">
            <NutritionPlan data={nutritionPlan} hideTitle={true} />
          </div>
        </div>
        
        {/* DASHBOARD LEADERBOARD CARD (Bottom-left) */}
        <div className="card dashboard-leaderboard-card">
          <div className="card-header split">
            <div className="card-title">Leaderboard</div>
            <div className="card-icon">
              <img src={trophyIcon} alt="Trophy Icon" />
            </div>
          </div>
          <div className="card-content">
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              {dashboardLeaderboard.map((user, index) => (
                <li key={index}>
                  {index + 1}. {user.name} — {user.points} pts
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
