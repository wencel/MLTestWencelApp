import React from 'react';
import { shallow } from 'enzyme';
import ItemsList from './ItemsList';
import Styles from './ItemsList.module.sass';

describe('renders correctly', () => {
  const items = [
    {
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
    {
      id: 'MLA903591629',
      title: 'Nintendo Wii 512mb Standard Blanco',
      price: {
        currency: 'ARS',
        amount: 24990,
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_910960-MLA32731749007_112019-I.jpg',
      condition: 'new',
      free_shipping: true,
      state: 'Capital Federal',
    },
    {
      id: 'MLA906664474',
      title: 'Nintendo New 3ds Xl Standard Negro Metálico',
      price: {
        currency: 'ARS',
        amount: 35300,
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_890060-MLA32736005821_112019-I.jpg',
      condition: 'new',
      free_shipping: true,
      state: 'Capital Federal',
    },
    {
      id: 'MLA839795990',
      title: 'Nintendo Family Computer Blanco Y Rojo',
      price: {
        currency: 'ARS',
        amount: 7400,
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_857844-MLA32731490398_112019-I.jpg',
      condition: 'new',
      free_shipping: true,
      state: 'Capital Federal',
    },
  ];
  let error = '';
  let loading = false;
  it('WHEN a valid set of items is passed and no error or loading are set', () => {
    const wrapper = shallow(
      <ItemsList items={items} loading={loading} error={error} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(`.${Styles.ItemsList}`).length).toEqual(1);
  });

  it('WHEN loading is taking place', () => {
    loading = true;
    const wrapper = shallow(
      <ItemsList items={items} loading={loading} error={error} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(`.${Styles.ItemsList}`).length).toEqual(0);
    expect(wrapper.find('Loading').length).toEqual(1);
  });

  it('WHEN an error has ocurred', () => {
    error = 'this is an error';
    loading = false;
    const wrapper = shallow(
      <ItemsList items={items} loading={loading} error={error} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(`.${Styles.ItemsList}`).length).toEqual(0);
  });
});
