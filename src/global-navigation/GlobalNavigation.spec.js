import React from 'react';
import { render } from '@testing-library/react';
const { mount } = require('enzyme');
const { Provider } = require('react-redux');
const { default: configureStore } = require('redux-mock-store');
import GlobalNavigation from './GlobalNavigation';
import globalNavigationStructure from '../../../tenants/allure/channels/navigation/_global-navigation';

describe('GlobalNavigation', () => {
  let component;
  const store = configureStore()({});

  const mountDefaultComponent = (props) =>
    mount(
      <Provider store={store}>
        <GlobalNavigation rows={globalNavigationStructure.rows} />
      </Provider>
    );

  beforeEach(() => {
    component = mountDefaultComponent(globalNavigationStructure.rows);
  });

  it('renders without crashing', () => {
    const { container } = render(<GlobalNavigation rows={globalNavigationStructure.rows} />);
    expect(container).toBeTruthy();
  });

  // it('renders the correct number of rows', () => {
  //   const { getAllByTestId } = render(<GlobalNavigation rows={globalNavigationStructure.rows} />);
  //   expect(getAllByTestId('global-navigation-row')).toHaveLength(globalNavigationStructure.rows.length);
  // });

  // TODO: Add more tests here for different cases, such as visibility, stickiness, etc.
});
