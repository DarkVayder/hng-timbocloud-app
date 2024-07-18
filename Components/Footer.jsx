import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-custom-blue py-5 px-4'>
      <div className='border-t border-gray-200 py-4'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='md:order-2 flex gap-4 mt-4 md:mt-0 cursor-pointer'>
            <FaYoutube className='text-white hover:text-gray-400 transition-colors duration-300' size={28} />
            <FaInstagram className='text-white hover:text-gray-400 transition-colors duration-300' size={28} />
            <FaTwitter className='text-white hover:text-gray-400 transition-colors duration-300' size={28} />
          </div>

          <div className='text-sm text-white flex flex-col md:flex-row md:order-1 mt-4 md:mt-0'>
            <ul className='flex flex-col md:flex-row gap-4'>
              <li className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>Contact</li>
              <li className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>Privacy and Policy</li>
              <li className='hover:text-gray-400 transition-colors duration-300 cursor-pointer'>Terms of Service</li>
              <li className='flex items-center'>
                <FaRegCopyright className='mr-1' />
                Timbu Shop
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
