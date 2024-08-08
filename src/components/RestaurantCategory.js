import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className='mx-auto w-6/12 bg-gray-100 my-4 p-4 shadow-lg'>
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}
        >
          <span className='font-bold text-xl '>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
