import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();
  let resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  // console.log(resInfo)
  if (resInfo === null) return <Shimmer />;
  // console.log(resInfo.cards[2].card.card.info.name); // x.data.cards[2].card.card.info

  const { name, locality, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // console.log(resInfo.cards[2].card.card.info);
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
  //   .itemCards[0].card.info
  // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      c =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
  // console.log(categories);
  const handleSetShowIndex = index => {
    setShowIndex(prevIndex => (prevIndex === index ? null : index));
  };
  return (
    <div className='text-center'>
      <h1 className='font-bold text-2xl my-7'>{name}</h1>
      <h3 className='text-lg font-bold'>{cuisines.join(', ')}</h3>
      <p>{costForTwoMessage}</p>
      <p>{locality}</p>
      {/* Category */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => handleSetShowIndex(index)}
        />
      ))}
      {/* console.log(category) */}
    </div>
  );
};
export default RestaurantMenu;
