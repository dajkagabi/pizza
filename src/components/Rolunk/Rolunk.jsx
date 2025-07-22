import React from "react";
import chefImage from "../../assets/about-story.png";

const Rolunk = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-24 py-8 my-8">
      <h2 className="text-4xl font-bold text-center mb-2">Rólunk</h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        Ismerd meg történetünket és értékeinket
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Történetünk</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A PizzaHub 2010-ben egy életre szóló ötletként Budapest szívében
            született. Alapítóink, Marcell és Giuseppe, akik Olaszország
            legszebb vidékeiről származnak, megálmodták, hogy elhozzák a valódi
            olasz ízeket és vendégszeretetet Magyarországra.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Minden pizzánkat kézzel készítjük, csak a legjobb alapanyagokat
            használjuk. Tésztáinkat 24 órán át érleljük, paradicsomszószunkat
            friss olasz paradicsomból készítjük, a mozzarellát Olaszországból
            importáljuk.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ma már három helyen üzemelünk, és vendégeinket a kiváló minőségű
            alapanyagokból készült, minden ízében gazdag hagyományos és kreatív
            pizzákkal várjuk.
          </p>
        </div>

        {/* Kép rész */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={chefImage}
            alt="Séf pizzát készít"
            className="rounded-lg shadow-lg object-cover w-full h-auto max-w-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Kártya 1: Mesterséges Készítés */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <svg
            className="w-16 h-16 text-red-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <h4 className="text-xl font-semibold mb-2">Tapasztalat</h4>
          <p className="text-gray-700 text-sm">
            Minden pizzánkat tapasztalt pizzaioló készíti, hagyományos olasz
            technikákkal.
          </p>
        </div>

        {/* Kártya 2: Friss Alapanyagok */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <svg
            className="w-16 h-16 text-green-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h4 className="text-xl font-semibold mb-2">Friss Alapanyagok</h4>
          <p className="text-gray-700 text-sm">
            Csak a legfrissebb, legmagasabb minőségű alapanyagokat használjuk,
            közvetlenül a helyi termelőktől beszerezve.
          </p>
        </div>

        {/* Kártya 3: Minőségi Garancia */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <svg
            className="w-16 h-16 text-blue-500 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l7 4v5c0 5-3 9-7 10-4-1-7-5-7-10V7l7-4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2l4-4"
            />
          </svg>
          <h4 className="text-xl font-semibold mb-2">Minőségi Garancia</h4>
          <p className="text-gray-700 text-sm">
            Minden pizza készítésénél szigorúan tartjuk be a minőségi
            standardokat, garantálva a kifogástalan ízélményt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rolunk;
