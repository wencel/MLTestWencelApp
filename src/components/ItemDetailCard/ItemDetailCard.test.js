import React from 'react';
import { shallow } from 'enzyme';
import ItemDetailCard from './ItemDetailCard';
import Styles from './ItemDetailCard.module.sass';

describe('ItemDetailCard', () => {
  const item = {
    author: {
      name: 'Wencel',
      lastname: 'Santos',
    },
    item: {
      id: 'MLA901307677',
      title: 'Celular Tcl 10 Se Icy Silver',
      price: {
        currency: 'ARS',
        amount: 29999,
        decimals: '00',
      },
      picture: 'http://http2.mlstatic.com/D_690280-MLA44569794262_012021-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 25,
      description:
        'IMPORTANTE: ¿Hacen factura A? Para que podamos emitir la factura A, necesitamos que la cuenta de Mercado Libre desde donde vayas a realizar la compra, esté registrada como IVA Responsable Inscripto o IVA Exento. De lo contrario, se va a emitir automáticamente una factura B. Podrás actualizar esta información desde la sección "Mis datos". \n\nSmartphone liberado con pantalla 20:9 V-notch HD+ de 6.5” (720x1600p) con tecnología NXTVISION, Procesador Octa Core, Android 10, Triple Cámara Principal 48+5+2mpx con dual LED flash - Frontal 13mpx/flash, Memoria interna 128 GB, memoria RAM 4 GB, Batería 4000mAh. Desbloqueo por huella y reconocimiento facial. Botón de acceso directo a Google Assistant. Incluye funda protectora.',
    },
  };
  let error = '';
  let loading = false;
  it('renders correctly with valid data', () => {
    const wrapper = shallow(
      <ItemDetailCard item={item} loading={loading} error={error} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(`.${Styles.ItemDetailCard}`).length).toEqual(1);
  });

  it('renders correctly when loading is taking place', () => {
    loading = true;
    const wrapper = shallow(
      <ItemDetailCard item={item} loading={loading} error={error} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(`.${Styles.ItemDetailCard}`).length).toEqual(0);
    expect(wrapper.find('Loading').length).toEqual(1);
  });

  it('renders correctly when an error has ocurred', () => {
    error = 'this is an error';
    loading = false;
    const wrapper = shallow(
      <ItemDetailCard item={item} loading={loading} error={error} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(`.${Styles.ItemDetailCard}`).length).toEqual(0);
  });
});
