import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button theme='blueTheme'>Click me</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
