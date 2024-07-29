import React from 'react';
// import './Hero.css'; // Ensure to create and link the CSS file

const Hero = () => {
  return (
    <section id="home" className="hero">
      <span style={{paddingTop:"30%"}}>
      <h1>Hi, I'm Shilesh Mahesh Mavchi</h1>
      <p>Full-Stack Developer specializing in React.js, Next.js, Java, and Python</p>
      <a href="#projects" className="cta-button">Explore My Work</a>
      </span>
    </section>
  );
};

export default Hero;
