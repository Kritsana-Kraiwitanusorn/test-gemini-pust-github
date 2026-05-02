import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <h2>Get In Touch</h2>
      <p style={{ marginBottom: '2rem', color: '#bbb' }}>
        Interested in collaborating or have a question? Feel free to reach out.
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        <a href="mailto:kritsana@example.com">Email</a>
        <a href="https://linkedin.com/in/kritsana" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/kritsana" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <button style={{
          backgroundColor: 'transparent',
          border: '1px solid var(--accent-color)',
          color: 'var(--accent-color)',
          padding: '0.8rem 1.5rem',
          fontFamily: 'inherit',
          fontSize: '1rem',
          cursor: 'pointer',
          borderRadius: '4px'
        }}>
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Contact;
