import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-dark-background text-white text-center">
      <h2 className="text-3xl font-bold mb-8">CONTACT</h2>
      <a 
        href="mailto:arthurfellipees@gmail.com" 
        className="inline-block px-6 py-3 border-2 border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-black transition-colors"
      >
        Email me
      </a>
    </section>
  );
};

export default Contact;
