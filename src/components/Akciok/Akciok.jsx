import React from 'react';
import hetiAkcioPizzaImg from '../../assets/weekday-menu.png'; 
import diakAkcioImg from '../../assets/student-discount.png'; 
import family from '../../assets/family.jpg';

const akciosAjandekok = [
  {
    id: 1,
    name: 'Családi Csomag',
    description: 'Nagy pizza + üdítő + ajándék desszert',
    image: family, 
    originalPrice: 7990,
    discountedPrice: 5990,
    discountPercent: 25, 
    validUntil: '2025-07-24',
    buttonText: 'Részletek',
  },
  {
    id: 2,
    name: 'Hetiköznapi Menü',
    description: 'Pizza + üdítő + saláta',
    image: hetiAkcioPizzaImg, 
    originalPrice: 3490, 
    discountedPrice: 2490,
    discountPercent: 28,
    validUntil: '2025-12-15',
    buttonText: 'Részletek',
  },
  {
    id: 3,
    name: 'Diák Akció',
    description: '20% kedvezmény minden pizzára',
    image: diakAkcioImg, 
    originalPrice: 2500, 
    discountedPrice: 2000, 
     discountPercent: 20,
    validUntil: '2025-09-30', 
    buttonText: 'Részletek',
  },
];

const Akciok = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 my-8">
      <h2 className="text-4xl font-bold text-center mb-2">Aktuális Akciók</h2>
      <p className="text-lg text-center text-gray-600 mb-12">Ne hagyd ki fantasztikus ajánlatainkat!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {akciosAjandekok.map((akcio) => (
          <div key={akcio.id} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
            {/* Kedvezmény jelző */}
            {akcio.discountPercent && (
              <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                -{akcio.discountPercent}%
              </span>
            )}

            {akcio.image ? (
              <img
                src={akcio.image}
                alt={akcio.name}
                className="w-full h-48 object-cover object-center"
              />
            ) : (
              // Helykitöltő, ha nincs kép 
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L20 20m-6-6l-2-2m2-2l2-2"
                  />
                </svg>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{akcio.name}</h3>
              <p className="text-gray-700 text-sm mb-4">{akcio.description}</p>

              {akcio.originalPrice && akcio.discountedPrice ? (
                <div className="flex items-baseline mb-4">
                  <span className="text-gray-500 line-through mr-2">{akcio.originalPrice} Ft</span>
                  <span className="text-2xl font-bold text-red-600">{akcio.discountedPrice} Ft</span>
                </div>
              ) : akcio.discountPercent ? (
                <p className="text-lg font-bold text-red-600 mb-4">{akcio.discountPercent}% kedvezmény</p>
              ) : null}

              <div className="text-gray-600 text-sm mb-6">
                Érvényes: {akcio.validUntil}
              </div>

              <button className="w-full bg-[#E7000B] text-white px-6 py-3 rounded-full text-md font-semibold  transition duration-300">
                {akcio.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Akciok;