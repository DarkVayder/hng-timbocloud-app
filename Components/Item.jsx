import Image from 'next/image';
import React from 'react';
import { assets } from "@/Assets/assets";
import Link from 'next/link';

const Item = ({ id, title, description, image, price }) => {
  return (
    <div className='max-w-full sm:max-w-[330px] bg-inherit border border-black hover:shadow-[-7px_7px_0px_#000000] rounded-lg overflow-hidden'>
      <Link href={`/items/${id}`}>
        <div className='relative'>
          <Image src={image} alt={title} layout='responsive' width={400} height={400} className='border-b border-black rounded-t-lg' />
          <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-t-lg'>
            <p className='text-white text-lg font-bold'>View</p>
          </div>
        </div>
        <div className='p-5'>
          <h2 className='text-xl text-white font-bold mt-2'>{title}</h2>
          <div className='flex justify-between items-center mt-4'>
            <p className='text-lg text-white font-bold'>${price}</p>
            <div className='flex items-center'>
              <Link href={`/items/${id}`}>
                <div className='px-4 py-2 bg-white rounded-full cursor-pointer flex items-center shadow-md hover:bg-gray-200 transition duration-300'>
                  <p className='text-black font-semibold mr-2'>View</p>
                  <Image src={assets.arrow} alt='' width={20} height={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item;
