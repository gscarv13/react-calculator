import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

beforeEach(() => {
  const mockHandleClick = (btn) => screen.getByText(btn).setAttribute('clicked', btn);
  render(<Button color="#303136" wide handleClick={mockHandleClick} name="0" />);
  render(<Button color="#1991ff" wide={false} handleClick={mockHandleClick} name="=" />);
});

describe('<Button />', () => {
  test('renders the button', () => {
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
  });

  test('renders the color passed', () => {
    expect(screen.getByText('0')).toHaveStyle('background-color: rgb(48, 49, 54)');
    expect(screen.getByText('0')).not.toHaveStyle('background-color: #000');
    expect(screen.getByText('=')).toHaveStyle('background-color: rgb(25, 145, 255)');
    expect(screen.getByText('=')).not.toHaveStyle('background-color: #fff');
  });

  test('change width if true', () => {
    expect(screen.getByText('0')).toHaveStyle('width: 50%');
    expect(screen.getByText('0')).not.toHaveStyle('width: 25%');
    expect(screen.getByText('=')).toHaveStyle('width: 25%');
    expect(screen.getByText('=')).not.toHaveStyle('width: 50%');
  });

  test('call the handleClick when click', () => {
    userEvent.click(screen.getByText('0'));
    userEvent.click(screen.getByText('='));
    const btn1 = screen.getByText('0');
    const btn2 = screen.getByText('=');

    expect(btn1).toHaveAttribute('clicked', '0');
    expect(btn2).toHaveAttribute('clicked', '=');
  });
});
