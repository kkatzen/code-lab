import React from 'react';
import TextInput from './TextInput';
import { render, fireEvent } from '@testing-library/react';

test('handles user input', async () => {
// jest.fn() allows us to mock and spy on the behavior of called functions
// https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn
  window.prompt = jest.fn(() => 'input from the user');
  console.log = jest.fn();

  const { getByText } = render(<TextInput promptText="prompt?"/>);
  fireEvent.click(getByText('prompt?'));

  expect(window.prompt).toHaveBeenCalledWith('prompt?');
  expect(console.log).toHaveBeenCalledWith('input from the user');
  expect(getByText(/input from the user/i)).toBeInTheDocument();
});
