import React from 'react';
import P1 from './P1';
import '../../styles/Projects.css';

// You can import project images here when you add them
// import project1 from '../../assets/project1.jpg';
// import project2 from '../../assets/project2.jpg';
// etc...

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'IoT Smart Home System',
      thumbnail: null, // Replace with: project1
      description: 'A comprehensive smart home automation system using ESP32 and MQTT protocol for real-time device control.',
      techStack: ['ESP32', 'MQTT', 'Node-RED', 'React'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://demo-link.com'
    },
    {
      id: 2,
      title: 'Real-Time Data Dashboard',
      thumbnail: null, // Replace with: project2
      description: 'Interactive dashboard for visualizing IoT sensor data with real-time updates and analytics.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'MQTT'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://demo-link.com'
    },
    {
      id: 3,
      title: 'Weather Monitoring Station',
      thumbnail: null, // Replace with: project3
      description: 'Wireless weather station with cloud integration for remote monitoring and data logging.',
      techStack: ['ESP32', 'Python', 'MongoDB', 'Node-RED'],
      github: 'https://github.com/yourusername/project3',
      demo: null
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      thumbnail: null, // Replace with: project4
      description: 'Full-stack e-commerce application with payment integration and inventory management.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/project4',
      demo: 'https://demo-link.com'
    },
    {
      id: 5,
      title: 'Task Management App',
      thumbnail: null, // Replace with: project5
      description: 'Collaborative task management tool with real-time synchronization and team features.',
      techStack: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/yourusername/project5',
      demo: 'https://demo-link.com'
    },
    {
      id: 6,
      title: 'Machine Learning API',
      thumbnail: null, // Replace with: project6
      description: 'RESTful API for deploying machine learning models with containerized deployment.',
      techStack: ['Python', 'Flask', 'Docker', 'TensorFlow'],
      github: 'https://github.com/yourusername/project6',
      demo: null
    },
    {
      id: 7,
      title: 'Chat Application',
      thumbnail: null, // Replace with: project7
      description: 'Real-time chat application with group messaging and file sharing capabilities.',
      techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project7',
      demo: 'https://demo-link.com'
    },
    {
      id: 8,
      title: 'Portfolio Generator',
      thumbnail: null, // Replace with: project8
      description: 'Automated portfolio website generator with customizable themes and templates.',
      techStack: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project8',
      demo: 'https://demo-link.com'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <P1 key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
