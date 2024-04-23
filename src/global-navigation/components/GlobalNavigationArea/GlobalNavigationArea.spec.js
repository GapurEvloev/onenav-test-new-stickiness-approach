import React from 'react';
import { render } from '@testing-library/react';
import GlobalNavigationArea from './GlobalNavigationArea';

describe('GlobalNavigationArea', () => {
  it('renders without crashing', () => {
    const mockAreaConfig = {
      name: 'logo-and-menu',
      cols: {
        sm: '1 / 1',
        md: '1 / 1',
        lg: '1 / 1',
        xl: '1 / 1',
        xxl: '1 / 1',
        xxxl: '1 / 1'
      },
      alignment: "start",
      transformer: {
        source: 'primaryLinks',
        strategy: 'merge-and-sort',
        itemDefaults: {
          variant: "simple-clickable",
        }
      },
      items: [
        {
          as: 'button',
          variant: "menu",
          label: '☰'
        },
        {
          as: 'a',
          variant: "logo",
          url: '/',
          label: 'LOGO'
        }
      ]
    };
    const { container } = render(<GlobalNavigationArea {...mockAreaConfig} />);
    expect(container).toBeTruthy();
  });

  // TODO: Add more tests
});
