import { LOGO_URL } from '../utils/constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  // let btnName = 'Login';
  // console.log(btnName);
  useEffect(() => {
    // console.log('Hello there useEffect');
  }, [btnName]);
  const seeOnce = useOnlineStatus();
  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <img className='logo' src={LOGO_URL} />
        </Link>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status : {seeOnce ? '✔' : '🔴'}</li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          <button
            className='login-btn'
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
