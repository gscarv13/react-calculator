import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../Router';

beforeEach(() => {
  window.history.pushState({}, 'Quote page', '/quote');
  render(<Router />, { wrapper: BrowserRouter });
});

describe('<Quote />', () => {
  test('render quote', () => {
    expect(screen.getByTestId('quote')).toBeInTheDocument();
  });

  test('render author', () => {
    expect(screen.getByTestId('author')).toBeInTheDocument();
  });
});
