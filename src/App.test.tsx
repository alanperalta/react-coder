import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'

test('renders cart widget', () => {
  render(<App />);
  const linkElement = screen.getByTestId('cart-widget');
  expect(linkElement).toBeInTheDocument();
});
