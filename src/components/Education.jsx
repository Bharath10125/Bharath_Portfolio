import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-year">2022 - 2026</div>
            <div className="education-content">
              <h3 className="education-degree">BE - Electronics and Instrumentation Engineering</h3>
              <h4 className="education-college">Kongu Engineering College</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
