import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/Login';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test("Home",()=>{
      const {  getByPlaceholderText }=render(<Login/>)
     
      const placeholderElement=getByPlaceholderText("Enter Name");
      expect(placeholderElement).toBeTruthy()
  
  })
