import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../Mocks/RestaurantListMock.json';
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('should render Res list for Pizza text input', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole('button', { name: 'Search' });
  const inputName = screen.getByTestId('inputBox');
  fireEvent.change(inputName, { target: { value: 'Pizza' } });
  fireEvent.click(searchBtn);
  const resCards = screen.getAllByTestId('resCard');
  //Now screen should load 4 cards in Body
  expect(resCards.length).toBe(3);
});

it('should render Res list for Top Restaurants', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  expect(cardsBeforeSearch.length).toBe(20);

  const topRatedBtn = screen.getByRole('button', {
    name: 'Top Rated Restaurants',
  });

  fireEvent.click(topRatedBtn);
  const topResCards = screen.getAllByTestId('resCard');
  expect(topResCards.length).toBe(18);
});
