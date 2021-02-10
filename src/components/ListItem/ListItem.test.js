import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

it('renders correctly', () => {
  const item = {
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
  };
  const wrapper = shallow(<ListItem item={item}>Content</ListItem>);
  expect(wrapper).toMatchSnapshot();
});
