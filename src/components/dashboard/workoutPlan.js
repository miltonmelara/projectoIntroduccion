import React from 'react';

const WorkoutPlan = ({ data, hideTitle }) => {
  return (
    <div className="workout-plan">
      {/* Render the component's title only if hideTitle is not true */}
      {!hideTitle && <h2 className="workout-plan-title">Workout Plan</h2>}
      <pre>{data}</pre>
    </div>
  );
};

export default WorkoutPlan;
