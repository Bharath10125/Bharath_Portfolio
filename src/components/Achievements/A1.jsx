import React from 'react';

const A1 = ({ achievement }) => {
  return (
    <div className="achievement-card">
      <div className="achievement-icon">{achievement.icon}</div>
      <div className="achievement-content">
        <h3 className="achievement-title">{achievement.title}</h3>
        <p className="achievement-description">{achievement.description}</p>
        {achievement.date && (
          <span className="achievement-date">{achievement.date}</span>
        )}
      </div>
    </div>
  );
};

export default A1;
