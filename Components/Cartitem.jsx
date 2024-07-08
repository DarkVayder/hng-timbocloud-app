import React from 'react';
import Image from 'next/image';

const CartItem = ({ id, title, image, price, quantity, updateQuantity, removeItem }) => {
  return (
    <div className='flex items-center justify-between p-4 border-b border-gray-700'>
      <div className='flex items-center'>
        <Image src={image} alt={title} width={100} height={100} className='rounded-lg' />
        <div className='ml-4'>
          <h2 className='text-xl text-white font-bold'>{title}</h2>
          <p className='text-white'>${price}</p>
          <div className='flex items-center mt-2'>
            <button onClick={() => updateQuantity(id, quantity - 1)} className='px-2 bg-gray-700 text-white rounded-full'>-</button>
            <span className='mx-2 text-white'>{quantity}</span>
            <button onClick={() => updateQuantity(id, quantity + 1)} className='px-2 bg-gray-700 text-white rounded-full'>+</button>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <button onClick={() => removeItem(id)} className='px-4 py-2 bg-red-600 text-white rounded-full'>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
