import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Router from '../Router';

beforeEach(() => {
  window.history.pushState({}, 'Calculate page', '/calculator');
  render(<Router />, { wrapper: BrowserRouter });
});

describe('<App />', () => {
  test('render the <Header />', () => {
    const calculator = screen.getByTestId('calculator');
    expect(calculator).toBeInTheDocument();
  });

  test('render <Display />', () => {
    const display = screen.getByTestId('display');
    expect(display).toBeInTheDocument();
  });

  test('render <ButtonPanel />', () => {
    const btnPanel = screen.getByTestId('button-panel');
    expect(btnPanel).toBeInTheDocument();
  });

  test('render <Button />', () => {
    const firstButton = screen.getByTestId('AC');
    const lastButton = screen.getByTestId('=');

    expect(firstButton).toBeInTheDocument();
    expect(lastButton).toBeInTheDocument();
  });
});
