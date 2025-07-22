import React, { useState } from 'react';
import PizzaKartya from '../../components/PizzaKartya/PizzaKartya';
import Testreszabas from '../../components/Testreszabas/Testreszabas';


import margheritaImg from "../../assets/margherita.png";
import pepperoniImg from '../../assets/pepperoni.png';
import vegetarianaImg from '../../assets/vegetariana.png';
import quattroStagioniImg from '../../assets/quattro-stagioni.png';
import glutenmentesMargheritaImg from '../../assets/gluten-free-margherita.png';
import prosciuttoEFunghiImg from '../../assets/prosciutto-funghi.png';

const pizzas = [
  {
    id: 1,
    name: 'Margherita',
    description: 'Klasszikus paradicsom, mozzarella és bazsalikom',
    image: margheritaImg,
    time: '12 perc',
    servings: '1-2 fő',
    ingredients: ['paradicsom szósz', 'mozzarella', 'bazsalikom'],
    price: 2890,
    rating: 4.6,
    categories: ['Klasszikus', 'Vegetáriánus'],
    customizable: { 
      extraMozzarella: { name: 'Extra mozzarella', price: 390 },
     
    }
  },
  {
    id: 2,
    name: 'Pepperoni',
    description: 'Fűszeres pepperoni kolbász mozzarellával',
    image: pepperoniImg,
    time: '15 perc',
    servings: '1-2 fő',
    ingredients: ['paradicsom szósz', 'mozzarella', 'pepperoni'],
    price: 3490,
    rating: 4.9,
    categories: ['Húsos'],
    customizable: { 
        extraMozzarella: { name: 'Extra mozzarella', price: 390 },
        extraPepperoni: { name: 'Extra pepperoni', price: 490 },
   
    }
  },
  {
    id: 3,
    name: 'Vegetariana',
    description: 'Friss zöldségek és sajtok harmóniája',
    image: vegetarianaImg,
    time: '14 perc',
    servings: '1-2 fő',
    ingredients: ['paradicsom szósz', 'mozzarella', 'paprika', 'gomba', 'hagyma'],
    price: 3190,
    rating: 4.6,
    categories: ['Vegetáriánus'],
    customizable: { 
        extraMozzarella: { name: 'Extra mozzarella', price: 390 },
        extraGomba: { name: 'Extra gomba', price: 290 },
        extraPaprika: { name: 'Extra paprika', price: 290 },
        
    }
  },
  {
    id: 4,
    name: 'Quattro Stagioni',
    description: 'Négy évszak ízei egy pizzán',
    image: quattroStagioniImg,
    time: '18 perc',
    servings: '1-2 fő',
    ingredients: ['paradicsom szósz', 'mozzarella', 'sonka', 'gomba', 'articsóka', 'fekete olívabogyó'],
    price: 3890,
    rating: 4.7,
    categories: ['Klasszikus', 'Húsos'],
    customizable: { 
        extraMozzarella: { name: 'Extra mozzarella', price: 390 },
        extraSonka: { name: 'Extra sonka', price: 450 },
        extraGomba: { name: 'Extra gomba', price: 290 },
    }
  },
  {
    id: 5,
    name: 'Gluténmentes Margherita',
    description: 'Klasszikus ízek gluténmentes tésztán',
    image: glutenmentesMargheritaImg,
    time: '16 perc',
    servings: '1-2 fő',
    ingredients: ['paradicsom szósz', 'mozzarella', 'bazsalikom'],
    price: 3290,
    rating: 4.5,
    categories: ['Vegetáriánus', 'Gluténmentes', 'Specialty'],
    customizable: { 
        extraMozzarella: { name: 'Extra mozzarella', price: 390 },
    }
  },
  {
    id: 6,
    name: 'Prosciutto e Funghi',
    description: 'Prosciutto és friss gombák',
    image: prosciuttoEFunghiImg,
    time: '16 perc',
    servings: '1-2 fő',
    ingredients: ['paradicsom szósz', 'mozzarella', 'prosciutto', 'gomba'],
    price: 3690,
    rating: 4.8,
    categories: ['Húsos'],
    customizable: { 
        extraMozzarella: { name: 'Extra mozzarella', price: 390 },
        extraProsciutto: { name: 'Extra prosciutto', price: 490 },
        extraGomba: { name: 'Extra gomba', price: 290 },
    }
  },
];

const allCategories = [
    'Minden kategória',
    'Klasszikus',
    'Húsos',
    'Vegetáriánus',
    'Gluténmentes',
    'Specialty'
];


const Menu = () => {
  const [checkboxFilters, setCheckboxFilters] = useState([]);
  const [selectedDropdownCategory, setSelectedDropdownCategory] = useState('Minden kategória');
  const [openModal, setOpenModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleCheckboxChange = (filter) => {
    setCheckboxFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const handleDropdownChange = (e) => {
    setSelectedDropdownCategory(e.target.value);
  };

  const filteredPizzas = pizzas.filter((pizza) => {
    const passesCheckboxFilter = checkboxFilters.every((filter) =>
      pizza.categories.includes(filter)
    );

    const passesDropdownFilter =
      selectedDropdownCategory === 'Minden kategória' ||
      pizza.categories.includes(selectedDropdownCategory);

    return passesCheckboxFilter && passesDropdownFilter;
  });

  const handleOpenModal = (pizza) => {
    setSelectedPizza(pizza);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPizza(null);
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-4xl font-bold text-center mb-2">Pizza Menünk</h2>
      <p className="text-lg text-center text-gray-600 mb-8">Válassz kedvenc pizzáid közül</p>

      {/* Szűrők */}
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-8">
        <span className="text-gray-700 font-semibold">Szűrők:</span>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-red-600 rounded"
            checked={checkboxFilters.includes('Vegetáriánus')}
            onChange={() => handleCheckboxChange('Vegetáriánus')}
          />
          <span className="text-gray-800">Vegetáriánus</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-red-600 rounded"
            checked={checkboxFilters.includes('Gluténmentes')}
            onChange={() => handleCheckboxChange('Gluténmentes')}
          />
          <span className="text-gray-800">Gluténmentes</span>
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedDropdownCategory}
            onChange={handleDropdownChange}
          >
            {allCategories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Pizzakártyák */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPizzas.map((pizza) => (
          <PizzaKartya key={pizza.id} pizza={pizza} onCustomize={handleOpenModal} />
        ))}
      </div>

      {/* Testreszabás  */}
      {openModal && selectedPizza && (
        <Testreszabas pizza={selectedPizza} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Menu;