import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantsMenu';
import { act } from 'react';
import MOCK_DATA from '../Mocks/RestaurantMenuMock.json';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import Cart from '../Cart';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it('should load my restaurant menu component', async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText('BURGERS (21)');

  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId('foodItems');
  console.log(foodItems);
  expect(foodItems.length).toBe(21);

  const addBtns = screen.getAllByRole('button', { name: 'Add+' });
  fireEvent.click(addBtns[0]);

  const cartItem = screen.getByText('Cart (1 items)');
  expect(cartItem).toBeInTheDocument();

  fireEvent.click(addBtns[0]);
  expect(screen.getByText('Cart (2 items)')).toBeInTheDocument();

  // fireEvent.click(addBtns[1]);
  // expect(screen.getByText('Cart (3 items)')).toBeInTheDocument();

  expect(screen.getAllByTestId('foodItems').length).toBe(23);

  const clearBtn = screen.getByRole('button', { name: 'Clear Cart' });
  fireEvent.click(clearBtn);
  expect(screen.getAllByTestId('foodItems').length).toBe(21);

  const message = screen.getByText('Your Cart is Empty, Please Add Items');
  expect(message).toBeInTheDocument();
});
