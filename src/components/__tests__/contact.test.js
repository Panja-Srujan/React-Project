import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('This is contact page test cases', () => {
  beforeAll(() => {
    // console.log('Before All');
  });

  beforeEach(() => {
    // console.log('Before Each');
  });

  afterAll(() => {
    // console.log('After All');
  });

  afterEach(() => {
    // console.log('After Each');
  });

  test('Testing whether my contact component is loaded', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('Testing whether button in my contact component is loaded', () => {
    render(<Contact />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Testing whether button in my contact component is loaded', () => {
    render(<Contact />);
    const texts = screen.getByText('Contact Us Srujan kumar');
    expect(texts).toBeInTheDocument();
  });

  test('Testing whether placeholder in my contact component is loaded', () => {
    render(<Contact />);
    const inputss = screen.getAllByRole('textbox');
    //   console.log(inputss[1]);
    expect(inputss.length).toBe(2);
  });
});
