import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { redirectSearchItems } from 'reducers/item/itemActions';
import SearchPageContainer from './SearchPageContainer';
import { mount } from 'enzyme';

const mockStore = configureStore([]);

describe('SearchPageContainer', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({});

    store.dispatch = jest.fn();

    wrapper = mount(
      <Provider store={store}>
        <SearchPageContainer />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch the redirect to search page action when the search form is submitted', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(redirectSearchItems(''));
  });
});
