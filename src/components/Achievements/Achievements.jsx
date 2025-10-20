import React from 'react';
import A1 from './A1';
import '../../styles/Achievements.css';

const Achievements = () => {
  const achievementsData = [
    {
      id: 1,
      icon: '🏆',
      title: 'First Prize - National IoT Hackathon',
      description: 'Won first place in a 48-hour national-level IoT hackathon with innovative smart city solution.',
      date: 'March 2024'
    },
    {
      id: 2,
      icon: '🎓',
      title: 'Academic Excellence Award',
      description: 'Awarded for maintaining top 5% ranking throughout the undergraduate program.',
      date: 'May 2024'
    },
    {
      id: 3,
      icon: '💡',
      title: 'Best Innovation Project',
      description: 'Recognized for developing an energy-efficient smart home automation system.',
      date: 'December 2023'
    },
    {
      id: 4,
      icon: '🌟',
      title: 'Open Source Contributor',
      description: 'Made significant contributions to multiple open-source projects with over 500+ commits.',
      date: 'Ongoing'
    },
    {
      id: 5,
      icon: '🎤',
      title: 'Technical Speaker',
      description: 'Delivered talks on IoT and web development at various college technical symposiums.',
      date: '2023-2024'
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievementsData.map((achievement) => (
            <A1 key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
