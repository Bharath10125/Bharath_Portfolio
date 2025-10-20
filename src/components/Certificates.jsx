import React from 'react';
import '../styles/Certificates.css';

// You can import certificate images here when you add them
// import cert1 from '../assets/cert1.jpg';
// import cert2 from '../assets/cert2.jpg';
// etc...

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      title: 'React - The Complete Guide',
      organization: 'Udemy',
      image: null, // Replace with: cert1
      link: 'https://certificate-link.com'
    },
    {
      id: 2,
      title: 'IoT Fundamentals',
      organization: 'Cisco Networking Academy',
      image: null, // Replace with: cert2
      link: 'https://certificate-link.com'
    },
    {
      id: 3,
      title: 'Python for Data Science',
      organization: 'Coursera',
      image: null, // Replace with: cert3
      link: 'https://certificate-link.com'
    },
    {
      id: 4,
      title: 'AWS Cloud Practitioner',
      organization: 'Amazon Web Services',
      image: null, // Replace with: cert4
      link: 'https://certificate-link.com'
    },
    {
      id: 5,
      title: 'Full Stack Web Development',
      organization: 'freeCodeCamp',
      image: null, // Replace with: cert5
      link: 'https://certificate-link.com'
    },
    {
      id: 6,
      title: 'Node.js Certification',
      organization: 'LinkedIn Learning',
      image: null, // Replace with: cert6
      link: 'https://certificate-link.com'
    },
    {
      id: 7,
      title: 'Git and GitHub Essentials',
      organization: 'Udacity',
      image: null, // Replace with: cert7
      link: 'https://certificate-link.com'
    },
    {
      id: 8,
      title: 'Docker Mastery',
      organization: 'Udemy',
      image: null, // Replace with: cert8
      link: 'https://certificate-link.com'
    },
    {
      id: 9,
      title: 'MongoDB University',
      organization: 'MongoDB',
      image: null, // Replace with: cert9
      link: 'https://certificate-link.com'
    },
    {
      id: 10,
      title: 'JavaScript Algorithms',
      organization: 'freeCodeCamp',
      image: null, // Replace with: cert10
      link: 'https://certificate-link.com'
    },
    {
      id: 11,
      title: 'Linux Administration',
      organization: 'Linux Foundation',
      image: null, // Replace with: cert11
      link: 'https://certificate-link.com'
    },
    {
      id: 12,
      title: 'PostgreSQL Database',
      organization: 'Udemy',
      image: null, // Replace with: cert12
      link: 'https://certificate-link.com'
    },
    {
      id: 13,
      title: 'Machine Learning A-Z',
      organization: 'Udemy',
      image: null, // Replace with: cert13
      link: 'https://certificate-link.com'
    },
    {
      id: 14,
      title: 'Cybersecurity Essentials',
      organization: 'Cisco',
      image: null, // Replace with: cert14
      link: 'https://certificate-link.com'
    },
    {
      id: 15,
      title: 'Agile Development',
      organization: 'Scrum Alliance',
      image: null, // Replace with: cert15
      link: 'https://certificate-link.com'
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="certificate-card">
              {cert.image && (
                <div className="certificate-image-wrapper">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="certificate-image"
                  />
                </div>
              )}
              {!cert.image && (
                <div className="certificate-image-wrapper certificate-placeholder">
                  <span className="certificate-placeholder-text">Certificate</span>
                </div>
              )}
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-organization">{cert.organization}</p>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
