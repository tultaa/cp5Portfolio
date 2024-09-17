import React, { useContext } from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 max-w-screen-lg mx-auto px-4">
      <h1 className="text-2xl font-bold">AF.</h1>
      <ul className="flex space-x-8 text-lg">
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
