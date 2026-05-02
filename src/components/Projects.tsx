import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Sales Analysis",
      description: "Comprehensive analysis of sales data using Python and SQL to identify key growth drivers and customer behavior patterns.",
      tags: ["Python", "SQL", "Pandas", "Matplotlib"],
      link: "#"
    },
    {
      title: "Stock Price Prediction",
      description: "A machine learning model built with TensorFlow to predict stock market trends based on historical financial data.",
      tags: ["Machine Learning", "TensorFlow", "Time Series"],
      link: "#"
    },
    {
      title: "Healthcare Dashboard",
      description: "Interactive Tableau dashboard for visualizing patient outcomes and hospital resource allocation efficiency.",
      tags: ["Tableau", "Data Viz", "Healthcare"],
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <h2 style={{ marginBottom: '2rem' }}>Featured Projects</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
