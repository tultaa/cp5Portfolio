import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-16 bg-dark-background text-white">
      <h2 className="text-3xl font-bold text-center mb-8">SKILLS</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-700 text-sm px-4 py-2 rounded m-2">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
