import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();

  let resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  console.log(resInfo.cards[2].card.card.info.name); // x.data.cards[2].card.card.info

  const { name, locality, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(resInfo.cards[2].card.card.info);
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
  //   .itemCards[0].card.info
  console.log(itemCards);
  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')}</h3>
      <p>{costForTwoMessage}</p>
      <p>{locality}</p>
      <h2>Menu</h2>
      <h1>{resInfo.cards[2].card.card.info.name}</h1>
      <ul>
        {itemCards.map(item => (
          <li key={item.card.info.id}>
            {item.card.info.name} -Rs{' '}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
