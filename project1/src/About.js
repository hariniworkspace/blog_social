import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <main className="about-container">
      {/* Header Section */}
      <section className="about-header">
        <h1>🚀 Welcome to My Blog!</h1>
        <p>Your go-to place for tech insights, tutorials, and project ideas.</p>
      </section>

      {/* Profile Section */}
      <section className="about-profile">
        <img src="/profile.jpg" alt="Harini Profile" className="profile-pic" />
        <h2>👋 Hi, I'm Harini</h2>
        <p>
          A passionate <strong>Full-Stack Developer</strong> &{" "}
          <strong>Creative Designer</strong> with a knack for problem-solving
          and UI/UX innovation.
        </p>
      </section>

      {/* Blog Information Section */}
      <section className="about-content">
        <div className="about-card">
          <h2>📌 What’s This Blog About?</h2>
          <p>
            This blog covers **JavaScript, React, web development, UI/UX trends,
            and real-world projects**. Whether you're a beginner or an advanced
            coder, you'll find something valuable here.
          </p>
        </div>

        <div className="about-card">
          <h2>🎯 My Mission</h2>
          <p>
            To **simplify complex tech concepts** and make learning **fun,
            interactive, and engaging**.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-contact">
        <h2>📬 Let's Connect!</h2>
        <p>Want to collaborate or chat about tech? Feel free to reach out!</p>
        <div className="social-icons">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Example
            <FaLinkedin />
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Example
            <FaGithub />
          </a>
          <a href="mailto:harini@example.com" className="icon email">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
