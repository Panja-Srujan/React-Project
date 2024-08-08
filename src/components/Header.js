import { LOGO_URL } from '../utils/constants';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);
  // let btnName = 'Login';
  // console.log(btnName);
  useEffect(() => {
    // console.log('Hello there useEffect');
  }, [btnName]);
  const seeOnce = useOnlineStatus();

  const cartItems = useSelector(store => store.cart.items);
  // console.log(cartItems);
  return (
    <div className='flex justify-between bg-pink-100'>
      <div className='logo-container'>
        <Link to='/'>
          <img className='w-[150px]' src={LOGO_URL} />
        </Link>
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4 font-semibold'>
            Online Status : {seeOnce ? '✔' : '🔴'}
          </li>
          <li className='px-4 font-semibold'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4 font-semibold'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-4 font-semibold'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4 font-bold'>
            <Link to='/cart'>Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className=' font-semibold'
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
          <li className='px-4 font-bold'>
            <Link to='/cart'>{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
