'use client';
import { timbu_data } from '@/Assets/assets';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Item from './Item';

const ItemList = () => {
  const [showMore, setShowMore] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    setShowMore(false);
  }, []);

  const itemsToShow = isMobile ? (showMore ? timbu_data : timbu_data.slice(0, 4)) : timbu_data;

  return (
    <div className='bg-custom-blue'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h1 className='text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-8 drop-shadow-md text-left'>
  Explore Our Wide Range of Books
</h1>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
          {itemsToShow.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        {isMobile && timbu_data.length > 4 && (
          <div className='flex justify-center mt-8'>
            <button
              onClick={() => setShowMore(!showMore)}
              className='px-4 py-2 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300'
            >
              {showMore ? 'See Less' : 'See More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
