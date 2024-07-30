import React from 'react';
// import './Skills.css'; // Ensure to create and link the CSS file

const Skills = () => {
  const skills = [
    { name: 'HTML', img: 'Assets/skillsLogo/html.png' },
    { name: 'CSS', img: 'Assets/skillsLogo/css.png' },
    { name: 'JavaScript', img: 'Assets/skillsLogo/javascript.png' },
    { name: 'Bootstrap', img: 'Assets/skillsLogo/bootstarp.png' },
    { name: 'React.js', img: 'Assets/skillsLogo/reactjs.png' },
    { name: 'Next.js', img: 'Assets/skillsLogo/nextjs.png' },
    { name: 'MongoDB', img: 'Assets/skillsLogo/mongodb.png' },
    { name: 'GitHub', img: 'Assets/skillsLogo/github.png' },
    { name: 'Git', img: 'Assets/skillsLogo/git.png' },
    { name: 'C', img: 'Assets/skillsLogo/c.png' },
    { name: 'C++', img: 'Assets/skillsLogo/c++.png' },
    { name: 'Java', img: 'Assets/skillsLogo/java.png' },
    { name: 'Python', img: 'Assets/skillsLogo/python.png' },
    { name: 'Node.js', img: 'Assets/skillsLogo/node.png' },
    { name: 'Express.js', img: 'Assets/skillsLogo/ex.png' },
    { name: 'MySQL', img: 'Assets/skillsLogo/mysql.png' },
    { name: 'Postman', img: 'Assets/skillsLogo/postman.png' },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills 🛠️</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-logo-container">
              <img src={skill.img} alt={skill.name} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
