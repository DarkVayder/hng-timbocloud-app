'use client';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28 bg-custom-blue'>
      <div className='flex justify-between items-center'>
        <Image src={assets.Timbulogo1} width={180} height={50} alt='Timbo Logo' className='w-[130px] sm:w-auto' />
        <div className='flex items-center space-x-4 relative'>
          <div className='relative'>
            <MdOutlineShoppingCart className='text-white w-6 h-6 cursor-pointer' />
            {cartCount > 0 && (
              <span className='absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center'>
                {cartCount}
              </span>
            )}
          </div>
          <div className='relative flex items-center'>
            <RxAvatar className='text-white w-6 h-6 cursor-pointer' />
            <RiArrowDropDownLine
              className='text-white w-6 h-6 cursor-pointer'
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className='absolute right-0 mt-8 w-48 bg-white rounded-lg shadow-lg py-2 z-10' onClick={closeDropdown}>
                <p className='text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer'>Sign Out</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
