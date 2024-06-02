// App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-16 mb-16 p-4"> {/* Add top and bottom margins to account for fixed header and footer */}
        {/* Your main content goes here */}
        <h1 className="text-2xl">Welcome to Furniture Store</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
