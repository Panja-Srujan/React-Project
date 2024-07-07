import { CDN_URL } from '../utils/constants';

const RestaurantCard = Props => {
  // console.log(Props);
  const { resData } = Props;
  const { cloudinaryImageId, name, cuisines, areaName, avgRatingString } =
    resData.info;
  return (
    <div className='restro-card'>
      <img className='restro-img' src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(',  ')}</h5>
      <div className='details'>
        <span>{areaName}</span>
        <span> {avgRatingString} ⭐</span>
      </div>
      <h5>{resData.info.sla.deliveryTime} mins to Deliver</h5>
    </div>
  );
};

export default RestaurantCard;
