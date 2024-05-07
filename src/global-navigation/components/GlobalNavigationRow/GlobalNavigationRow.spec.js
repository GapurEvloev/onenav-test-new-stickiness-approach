import React from 'react';
import { render } from '@testing-library/react';
import GlobalNavigationRow from './GlobalNavigationRow';
import { mockRowConfig } from './fixture';

describe('GlobalNavigationRow', () => {
  it('renders without crashing', () => {
    const { container } = render(<GlobalNavigationRow {...mockRowConfig} />);
    expect(container).toBeTruthy();
  });

  // TODO: Add more tests
});