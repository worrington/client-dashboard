// Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '.';

describe('Button Component', () => {
  it('renders button with correct label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies base classes', () => {
    render(<Button label="Base Class Button" />);
    const button = screen.getByText('Base Class Button');
    expect(button).toHaveClass('rounded');
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('py-1');
  });

  it('applies correct color and variant classes', () => {
    render(<Button label="Primary Contained Button" color="primary" variant="contained" />);
    const button = screen.getByText('Primary Contained Button');
    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('text-body-primary');
  });

  it('applies correct text color', () => {
    render(<Button label="Secondary Text Button" color="secondary" variant="text" />);
    const button = screen.getByText('Secondary Text Button');
    expect(button).toHaveClass('text-secondary');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
