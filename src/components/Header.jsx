import React from 'react';
// import './Header.css'; // Ensure to create and link the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;