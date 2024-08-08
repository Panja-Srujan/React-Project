import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

it('should load Header component with login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByText('Login');

  expect(loginButton).toBeInTheDocument();
});

it('should load Header component with Cart button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartButton = screen.getByText(/Cart/); //This is a regular expression (regex) literal in JavaScript.
  // It matches any string containing the word "Cart".
  expect(cartButton).toBeInTheDocument();
});

it('should change to logout when on clicking login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole('button', { name: 'Login' });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole('button', { name: 'Logout' });

  expect(logoutButton).toBeInTheDocument();
});
