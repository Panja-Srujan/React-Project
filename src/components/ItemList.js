import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItems } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();
  const handleAddItem = item => {
    dispatch(addItems(item)); // adds as an 2nd argument in addItems reducer function by redux
  };
  return (
    <div>
      {items.map(item => (
        <div
          data-testid='foodItems'
          key={item.card.info.id}
          className='border-gray-200 border-b-2 py-4 m-2 flex gap-5 justify-between'
        >
          <div className='w-9/12'>
            <div className=' text-left font-bold mt-5'>
              {item.card.info.name}
            </div>
            <div className='mt-2 font-semibold text-left'>
              ₹ {item.card.info.price / 100}
            </div>
            <p className='text-xs text-left mt-3 leading-5'>
              {item.card.info.description}
            </p>
          </div>
          <div className='relative'>
            <div className='w-3/12 absolute '>
              <button
                className='px-4 py-2 rounded-md bg-white font-semibold text-green-500 '
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt='This is Image URL'
              className='w-44 rounded-md'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
