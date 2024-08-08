import { sum } from '../sum';

test('This sum function should calculate two numbers', () => {
  const result = sum(5, 6);

  expect(result).toBe(11);
});
