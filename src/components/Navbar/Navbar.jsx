import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Pizza,
  Home,
  List,
  PercentCircle,
  Info,
  Contact,
  MapPin,
  ShoppingCart,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = 0; 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-2 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-600 flex items-center gap-2">
          <Pizza className="w-7 h-7 text-red-600" />
          Pizza Mágia
        </Link>

        {/* Asztal */}
        <div className="hidden md:flex space-x-4 items-center"> 
          <Link to="/" className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 rounded-lg transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <Home className="w-4 h-4" />
            </div>
            Kezdőlap
          </Link>
          <Link to="/menu" className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 rounded-lg transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <List className="w-4 h-4" />
            </div>
            Menü
          </Link>
          <Link to="/akciok" className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 rounded-lg transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <PercentCircle className="w-4 h-4" />
            </div>
            Akciók
          </Link>
          <Link to="/rolunk" className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 rounded-lg transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <Info className="w-4 h-4" />
            </div>
            Rólunk
          </Link>
          <Link to="/kapcsolat" className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 rounded-lg transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <Contact className="w-4 h-4" />
            </div>
            Kapcsolat
          </Link>
          <Link to="/helyszinek" className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 rounded-lg transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <MapPin className="w-4 h-4" />
            </div>
            Helyszínek
          </Link>

          {/* Kosár  */}
          <Link to="/cart" className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 rounded-lg relative transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <ShoppingCart className="w-4 h-4" />
            </div>
            Kosár
            {cartCount > 0 && (
              <span className="absolute -top-1 right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger  */}
        <button onClick={toggleMobileMenu} className="md:hidden text-gray-700">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobil */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-white rounded-xl mt-4 shadow-md overflow-hidden">
          <Link to="/" onClick={toggleMobileMenu} className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <Home className="w-4 h-4" />
            </div>
            Kezdőlap
          </Link>
          <Link to="/menu" onClick={toggleMobileMenu} className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <List className="w-4 h-4" />
            </div>
            Menü
          </Link>
          <Link to="/akciok" onClick={toggleMobileMenu} className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <PercentCircle className="w-4 h-4" />
            </div>
            Akciók
          </Link>
          <Link to="/rolunk" onClick={toggleMobileMenu} className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <Info className="w-4 h-4" />
            </div>
            Rólunk
          </Link>
          <Link to="/kapcsolat" onClick={toggleMobileMenu} className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <Contact className="w-4 h-4" />
            </div>
            Kapcsolat
          </Link>
          <Link to="/helyszinek" onClick={toggleMobileMenu} className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <MapPin className="w-4 h-4" />
            </div>
            Helyszínek
          </Link>

          {/* Kosár */}
          <Link to="/cart" onClick={toggleMobileMenu} className="flex items-center px-4 py-3 text-gray-800 hover:bg-red-100 relative transition-colors duration-200">
            <div className="bg-red-100 text-red-600 rounded-full p-2 mr-3">
              <ShoppingCart className="w-4 h-4" />
            </div>
            Kosár
            {cartCount > 0 && (
              <span className="absolute right-4 top-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;