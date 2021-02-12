import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {
  redirectSearchItems,
  requestFetchItem,
} from 'reducers/item/itemActions';
import ItemDetailContainer from './ItemDetailContainer';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const mockStore = configureStore([]);
const id = 'testID';
//Mock the useLocation hook to retrieve the search term
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id,
  }),
}));
describe('Search page container', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      item: {
        selectedItem: {
          data: {
            id: 'MLA906703376',
            title: 'Nintendo Switch 32gb Standard Rojo Neón, Azul Neón Y Negro',
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
          loading: false,
          error: '',
        },
      },
    });
    const history = createMemoryHistory('/dashboard');
    store.dispatch = jest.fn();

    wrapper = mount(
      <Router history={history}>
        <Provider store={store}>
          <ItemDetailContainer />
        </Provider>
      </Router>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch the request search items action on mount', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(requestFetchItem(id));
  });

  it('should dispatch the redirect to search page action when the search form is submitted', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith(redirectSearchItems(''));
  });
});
