import React from 'react';

const PizzaCard = ({ pizza, onCustomize }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105">
      <img src={pizza.image} alt={pizza.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">{pizza.name}</h3>
          <p className="text-gray-700 mb-2">{pizza.description}</p>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <svg
              className="w-4 h-4 mr-1 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold mr-2">{pizza.rating}</span>
            <svg
              className="w-4 h-4 mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="mr-2">{pizza.time}</span>
            <svg
              className="w-4 h-4 mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h-4a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v11a2 2 0 01-2 2zm0 0a2 2 0 002-2H9a2 2 0 002 2h6zm0 0h4a2 2 0 002-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v11a2 2 0 002 2z"
              ></path>
            </svg>
            <span>{pizza.servings}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {pizza.ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
              >
                {ingredient}
              </span>
            ))}
            {pizza.ingredients.length > 3 && (
                <span className="text-gray-500 text-xs">+{pizza.ingredients.length - 3} további</span>
            )}
          </div>
        </div>
        <div className="mt-auto">
            <div className="flex justify-between items-center mb-4">
                <span className="text-3xl font-bold text-red-600">{pizza.price} Ft</span>
            </div>
            <div className="flex justify-between items-center gap-2">
                <button
                onClick={() => onCustomize(pizza)}
                className="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded-full text-lg font-semibold hover:bg-red-200 transition duration-300"
                >
                Testreszabás
                </button>
                <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
                Kosárba
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;