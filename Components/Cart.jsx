'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const router = useRouter();

  const cartItems = [
    { id: 1, title: 'Book 1', price: 29.99, quantity: 1 },
    { id: 2, title: 'Book 2', price: 19.99, quantity: 2 },
  ];

  return (
    <div className='bg-custom-blue min-h-screen flex flex-col'>
      <div className='container mx-auto py-5 px-5 md:px-12 lg:px-28 flex-grow'>
        <h1 className='text-3xl font-bold text-white mb-8'>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className='text-white'>Your cart is empty.</p>
        ) : (
          <div className='space-y-4'>
            {cartItems.map(item => (
              <div key={item.id} className='bg-gray-800 p-4 rounded-lg'>
                <h2 className='text-xl text-white'>{item.title}</h2>
                <p className='text-white'>Price: ${item.price}</p>
                <p className='text-white'>Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => router.push('/')}
          className='text-white mt-4 inline-block bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300'
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
