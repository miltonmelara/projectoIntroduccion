import React from 'react';
import '../styles/WorkoutPlanPage.css';

const routineDays = [
  {
    day: 'Day 1',
    title: 'Push (Chest, Shoulders, Triceps)',
    exercises: [
      'Flat Barbell Bench Press – 4 sets | 5-8 reps | RPE 8',
      'Incline Dumbbell Press – 3 sets | 8-12 reps | RPE 8',
      'Seated Overhead Shoulder Press – 3 sets | 6-10 reps | RPE 8',
      'Dumbbell Lateral Raises – 3 sets | 12-15 reps | RPE 8',
      'Triceps Dips (Weighted if possible) – 3 sets | 8-12 reps | RPE 8',
      'Cable Rope Triceps Extensions – 3 sets | 12-15 reps | RPE 8'
    ]
  },
  {
    day: 'Day 2',
    title: 'Pull (Back, Biceps, Rear Delts)',
    exercises: [
      'Deadlifts – 4 sets | 4-6 reps | RPE 8',
      'Pull-Ups (Weighted if possible) – 3 sets | 6-10 reps | RPE 8',
      'Bent-Over Barbell Rows – 3 sets | 8-10 reps | RPE 8',
      'Seated Cable Rows – 3 sets | 10-12 reps | RPE 8',
      'Dumbbell Rear Delt Flyes – 3 sets | 12-15 reps | RPE 8',
      'Barbell Bicep Curls – 3 sets | 8-10 reps | RPE 8',
      'Dumbbell Hammer Curls – 3 sets | 10-12 reps | RPE 8'
    ]
  },
  {
    day: 'Day 3',
    title: 'Legs (Quadriceps, Hamstrings, Glutes, Calves)',
    exercises: [
      'Barbell Back Squats – 4 sets | 5-8 reps | RPE 8',
      'Romanian Deadlifts – 3 sets | 8-10 reps | RPE 8',
      'Bulgarian Split Squats – 3 sets | 8-12 reps | RPE 8',
      'Leg Press – 3 sets | 12-15 reps | RPE 8',
      'Seated Hamstring Curls – 3 sets | 12-15 reps | RPE 8',
      'Standing Calf Raises – 4 sets | 15-20 reps | RPE 8',
      'Seated Calf Raises – 4 sets | 15-20 reps | RPE 8'
    ]
  },
  {
    day: 'Day 4',
    title: 'Push (Chest, Shoulders, Triceps)',
    exercises: [
      'Incline Barbell Bench Press – 4 sets | 5-8 reps | RPE 8',
      'Flat Dumbbell Press – 3 sets | 8-12 reps | RPE 8',
      'Seated Dumbbell Shoulder Press – 3 sets | 8-10 reps | RPE 8',
      'Cable Lateral Raises – 3 sets | 12-15 reps | RPE 8',
      'Close-Grip Bench Press – 3 sets | 8-12 reps | RPE 8',
      'Overhead Dumbbell Triceps Extensions – 3 sets | 10-12 reps | RPE 8'
    ]
  },
  {
    day: 'Day 5',
    title: 'Pull (Back, Biceps, Rear Delts)',
    exercises: [
      'Sumo Deadlifts – 4 sets | 4-6 reps | RPE 8',
      'Chin-Ups (Weighted if possible) – 3 sets | 6-10 reps | RPE 8',
      'Single-Arm Dumbbell Rows – 3 sets | 8-10 reps | RPE 8',
      'Chest-Supported Machine Rows – 3 sets | 10-12 reps | RPE 8',
      'Dumbbell Rear Delt Flyes – 3 sets | 12-15 reps | RPE 8',
      'Preacher Curls – 3 sets | 10-12 reps | RPE 8',
      'Incline Dumbbell Curls – 3 sets | 12-15 reps | RPE 8'
    ]
  },
  {
    day: 'Day 6',
    title: 'Legs (Focus on Glutes & Hamstrings)',
    exercises: [
      'Front Squats or Safety Bar Squats – 4 sets | 5-8 reps | RPE 8',
      'Hip Thrusts (Weighted) – 3 sets | 10-12 reps | RPE 8',
      'Nordic Hamstring Curls – 3 sets | 6-10 reps | RPE 8',
      'Step-Ups (Weighted) – 3 sets | 12-15 reps per leg | RPE 8',
      'Lying Hamstring Curls – 3 sets | 12-15 reps | RPE 8',
      'Standing Calf Raises – 4 sets | 15-20 reps | RPE 8',
      'Seated Calf Raises – 4 sets | 15-20 reps | RPE 8'
    ]
  },
  {
    day: 'Day 7',
    title: 'Rest or Active Recovery',
    exercises: [
      'Option 1: Complete rest',
      'Option 2: 20-30 min of low-intensity cardio (e.g., incline walking, cycling)',
      'Option 3: Mobility work (hip openers, foam rolling, yoga)'
    ]
  }
];

const WorkoutPlanPage = () => {
  return (
    <div className="workout-plan-page">
      <h1>Workout Plan</h1>
      <div className="routine-container">
        {routineDays.map((dayItem, index) => (
          <div key={index} className="routine-card">
            <div className="routine-header">
              <h2>{dayItem.day} – {dayItem.title}</h2>
            </div>
            <div className="routine-body">
              <ul>
                {dayItem.exercises.map((exercise, idx) => (
                  <li key={idx}>{exercise}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlanPage;