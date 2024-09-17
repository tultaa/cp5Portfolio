import React from 'react';
import ProjectContainer from './ProjectContainer';

const Projects = () => {
  const projectData = [
    { title: 'Plataforma de videos', description: 'Projeto feito em React, pela Fiap', techStack: ['HTML', 'CSS', 'JS', 'React'], github: 'https://github.com/tultaa/cp4_webdev', demo: 'https://cp4-webdev.vercel.app/' },
    { title: 'Eco Store', description: 'Projeto de Front End, pela Fiap', techStack: ['HTML', 'CSS', 'JS'], github: 'https://github.com/tultaa/cp4front', demo: 'https://cp4front-theta.vercel.app/' },
    { title: 'Sistema de monitoramento', description: 'Circuito criado com Tinkercad', techStack: ['C++', 'Tinkercad', 'Arduino'], github: 'https://github.com/tultaa/GS_EdgeComputing?tab=readme-ov-file', demo: 'https://www.tinkercad.com/things/la6N4U7Dc8I-gs1edge' },
  ];

  return (
    <section id="projects" className="py-16 bg-dark-background text-white">
      <h2 className="text-3xl font-bold text-center mb-8">PROJECTS</h2>
      <div className="flex justify-center space-x-4">
        {projectData.map((project, index) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
