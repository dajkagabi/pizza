import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-white"> Pizza Mánia</h3>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Minden jog fenntartva</p>
        </div>

   
        <div className="flex space-x-6 text-sm">
          <a href="/rolunk" className="hover:text-red-400 transition duration-200">Rólunk</a>
          <a href="/kapcsolat" className="hover:text-red-400 transition duration-200">Kapcsolat</a>
          <a href="/etlap" className="hover:text-red-400 transition duration-200">Étlap</a>
          <a href="/adatvedelem" className="hover:text-red-400 transition duration-200">Adatvédelem</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
