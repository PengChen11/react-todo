import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import React from 'react';

test('renders to do list manager', () => {
  render(<App />);
  const titleElement = screen.getByText(/To Do List Manager/i);
  expect(titleElement).toBeInTheDocument(); 
});

test('renders header', () => {
  render(<App />);
  const HeaderEl = screen.getByText(/Home/i);
  expect(HeaderEl).toBeInTheDocument(); 
});

test('renders form to add new item', () => {
  render(<App />);
  const formTitleEl = screen.getByText(/Add To Do Item/i);
  expect(formTitleEl).toBeInTheDocument(); 

});

test('renders to do Lists ', () => {
  render(<App />);
  const listItemEl = screen.getByText(/Finish Form component/i);
  expect(listItemEl).toBeInTheDocument(); 
  
});