import React from 'react';

const Header = () => {
  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-md text-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto p-4 flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-4">
          <div className="text-3xl font-bold text-blue-90 0">
            <a href="/" className="hover:text-blue-300">Furniture Store</a>
          </div>
          <div className="relative flex-1 max-w-lg">
            <input 
              type="text" 
              placeholder="Search the Future of Furniture" 
              className="border rounded-full py-1 px-4 w-full focus:outline-none focus:border-blue-400"
            />
            <svg 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              width="20" 
              height="20"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>


          </div>
          <a href="/login" className="text-gray-300 hover:text-blue-300">Login</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="34" height="34">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 1h4l1 6h13v2H9m14 0l-3 9H6l-3-9h20zm-5 9a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"/>
          </svg>

            
        </div>
        <nav className="w-full flex justify-left space-x-8">
          <div className="relative group">
            <a href="/" className="text-gray-300 hover:text-blue-300">Home</a>
          </div>
          <div className="relative group">
            <a href="/shop" className="text-gray-300 hover:text-blue-300">Shop</a>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
              <a href="/shop/chairs" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Chairs</a>
              <a href="/shop/tables" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tables</a>
              <a href="/shop/sofas" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sofas</a>
            </div>
          </div>
          <a href="/about" className="text-gray-300 hover:text-blue-300">About</a>
          <a href="/contact" className="text-gray-300 hover:text-blue-300">Contact</a>
          <a href="/cart" className="relative text-gray-300 hover:text-blue-300">
          
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
