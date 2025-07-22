import React from "react";

const Kapcsolat = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 my-8 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-4xl font-bold text-center mb-2">Kapcsolat</h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        Lépj kapcsolatba velünk!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Telefon kártya */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <div className="bg-red-100 p-4 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2">Telefon</h4>
          <p className="text-gray-700">+36 1234 5678</p>
          <p className="text-gray-700">+36 1234 5679</p>
        </div>

        {/* Email kártya */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75M21.75 6.75L12 13.5 2.25 6.75M21.75 6.75H2.25"
              />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2">Email</h4>
          <p className="text-gray-700">info@pizzahub.hu</p>
          <p className="text-gray-700">rendeles@pizzahub.hu</p>
        </div>

        {/* Nyitvatartás kártya */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2">Nyitvatartás</h4>
          <p className="text-gray-700">H-V: 11:00-23:00</p>
          <p className="text-gray-700">Sz-V: 11:00-24:00</p>
        </div>

        {/* Szállítás kártya */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3 3h4l3.6 7.59-1.35 2.44A1.5 1.5 0 0010.5 15h8.25a1.5 1.5 0 000-3h-7.05l1.1-2h5.2a1.5 1.5 0 001.5-1.5V3H3z"
              />
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2">Szállítás</h4>
          <p className="text-gray-700">30-45 perc</p>
          <p className="text-gray-700">Ingyenes 8000 Ft felett</p>
        </div>
      </div>
    </div>
  );
};

export default Kapcsolat;
