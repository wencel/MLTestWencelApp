import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {
  redirectSearchItems,
  requestSearchItems,
} from 'reducers/item/itemActions';
import SearchResultsContainer from './SearchResultsContainer';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const mockStore = configureStore([]);
const searchValue = 'Search test';

//Mock the useLocation hook to retrieve the search term
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    search: `?search=${searchValue}`,
  }),
}));
describe('Search page container', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      item: {
        items: {
          loading: false,
          error: '',
          data: {
            items: [
              {
                id: 'MLA906703376',
                title:
                  'Nintendo Switch 32gb Standard Rojo Neón, Azul Neón Y Negro',
                price: {
                  currency: 'ARS',
                  amount: 59300,
                  decimals: '00',
                },
                picture:
                  'http://http2.mlstatic.com/D_883371-MLA32731749246_112019-I.jpg',
                condition: 'new',
                free_shipping: true,
                state: 'Buenos Aires',
              },
              {
                id: 'MLA903591629',
                title: 'Nintendo Wii 512mb Standard Blanco',
                price: {
                  currency: 'ARS',
                  amount: 24990,
                  decimals: '00',
                },
                picture:
                  'http://http2.mlstatic.com/D_910960-MLA32731749007_112019-I.jpg',
                condition: 'new',
                free_shipping: true,
                state: 'Capital Federal',
              },
            ],
            categories: ['category1', 'category2'],
          },
        },
      },
    });
    const history = createMemoryHistory('/dashboard');
    store.dispatch = jest.fn();

    wrapper = mount(
      <Router history={history}>
        <Provider store={store}>
          <SearchResultsContainer />
        </Provider>
      </Router>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch the request search items action on mount', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      requestSearchItems(searchValue)
    );
  });

  it('should dispatch the redirect to search page action when the search form is submitted', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith(
      redirectSearchItems(searchValue)
    );
  });
});
