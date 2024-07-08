import React from 'react';
import Image from 'next/image';

const OrderSummary = ({ cartItems }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className='w-full md:w-1/3 mt-8 md:mt-0 md:ml-8 p-4 bg-gray-800 rounded-lg'>
      <h2 className='text-2xl font-bold text-white'>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p className='text-white mt-4'>Your cart is empty.</p>
      ) : (
        <div className='text-white mt-4'>
          {cartItems.map(item => (
            <div key={item.id} className='flex items-center mb-4'>
              <Image src={item.image} alt={item.title} width={50} height={50} className='rounded-lg' />
              <div className='ml-4'>
                <h2 className='text-lg text-white font-bold'>{item.title}</h2>
                <p>${item.price} x {item.quantity}</p>
              </div>
            </div>
          ))}
          <p>Subtotal: ${getTotalPrice()}</p>
          <p>Shipping: $5.00</p>
          <p>Taxes: $3.00</p>
          <p className='text-xl font-bold'>Total: ${(parseFloat(getTotalPrice()) + 5.00 + 3.00).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
