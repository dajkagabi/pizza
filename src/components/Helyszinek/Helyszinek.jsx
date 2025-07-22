import React from 'react';
import location1Img from '../../assets/location-buda.png';
import location2Img from '../../assets/location-downtown.png';
import location3Img from '../../assets/location-pest.png';

const locations = [
  {
    title: "PizzaHub Belváros",
    img: location2Img,
    address: "1051 Budapest, Kiss Károly utca 12.",
    phone: "+36 1 234 5678",
    hours: "H-V: 11:00-23:00"
  },
  {
    title: "PizzaHub Buda",
    img: location1Img,
    address: "1024 Budapest, Attila út 3.",
    phone: "+36 1 234 5678",
    hours: "H-V: 11:00-23:00"
  },
  {
    title: "PizzaHub Pest",
    img: location3Img,
    address: "1014 Budapest, Dobos utca 2.",
    phone: "+36 1 234 5678",
    hours: "H-V: 11:00-23:00"
  },
];

const Helyszinek = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-4">Helyszíneink</h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        Látogass el hozzánk valamelyik éttermünkbe!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <img
              src={loc.img}
              alt={`${loc.title} üzlet`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{loc.title}</h3>

              
              <div className="flex items-center text-gray-700 mb-2">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{loc.address}</span>
              </div>

              {/* Telefon */}
              <div className="flex items-center text-gray-700 mb-2">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 6.75C2.25 5.507 3.257 4.5 4.5 4.5h1.356a1.5 1.5 0 011.05.436l2.01 2.01a1.5 1.5 0 01.364 1.523l-.603 1.81a.75.75 0 00.172.783l3.555 3.555a.75.75 0 00.783.172l1.81-.603a1.5 1.5 0 011.523.364l2.01 2.01a1.5 1.5 0 01.436 1.05V19.5a1.5 1.5 0 01-1.5 1.5H18c-8.28 0-15-6.72-15-15z" />
                </svg>
                <span>{loc.phone}</span>
              </div>

              {/* Nyitvatartás */}
              <div className="flex items-center text-gray-700 mb-6">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{loc.hours}</span>
              </div>

              <button className="w-full bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
                Útvonal tervezés
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Helyszinek;
