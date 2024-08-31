import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Badge } from '.';
import { classMap } from '../../constans';

describe('Badge Component', () => {
  it('renders the Badge with the correct label and primary color', () => {
    const label = 'New';
    render(<Badge color="primary" label={label} />);

    const badgeElement = screen.getByText(label);

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent(label);
    expect(badgeElement).toHaveClass('rounded');
    expect(badgeElement).toHaveClass('px-4');
    expect(badgeElement).toHaveClass('py-1');
    expect(badgeElement).toHaveClass(classMap['primary'].contained);
  });

  it('renders the Badge with a specified color', () => {
    const label = 'Warning';
    render(<Badge label={label} color="warning" />);

    const badgeElement = screen.getByText(label);

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent(label);
    expect(badgeElement).toHaveClass(classMap['warning'].contained);
  });

  it('applies additional props to the span element', () => {
    const label = 'success';
    render(
      <Badge label={label} color="success" data-testid="badge-element" />
    );

    const badgeElement = screen.getByText(label);

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveAttribute('data-testid', 'badge-element');
  });
});
