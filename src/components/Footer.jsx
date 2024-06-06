import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="flex justify-around">
          <span>Free Shipping</span>
          <span>30-Day Returns</span>
          <span>Secure Payment</span>
        </p>
        <p className="mt-2">&copy; 2024 Furniture Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
