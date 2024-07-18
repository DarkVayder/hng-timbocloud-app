'use client';
import { timbu_data } from '@/Assets/assets';
import React, { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import Item from './Item';
import { ToastContainer } from 'react-toastify';

const ItemList = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = useCallback(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, []);

  useEffect(() => {
    updateCartCount();
  }, [updateCartCount]);

  return (
    <div className='bg-custom-blue'>
      <ToastContainer />
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-8 drop-shadow-md text-left'>
          Explore Our Wide Range of Books
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {timbu_data.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              updateCartCount={updateCartCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
