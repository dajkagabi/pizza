import React from "react";
import heroBg from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-red-800 opacity-10"></div>

      <div className="relative z-10 text-white p-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Autentikus Olasz Pizzák
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Frissen sütött, kézzel készített pizzák a legjobb alapanyagokból
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-red-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            <Link to="/menu" className="text-red-700">
              Menü megtekintése
            </Link>
          </button>
          <button className="bg-white text-red-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            <Link to="/kapcsolat" className="text-red-700">
              Kapcsolat
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
