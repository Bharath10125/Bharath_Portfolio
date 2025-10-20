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
          <h1 className="home-name">Your Name</h1>
          <h2 className="home-title">Full Stack Developer | IoT Enthusiast</h2>
          <p className="home-bio">
            Passionate developer with expertise in building innovative solutions 
            using modern technologies. Experienced in IoT systems, web development, 
            and creating efficient, scalable applications that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
