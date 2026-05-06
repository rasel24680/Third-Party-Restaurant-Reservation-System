import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Menu, X, UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Section: Logo */}
          <NavLink to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-[#FF003D] p-1.5 rounded-lg">
              <UtensilsCrossed size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Table<span className="text-[#FF003D]">Bliss</span>
            </span>
          </NavLink>

          {/* Middle Section: Search (Hidden on Mobile) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full flex items-center">
              <Search className="absolute left-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Find Restaurants"
                className="w-full py-2 pl-10 pr-4 bg-gray-50 border-2 border-gray-200 rounded-full  text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF003D]/20 focus:border-[#FF003D] transition-all "
              />
            </div>
          </div>

          {/* Right Section: Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/signin" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-[#FF003D]' : 'text-gray-600 hover:text-[#FF003D]'}`
              }
            >
              Sign In
            </NavLink>
            
            <NavLink 
              to="/signup" 
              className="bg-[#FF003D] text-white px-6 py-2 rounded-xl font-semibold hover:bg-[#e60037] transition-all shadow-sm"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-4 bg-white border-t border-gray-100">
          {/* Mobile Search */}
          <div className="relative flex items-center mt-2 mb-4">
            <Search className="absolute left-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Find Restaurants"
              className="w-full py-2 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#FF003D]"
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <NavLink 
              to="/signin" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `block font-medium py-2 ${isActive ? 'text-[#FF003D]' : 'text-gray-600'}`
              }
            >
              Sign In
            </NavLink>
            
            <NavLink 
              to="/signup" 
              onClick={() => setIsOpen(false)}
              className="bg-[#FF003D] text-white text-center w-full py-3 rounded-xl font-semibold shadow-sm"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;