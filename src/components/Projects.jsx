import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects 🚀</h2>
      <div className="project-cards">
        {/* Dummy Project 1 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio website to showcase my skills and projects.</p>
          <p>Technologies: React.js, Next.js, CSS</p>
          <div className="project-links">
            <a href="https://example.com" className="btn">Live Demo</a>
            <a href="https://github.com/example" className="btn">Source Code</a>
          </div>
        </div>
        {/* Dummy Project 2 */}
        <div className="project-card">
          <h3>E-commerce Platform</h3>
          <p>An online platform for buying and selling products.</p>
          <p>Technologies: React.js, Node.js, MongoDB</p>
          <div className="project-links">
            <a href="https://example.com" className="btn">Live Demo</a>
            <a href="https://github.com/example" className="btn">Source Code</a>
          </div>
        </div>
        {/* Dummy Project 3 */}
        <div className="project-card">
          <h3>Chat Application</h3>
          <p>A real-time chat application with user authentication.</p>
          <p>Technologies: React.js, Firebase, CSS</p>
          <div className="project-links">
            <a href="https://example.com" className="btn">Live Demo</a>
            <a href="https://github.com/example" className="btn">Source Code</a>
          </div>
        </div>
        {/* New Project - Sport Analysis */}
        <div className="project-card">
          <h3>Sport Analysis</h3>
          <p>An advanced sports analytics platform that provides insights and predictions for international games.</p>
          <p>Technologies: React.js, Python, TensorFlow, AI</p>
          <div className="project-links">
            <a href="https://example.com" className="btn">Live Demo</a>
            <a href="https://github.com/example" className="btn">Source Code</a>
          </div>
        </div>
        {/* Add more dummy projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
