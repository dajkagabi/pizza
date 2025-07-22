import React from 'react';

const PizzaKartya = ({ pizza, onCustomize }) => {
  const isVegetarian = pizza.categories.includes('Vegetáriánus'); 
  const isGlutenFree = pizza.categories.includes('Gluténmentes'); 

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover" />

      {/* Jelzések a képen */}
      <div className="absolute top-2 left-2 flex gap-2">
        {isVegetarian && (
          <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Vegetáriánus
          </span>
        )}
        {isGlutenFree && (
          <span className="bg-yellow-500 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
            Gluténmentes
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{pizza.name}</h3>
        <p className="text-gray-700 text-sm mb-4">{pizza.description}</p>

        <div className="flex items-center text-gray-600 text-sm mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="mr-4">{pizza.time}</span>
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-2v-2a2 2 0 012-2h2c1.105 0 2 .895 2 2v2a2 2 0 01-2 2zM12 12c-1.105 0-2 .895-2 2v2a2 2 0 002 2h2c1.105 0 2-.895 2-2v-2a2 2 0 00-2-2h-2zM7 8H5a2 2 0 00-2 2v2a2 2 0 002 2h2c1.105 0 2-.895 2-2v-2a2 2 0 00-2-2z" /></svg>
          <span>{pizza.servings}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {pizza.ingredients.map((ingredient, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              {ingredient}
            </span>
          ))}
        </div>

        <div className="flex items-baseline justify-between">
          <span className="text-3xl font-bold text-red-600">{pizza.price} Ft</span>
          <div className="flex space-x-2">
            <button
              onClick={() => onCustomize(pizza)}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition duration-300"
            >
              Testreszab
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition duration-300">
              Kosárba
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaKartya;