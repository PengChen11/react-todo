import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from '../app.js';

test.skip('renders to do list manager', () => {
  render(<App />);
  const titleElement = screen.getByText(/To Do List Manager/i);
  expect(titleElement).toBeInTheDocument(); 
});

test.skip('renders header', () => {
  render(<App />);
  const HeaderEl = screen.getByText(/Home/i);
  expect(HeaderEl).toBeInTheDocument(); 
});

test.skip('renders form to add new item', () => {
  render(<App />);
  const formTitleEl = screen.getByText(/Add To Do Item/i);
  expect(formTitleEl).toBeInTheDocument(); 

});

