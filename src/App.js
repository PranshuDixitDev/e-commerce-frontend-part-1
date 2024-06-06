import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import bgImage from './assets/images/bg-fur.webp';

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Header />
      <main className="container mx-auto p-4">
        <h1>Welcome to Furniture Store</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
