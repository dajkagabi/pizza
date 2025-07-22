import React, { useState, useEffect } from 'react';

const CustomizationModal = ({ pizza, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState({});
  const [totalPrice, setTotalPrice] = useState(pizza.price);

  useEffect(() => {
    let currentPrice = pizza.price;
    for (const extraKey in selectedExtras) {
      if (selectedExtras[extraKey]) {
        currentPrice += pizza.customizable[extraKey].price;
      }
    }
    setTotalPrice(currentPrice * quantity);
  }, [selectedExtras, quantity, pizza.price, pizza.customizable]);

  const handleExtraChange = (extraKey) => {
    setSelectedExtras((prev) => ({
      ...prev,
      [extraKey]: !prev[extraKey],
    }));
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden relative">
        {/* Bezárás gomb */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Pizza kép */}
          <div className="w-full md:w-1/2 p-4 flex items-center justify-center bg-gray-50">
            <img src={pizza.image} alt={pizza.name} className="max-h-64 object-contain rounded-lg" />
          </div>

          {/* Tartalom */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-2">{pizza.name} testreszabása</h3>
              <p className="text-gray-700 mb-4">{pizza.description}</p>

              {/* Extra hozzávalók */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Extra hozzávalók:</h4>
                {Object.entries(pizza.customizable).map(([key, value]) => (
                  <label key={key} className="flex items-center justify-between cursor-pointer mb-3">
                    <span className="text-gray-800 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-3">+{value.price} Ft</span>
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-red-600 rounded"
                        checked={!!selectedExtras[key]}
                        onChange={() => handleExtraChange(key)}
                      />
                    </div>
                  </label>
                ))}
              </div>

              {/* Mennyiség */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Mennyiség:</h4>
                <div className="flex items-center border border-gray-300 rounded-full w-32 justify-between">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100 rounded-l-full"
                  >
                    -
                  </button>
                  <span className="px-4 text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100 rounded-r-full"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Összesen és Kosárba helyezés */}
            <div className="border-t border-gray-200 pt-4 mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Összesen:</span>
                <span className="text-3xl font-bold text-red-600">{totalPrice} Ft</span>
              </div>
              <button
                className="w-full bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
                onClick={onClose} 
              >
                Kosárba helyezés
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizationModal;