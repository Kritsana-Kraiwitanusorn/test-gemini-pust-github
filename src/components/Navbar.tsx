import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #1a1a1a',
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(15, 15, 15, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000
    }}>
      <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent-color)' }}>
        K.
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#projects" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Projects</a>
        <a href="#contact" style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
