import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
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
          <Image src={image} alt={title} layout='responsive' width={400} height={400} className='border-b border-black rounded-t-lg' />
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
