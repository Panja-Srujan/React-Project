import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  let [RestaurantList, setRestaurantList] = useState(resList);
  console.log(RestaurantList);
  return (
    <div className='body'>
      <div className='filter'>
        {/* <input
          type='text'
          id='name'
          name='name'
          placeholder='Search for your Favourite Food '
          required
        /> */}
        <button
          className='filter-btn'
          onClick={() => {
            let filteredList = RestaurantList.filter(
              res => res.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='restro-container'>
        {/* Restaurant component */}
        {RestaurantList.map(restaurant => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

