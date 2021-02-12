import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

it('should render with given state from Redux store', () => {
  const history = createMemoryHistory('/');
  const mockStore = configureStore([]);
  const store = mockStore({});
  store.dispatch = jest.fn();

  const wrapper = mount(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );

  expect(wrapper).toMatchSnapshot();
});
