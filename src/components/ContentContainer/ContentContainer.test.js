import React from 'react';
import { shallow } from 'enzyme';
import ContentContainer from './ContentContainer';

describe('ContentContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContentContainer>Content</ContentContainer>);
    expect(wrapper).toMatchSnapshot();
  });
});
