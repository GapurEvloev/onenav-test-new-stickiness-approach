import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from '../../helpers/redux';
import GlobalNavigation from './GlobalNavigation';
import { globalNavigationData } from './fixture';

describe('GlobalNavigation', () => {
  let component;
  let store;
  let wrapper;

  beforeEach(() => {
    store = createStore({});
    wrapper = mount(
        <Provider store={store}>
          <GlobalNavigation rows={globalNavigationData.rows} />
        </Provider>
    );
    component = wrapper.find('GlobalNavigation');
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('renders the correct number of rows', () => {
    expect(wrapper.find('GlobalNavigationRow')).toHaveLength(
        globalNavigationData.rows.length
    );
  });

  it('renders the correct number of areas', () => {
    expect(wrapper.find('GlobalNavigationArea')).toHaveLength(6);
  });

  // TODO: Add more tests here for different cases, such as visibility, stickiness, etc.
});
