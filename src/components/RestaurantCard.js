import { CDN_URL } from '../utils/constants';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const RestaurantCard = Props => {
  const { resData } = Props;
  // console.log(resData);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    avgRatingString,
    costForTwo,
    sla,
  } = resData.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div data-testid="resCard" className=' p-2 w-[250px] border-slate-300 bg-gray-100 rounded-lg hover:bg-gray-200'>
      <img className='rounded-lg' src={CDN_URL + cloudinaryImageId} />
      {/* //CDN_URL + cloudinaryImageId */}
      <h3 className='font-bold py-3 text-lg'>{name}</h3>
      <h5>{cuisines.join(',  ')}</h5>
      <div className='details'>
        <span>{areaName}</span>
        <span> {avgRatingString} ⭐</span>
      </div>
      <div className='cost-for-two'> {costForTwo} </div>
      <h5>{sla.slaString}</h5>
      <h5 className='font-bold'>{loggedInUser}</h5>
    </div>
  );
};
//Higher order Component
export const withPromotedLabel = RestaurantCard => {
  return Props => {
    // console.log(Props);
    return (
      <div>
        <label className='absolute bg-black text-white rounded-lg m-2 p-2 font-semibold'>
          Pure Veg
        </label>
        <RestaurantCard {...Props} />
      </div>
    );
  };
};

export default RestaurantCard;
