import React from 'react';
import Navbar from './Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-dark-background text-white py-16">
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold">Olá, me chamo Arthur Fellipe.</h1>
        <p className="mt-4 text-xl">A Front End Engineer.</p>
        <p className="mt-4 max-w-xl mx-auto">
          Estudante de Engenharia de Software, e aqui mostro parte do que absorvi durante alguns anos na técnologia.
        </p>
        <div className="mt-8">
          <a 
            href="CV_ARTHUR_PTBR.pdf" 
            className="inline-block px-6 py-3 border-2 border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Resume
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/tultaa" className="hover:text-gray-400"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/arthur-fellipe-98801428a/" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
