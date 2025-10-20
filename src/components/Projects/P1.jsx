import React from 'react';

const P1 = ({ project }) => {
  return (
    <div className="project-card">
      {project.thumbnail && (
        <div className="project-image-wrapper">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="project-image"
          />
        </div>
      )}
      {!project.thumbnail && (
        <div className="project-image-wrapper project-placeholder">
          <span className="project-placeholder-text">Project Image</span>
        </div>
      )}
      <div className="project-content" style={{ display: project.thumbnail ? 'flex' : 'flex' }}>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default P1;
