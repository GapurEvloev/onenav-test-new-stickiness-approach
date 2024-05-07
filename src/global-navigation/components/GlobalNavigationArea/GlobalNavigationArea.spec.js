import React from 'react';
import { render } from '@testing-library/react';
import GlobalNavigationArea from './GlobalNavigationArea';
import { mockAreaConfig } from './fixture';

describe('GlobalNavigationArea', () => {
  it('renders without crashing', () => {
    const { container } = render(<GlobalNavigationArea {...mockAreaConfig} />);
    expect(container).toBeTruthy();
  });

  // TODO: Add more tests
});
