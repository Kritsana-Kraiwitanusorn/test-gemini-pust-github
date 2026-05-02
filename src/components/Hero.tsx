import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>Kritsana</h1>
      <h2 style={{ color: 'var(--accent-color)', fontWeight: 400 }}>Data Analyst</h2>
      <p style={{ marginTop: '1.5rem', maxWidth: '600px', fontSize: '1.1rem' }}>
        Turning complex data into actionable insights. Specialized in statistical analysis, 
        data visualization, and predictive modeling to drive business growth.
      </p>
    </section>
  );
};

export default Hero;
