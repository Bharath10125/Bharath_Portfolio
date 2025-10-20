import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-year">2020 - 2024</div>
            <div className="education-content">
              <h3 className="education-degree">Bachelor of Engineering</h3>
              <h4 className="education-college">XYZ College of Engineering</h4>
              <p className="education-department">Department of Computer Science & Engineering</p>
              <p className="education-mentor">Mentor: Dr. John Doe</p>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-year">2018 - 2020</div>
            <div className="education-content">
              <h3 className="education-degree">Higher Secondary Education</h3>
              <h4 className="education-college">ABC Higher Secondary School</h4>
              <p className="education-department">Science Stream</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
