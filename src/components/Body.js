import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {
  let [RestaurantList, setRestaurantList] = useState([]);
  let [FilteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState('');
  console.log(searchText);
  console.log(RestaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    // console.log(json);
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const random = useOnlineStatus();
  if (!random) {
    return <h2>PLease check your Internet connection and try again..!!</h2>;
  }
  return RestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search-bar'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className='search'
            onClick={() => {
              let filteredRestaurant = RestaurantList.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurantList(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
        {FilteredRestaurantList.map(restaurant => (
          <Link
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
