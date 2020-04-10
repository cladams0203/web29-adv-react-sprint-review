import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const search = getByText("Search Here")
  expect(search).toBeInTheDocument();
  // console.log(search)
});
test('renders button', async () => {
  const { getByText, getByPlaceholderText, findByText } = render(<App />)
  const button = getByText('Submit')
  const input = getByPlaceholderText('Search')
  act(() => {
    fireEvent.change(input, {target: {value: 'mic'}})
  })
  act(() => {
     fireEvent.click(button)
  })
  const card = await findByText('Michael Lawson')
  expect(card).toBeInTheDocument()
})