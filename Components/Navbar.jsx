import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '@/Context/CartContext';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const { cartCount } = useCart();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleSignOut = () => {
    closeDropdown();
    router.push('/');
  };

  return (
    <div className='py-3 px-4 md:px-12 lg:px-28 bg-custom-blue'>
      <div className='relative'>
        <Image
          src={assets.Timbulogo1}
          width={180}
          height={50}
          alt='Timbo Logo'
          className='w-[100px] sm:w-[130px] md:w-auto'
          priority={true}
        />
        <div className='absolute top-0 right-0'>
          <Link href='/cart'>
            <div className='relative cursor-pointer p-1 bg-white rounded-full inline-block hover:bg-blue-500 transition-colors duration-300'>
              <MdOutlineShoppingCart className='text-black w-6 h-6 md:w-8 md:h-8 inline-block' />
              <span className='text-black ml-2 text-sm md:text-base inline-block'>Cart</span>
              {cartCount > 0 && (
                <span className='absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 md:w-6 md:h-6 inline-block flex items-center justify-center text-xs md:text-sm'>
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
          <div className='relative inline-block'>
            <RxAvatar className='text-white w-6 h-6 md:w-8 md:h-8 cursor-pointer inline-block' />
            <RiArrowDropDownLine
              className='text-white w-6 h-6 md:w-8 md:h-8 cursor-pointer inline-block'
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className='absolute top-full right-0 mt-8 w-40 md:w-48 bg-white rounded-lg shadow-lg py-2 z-10'>
                <p
                  className='text-gray-800 px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors duration-300'
                  onClick={handleSignOut}
                >
                  Sign Out
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
