'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { FaOpencart } from "react-icons/fa"; 
import { assets } from '@/Assets/assets';

const Item = ({ id, title, image, price }) => {

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ id, title, image, price, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    toast.success(`${title} added to cart!`);
  };

  return (
    <div className='max-w-full sm:max-w-[330px] bg-inherit border border-black hover:shadow-[-7px_7px_0px_#000000] rounded-lg overflow-hidden'>
      <Link href={`/items/${id}`} passHref>
        <div className='relative cursor-pointer'>
          <Image 
            src={image} 
            alt={title} 
            className='border-b border-black rounded-t-lg w-full h-[400px] object-cover'
            layout='responsive'
            width={330}
            height={400}
            priority 
          />
          <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-t-lg'>
            <p className='text-white text-lg font-bold'>View</p>
          </div>
        </div>
      </Link>
      <div className='p-5'>
        <h2 className='text-xl text-white font-bold mt-2'>{title}</h2>
        <div className='flex justify-between items-center mt-4'>
          <p className='text-lg text-white font-bold'>${price}</p>
          <button 
            onClick={addToCart} 
            className='px-4 py-2 bg-white rounded-full cursor-pointer flex items-center shadow-md hover:bg-gray-200 transition duration-300'
          >
            <FaOpencart className='text-black text-xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
