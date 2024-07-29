import React from 'react';
// import './Contact.css'; // Ensure to create and link the CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <i className="fas fa-user"></i>
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <i className="fas fa-envelope"></i>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <i className="fas fa-comment"></i>
          <textarea name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="btn">
          <i className="fas fa-paper-plane"></i> Send
        </button>
      </form>
      <div className="social-icons">
        <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://t.me/yourtelegramlink" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram-plane"></i>
        </a>
        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
