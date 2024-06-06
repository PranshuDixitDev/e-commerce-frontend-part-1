import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryList from './components/CategoryList';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
          <Home />
          <CategoryList /> 
        <Footer />
      
    </BrowserRouter>
  );
};

export default App;
