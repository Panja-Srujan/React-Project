import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className='w-6/12 m-auto text-center'>
      <h2 className='text-2xl font-bold m-4 p-2'>Cart</h2>
      <button
        className=' bg-black text-white p-2 m-4 rounded-md'
        onClick={handleClear}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h3>Your Cart is Empty, Please Add Items</h3>}
      <h3>
        <ItemList items={cartItems} />
      </h3>
    </div>
  );
};
export default Cart;
