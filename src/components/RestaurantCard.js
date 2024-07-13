import { CDN_URL } from '../utils/constants';

const RestaurantCard = Props => {
  console.log(Props);
  const { resData } = Props;
  const { cloudinaryImageId, name, cuisines, areaName, avgRatingString, costForTwo, sla } =
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
      <div className='cost-for-two'> {costForTwo} </div>
      <h5>{sla.deliveryTime} mins to Deliver</h5>
    </div>
  );
};

export default RestaurantCard;
