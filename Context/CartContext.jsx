'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(count);
    };

    updateCount(); 

    window.addEventListener('storage', updateCount);

    return () => {
      window.removeEventListener('storage', updateCount);
    };
  }, []);

  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
