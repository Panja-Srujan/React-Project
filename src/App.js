import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantsMenu';
import UserContext from './utils/UserContext';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Shimmer from './components/Shimmer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const Cart = lazy(() => import('./components/Cart'));
const About = lazy(() => import('./components/About'));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: 'Srujan Kumar',
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className='app'>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<h1>Loading...!!!!</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },
]);
let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
