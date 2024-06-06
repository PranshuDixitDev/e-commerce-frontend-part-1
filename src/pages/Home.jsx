import React from 'react';
import { useNavigate } from 'react-router-dom';

import bgImage from '../assets/images/bg-fur.webp';

const Home = () => {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate('/shop'); // assumes your shop route is '/shop'
  };

  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(2px)',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '500px',
        textAlign: 'center',
        color: 'white',
        position: 'relative', // Needed to position the button correctly if using z-index
        zIndex: 2 // Ensure this container is above the background
      }}>
        <h1>Welcome to Furniture Store</h1>
        <p>Discover a new concept of comfort with our innovative and sustainably designed furniture that transforms any space into a sanctuary of style and relaxation.</p>
        <button
          onClick={goToShop}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            color: 'black',
            border: '2px solid white',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '20px',
            zIndex: 3
          }}
          onMouseOver={({ target }) => target.style.backgroundColor = 'white'}
          onMouseOut={({ target }) => target.style.backgroundColor = 'rgba(255, 255, 255, 0.85)'}
        >
          Explore Our Products
        </button>

      </div>
    </div>
  );
};

export default Home;
