import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectContainer = ({ project }) => {
  const { title, description, techStack, github, demo } = project;

  return (
    <div className="bg-gray-800 rounded-lg p-6 max-w-sm">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <div className="mt-4">
        {techStack.map((tech, index) => (
          <span key={index} className="mr-2 bg-gray-700 text-sm px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 mt-4">
        <a href={github} className="hover:text-gray-400"><FaGithub /></a>
        <a href={demo} className="hover:text-gray-400"><FaExternalLinkAlt /></a>
      </div>
    </div>
  );
};

export default ProjectContainer;
