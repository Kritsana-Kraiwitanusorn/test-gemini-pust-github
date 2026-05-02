import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, link }) => {
  return (
    <div className="project-card" style={{
      backgroundColor: 'var(--secondary-color)',
      padding: '2rem',
      borderRadius: '8px',
      border: '1px solid #333',
      transition: 'transform 0.2s, border-color 0.2s',
      cursor: 'pointer'
    }}>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '0.9rem', color: '#bbb', marginBottom: '1.5rem' }}>{description}</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontSize: '0.75rem',
            backgroundColor: '#333',
            padding: '2px 8px',
            borderRadius: '4px',
            color: 'var(--accent-color)'
          }}>{tag}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
        View Project โ’’
      </a>
    </div>
  );
};

export default ProjectCard;
