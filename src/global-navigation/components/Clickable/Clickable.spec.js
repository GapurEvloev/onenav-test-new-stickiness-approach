import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Clickable from './Clickable';

describe('Clickable', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <Clickable as="button" onClick={jest.fn()}>
        Click Me
      </Clickable>
    );
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('triggers event on click', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Clickable as="button" onClick={handleClick}>
        Click Me
      </Clickable>
    );

    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // TODO: Add more tests
});
