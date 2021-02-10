import React from 'react';
import { mount } from 'enzyme';
import ItemDetail from './ItemDetail';

describe('WHEN mounting the component', () => {
  const redirectSearchItems = jest.fn(0);
  const requestFetchItem = jest.fn(0);
  const item = {
    data: {
      id: 'MLA906703376',
      title: 'Nintendo Switch 32gb Standard Rojo Neón, Azul Neón Y Negro',
      price: {
        currency: 'ARS',
        amount: 59300,
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_883371-MLA32731749246_112019-I.jpg',
      condition: 'new',
      free_shipping: true,
      state: 'Buenos Aires',
    },
    loading: false,
    error: '',
  };
  const wrapper = mount(
    <ItemDetail
      id='testID'
      redirectSearchItems={redirectSearchItems}
      requestFetchItem={requestFetchItem}
      item={item}
    />
  );
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('calls the requestFetchItem function when on mount', () => {
    // Testing the useEffect requires a timeout for it to work
    setTimeout(() => {
      expect(requestFetchItem).toHaveBeenCalledTimes(1);
    }, 0);
  });
});
