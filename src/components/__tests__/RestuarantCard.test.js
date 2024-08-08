import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../Mocks/RestaurantCardMock.json';
import '@testing-library/jest-dom';
import { withPromotedLabel } from '../RestaurantCard';

const WrappedRestaurantCard = withPromotedLabel(RestaurantCard);

it('should render Restaurant component with Props data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText('Karachi Bakery');
  expect(resName).toBeInTheDocument();
});

it('should render Restaurant card with promoted label', () => {
  render(<WrappedRestaurantCard resData={MOCK_DATA} />);

  const promotedLabel = screen.getByText('Pure Veg');
  expect(promotedLabel).toBeInTheDocument();
});
