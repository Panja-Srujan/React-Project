import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useEffect, useState, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import User from './User';
const Body = () => {
  let [RestaurantList, setRestaurantList] = useState([]);
  let [FilteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState('');
  // console.log(searchText);
  // console.log(RestaurantList);
  const RestaurantPromotedLabel = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5106321&lng=78.5080177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
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
  const { loggedInUser, setUserName } = useContext(UserContext);
  // console.log(setUserName)p
  return RestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search-bar m-4 p-4'>
          <input
            type='text'
            data-testid='inputBox'
            className='border border-gray-500 p-2 rounded'
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className='bg-blue-500 text-white font-bold py-2 px-4 rounded ml-2'
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
          className='bg-gray-500 text-white font-bold py-2 px-4 rounded m-2'
          onClick={() => {
            let filteredList = RestaurantList.filter(
              res => res.info.avgRating > 4
            );
            // console.log(filteredList);
            setFilteredRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <label>UserName :</label>
        <input
          className='border border-black p-2 ml-2'
          value={loggedInUser}
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className='flex flex-wrap gap-4 mt-4'>
        {/* Restaurant component */}
        {FilteredRestaurantList.map(restaurant => (
          // console.log(restaurant),
          <Link
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantPromotedLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
