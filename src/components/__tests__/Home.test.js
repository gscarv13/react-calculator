import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Home from '../Home';
import Router from '../Router';

beforeEach(() => {
  render(<Router path="/" />);
});

describe('<Home />', () => {
  test('render the <Header />', () => {
    const homeLink = screen.getByText(/Home/g);
    const calculatorLink = screen.getByText(/Calculator/g);
    const quoteLink = screen.getByText(/Quote/g);
    const websiteTitle = screen.getByText(/Math Magician 🪄/g);

    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quoteLink).toBeInTheDocument();
    expect(websiteTitle).toBeInTheDocument();
  });

  test('render the about us text', () => {
    const aboutUs = screen.getByText(/About us/g);
    const text = screen.getByText((/Lorem/));

    expect(aboutUs).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
