import React from 'react';
import '../styles/Home.css';
import profileImage from '../assets/bharath_photo.jpeg';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="profile-image-wrapper">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="home-content">
          <h1 className="home-name">Bharath</h1>
          <h2 className="home-title">Electronics & Instrumentation Engineer | IIoT Specialist</h2>
          <p className="home-bio">
            Electronics and Instrumentation Engineering student with experience in building
            innovative solutions and solving real-world problems using modern technologies.
            Experienced in Industrial IoT systems and Industrial Automation, with a focus on
            creating efficient and scalable applications for practical use.
          </p>

          <div className="home-education" id="education">
            <div className="education-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              <div className="education-info">
                <span className="education-degree-text">BE - Electronics and Instrumentation Engineering</span>
                <span className="education-college-text">Kongu Engineering College • 2022 - 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
