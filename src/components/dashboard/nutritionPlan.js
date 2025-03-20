import React from 'react';

const NutritionPlan = ({ data }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Nutrition Plan</h2>
      <pre>{data || "No nutrition plan available yet."}</pre>
    </div>
  );
};

export default NutritionPlan;