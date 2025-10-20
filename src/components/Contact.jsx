import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-description">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
          
          <div className="contact-links">
            <a 
              href="mailto:your.email@example.com" 
              className="contact-link"
            >
              <span className="contact-icon">📧</span>
              <span>your.email@example.com</span>
            </a>
            
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">💻</span>
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">🐦</span>
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
