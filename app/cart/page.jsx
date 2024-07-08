'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CartItem from '@/components/CartItem';
import { assets } from "@/Assets/assets";

const Cart = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Book 1', price: 29.99, quantity: 1, image: assets.item },
    { id: 2, title: 'Book 2', price: 19.99, quantity: 2, image: assets.item2 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    router.push('/cart/summary');
  };

  return (
    <div className='bg-custom-blue min-h-screen flex flex-col'>
      <div className='container mx-auto py-5 px-5 md:px-12 lg:px-28 flex-grow'>
        <h1 className='text-3xl font-bold text-white mb-8'>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className='text-white'>Your cart is empty.</p>
        ) : (
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex-grow space-y-4'>
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  {...item}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))}
            </div>
            <div className='w-full md:w-1/3 mt-8 md:mt-0 md:ml-8 p-4 bg-gray-800 rounded-lg'>
              <h2 className='text-2xl font-bold text-white'>Order Summary</h2>
              <div className='text-white mt-4'>
                <p>Subtotal: ${getTotalPrice()}</p>
                <p>Shipping: $5.00</p>
                <p>Taxes: $3.00</p>
                <p className='text-xl font-bold'>Total: ${(parseFloat(getTotalPrice()) + 5.00 + 3.00).toFixed(2)}</p>
              </div>
              <button
                onClick={handleCheckout}
                className='w-full mt-4 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300'
              >
                Checkout
              </button>
            </div>
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
