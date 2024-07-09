'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrderSummary from '@/components/OrderSummary';
import Image from 'next/image';
import { assets } from "@/Assets/assets";

const Summary = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleConfirmOrder = () => {
    
    alert('Order confirmed!');
    router.push('/');
  };

  return (
    <div className='bg-custom-blue min-h-screen flex flex-col'>
      <div className='container mx-auto py-5 px-5 md:px-12 lg:px-28 flex-grow'>
        <h1 className='text-3xl font-bold text-white mb-8'>Order Summary</h1>


        <div className='mb-8'>
          <h2 className='text-2xl text-white font-bold'>Contact Information</h2>
          <input type='email' placeholder='Email Address' className='w-full p-2 rounded-md' />
        </div>


        <div className='mb-8'>
          <h2 className='text-2xl text-white font-bold'>Shipping Information</h2>
          <div className='grid grid-cols-2 gap-4'>
            <input type='text' placeholder='First Name' className='w-full p-2 rounded-md' />
            <input type='text' placeholder='Last Name' className='w-full p-2 rounded-md' />
            <input type='text' placeholder='Apartment' className='w-full p-2 rounded-md' />
            <input type='text' placeholder='City' className='w-full p-2 rounded-md' />
            <input type='text' placeholder='Country' className='w-full p-2 rounded-md' />
            <input type='text' placeholder='State' className='w-full p-2 rounded-md' />
            <input type='text' placeholder='Postal Code' className='w-full p-2 rounded-md' />
          </div>
        </div>

 
        <div className='mb-8'>
          <h2 className='text-2xl text-white font-bold'>Delivery Method</h2>
          <div className='flex items-center mt-4'>
            <input type='radio' id='standard' name='delivery' className='mr-2' />
            <label htmlFor='standard' className='text-white'>Standard</label>
            <input type='radio' id='express' name='delivery' className='ml-8 mr-2' />
            <label htmlFor='express' className='text-white'>Express</label>
          </div>
        </div>


        <div className='mb-8'>
          <h2 className='text-2xl text-white font-bold'>Payment</h2>
          <div className='flex items-center mt-4'>
            <input type='radio' id='credit' name='payment' className='mr-2' />
            <label htmlFor='credit' className='text-white'>Credit Card</label>
            <input type='radio' id='paypal' name='payment' className='ml-8 mr-2' />
            <label htmlFor='paypal' className='text-white'>PayPal</label>
            <input type='radio' id='transfer' name='payment' className='ml-8 mr-2' />
            <label htmlFor='transfer' className='text-white'>Bank Transfer</label>
          </div>
          <div className='mt-4'>
            <input type='text' placeholder='Card Number' className='w-full p-2 rounded-md' />
          </div>
          <div className='mt-4'>
            <input type='text' placeholder='Name on Card' className='w-full p-2 rounded-md' />
          </div>
        </div>


        <div className='flex flex-col md:flex-row mt-8'>
          <OrderSummary cartItems={cartItems} />


          <div className='w-full md:w-2/3 mt-8 md:mt-0 md:ml-8 p-4 bg-gray-800 rounded-lg'>
            <h2 className='text-2xl font-bold text-white'>Selected Items Summary</h2>
            <div className='text-white mt-4'>
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className='flex items-center mb-4'>
                    <Image src={item.image} alt={item.title} width={50} height={50} className='rounded-lg' />
                    <div className='ml-4'>
                      <h2 className='text-lg text-white font-bold'>{item.title}</h2>
                      <p>${item.price} x {item.quantity}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className='mt-4'>
              <p>Subtotal: ${getTotalPrice()}</p>
              <p>Shipping: $5.00</p>
              <p>Taxes: $3.00</p>
              <p className='text-xl font-bold'>Total: ${(parseFloat(getTotalPrice()) + 5.00 + 3.00).toFixed(2)}</p>
            </div>
            <button
              onClick={handleConfirmOrder}
              className='w-full mt-4 bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300'
            >
              Confirm Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Summary;
