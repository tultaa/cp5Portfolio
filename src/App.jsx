import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'Canva',
  'Python',
  'MS Office',
];

const App = () => {
  return (
    <div id='top' className="app bg-dark-dark-background text-dark-dark-text">
      <Header title="Meu Portfólio" homepage="#" />
      <main>
        <Projects />
        <Skills skills={skills} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;
