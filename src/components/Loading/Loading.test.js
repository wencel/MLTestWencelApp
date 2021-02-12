import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('BreadCrums', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
