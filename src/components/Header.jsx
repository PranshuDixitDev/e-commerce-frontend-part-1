// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-gradient-to-r from-indigo-500 to-violet-500 shadow-md">
//       <div className="container mx-auto p-4 flex justify-between items-center">
//         <div className="text-3xl font-bold text-white">
//           <a href="/" className="hover:text-gray-200">
//             {/* Replace with your futuristic logo (optional) */}
//             {/* <img src="your-logo.svg" alt="Furniture Store" /> */}
//             Furniture Store<span className="text-green-300">Ξ</span>
//           </a>
//         </div>
//         <nav className="hidden md:flex space-x-8">
//           <a href="/" className="text-gray-200 hover:text-white">Home</a>
//           <a href="/shop" className="text-gray-200 hover:text-white">Shop</a>
//           <a href="/about" className="text-gray-200 hover:text-white">About</a>
//           <a href="/contact" className="text-gray-200 hover:text-white">Contact</a>
//         </nav>
//         <div className="flex space-x-4 items-center">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search the Future of Furniture..."
//               className="border rounded-full px-4 py-1 w-48 focus:outline-none focus:border-indigo-300 text-white"
//             />
//             <svg
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               width="20"
//               height="20"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9.05 13.55l7.5 7.5 7.5-7.5M8.414 6.849l11.314 11.314l-4.878 4.878M6 6l18 18"
//               />
//             </svg>
//           </div>
//           <a href="/cart" className="relative text-white hover:text-gray-200">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               width="24"
//               height="24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M3 3h18l-2 13H5L3 3zm0 0l1.63 16.36a2 2 0 003.26 0L19 3zM16 12a4 4 0 1 0 0-8 4 4 0 000 8z"
//               />
//             </svg>
//             <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
//               3
//             </span>
//           </a>
//           <a href="/login" className="text-gray-200 hover:text-white">
//             Login
//           </a>
//         </div>
//         <div className="md:hidden flex items-center">
//           <button className="outline-none mobile-menu-button">
//           <svg className="w-6 h-6 text-white hover:text-gray-200" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//   <path d="M4 6h16M4 12h16M4 18h16"></path>
// </svg>
//           </button>
//         </div>
//       </div>
//       <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-b from-indigo-700 to-violet-700 py-4 px-4">
//         <ul className="flex justify-center space-x-8 text-white">
//           <li className="text-xl font-bold">Free Shipping</li>
//           <li className="text-xl font-bold">30-Day Returns</li>
//           <li className="text-xl font-bold">Secure Payment</li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 shadow-md z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-orange-400">
          <a href="/" className="hover:text-blue-300 transition duration-300">Furniture Store</a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-blue-500 transition duration-300">Home</a>
          <a href="/shop" className="hover:text-blue-500 transition duration-300">Shop</a>
          <a href="/about" className="hover:text-blue-500 transition duration-300">About</a>
          <a href="/contact" className="hover:text-blue-500 transition duration-300">Contact</a>
        </nav>
        <div className="flex space-x-4 items-center">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="border border-gray-700 bg-gray-800 text-white rounded-full py-1 px-4 w-48 focus:outline-none focus:border-blue-400"
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
                d="M8 4a8 8 0 104 15.292V21a1 1 0 001.447.894l3.39-1.697A2 2 0 0020 18.382V4a2 2 0 00-2-2H6a2 2 0 00-2 2v14.382a2 2 0 001.162 1.811L8.447 21A1 1 0 0010 21v-1.708A8 8 0 008 4z" 
              />
            </svg>
          </div>
          <a href="/cart" className="relative hover:text-blue-500 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 13H5L3 3zm0 0L5 21m16-18l-2 13m-6 5h-4m2-2v-6m0 0h.01M13 9h.01" />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
          </a>
          <a href="/login" className="hover:text-blue-500 transition duration-300">Login</a>
        </div>
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-white"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active"><a href="/" className="block text-sm px-2 py-4 text-white bg-blue-600 font-semibold">Home</a></li>
          <li><a href="/shop" className="block text-sm px-2 py-4 hover:bg-blue-600 transition duration-300">Shop</a></li>
          <li><a href="/about" className="block text-sm px-2 py-4 hover:bg-blue-600 transition duration-300">About</a></li>
          <li><a href="/contact" className="block text-sm px-2 py-4 hover:bg-blue-600 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
