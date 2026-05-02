import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        fontSize: '0.8rem', 
        color: '#666',
        borderTop: '1px solid #1a1a1a'
      }}>
        &copy; {new Date().getFullYear()} Kritsana. Built with React & TypeScript.
      </footer>
    </div>
  );
};

export default App;
