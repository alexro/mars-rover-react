import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders initial UI', () => {
  const { getByText } = render(<App />);
  const el = getByText(/Please enter area details, rover position and moves/i);
  expect(el).toBeInTheDocument();
});

test('click Evaluate and show results', () => {
  const { getByText, queryAllByText } = render(<App />);

  expect(queryAllByText('1 3 N').length).toBe(0);
  expect(queryAllByText('5 1 E').length).toBe(0);

  fireEvent.click(getByText('Evaluate'));

  expect(getByText('1 3 N')).toBeInTheDocument();
  expect(getByText('5 1 E')).toBeInTheDocument();
});
