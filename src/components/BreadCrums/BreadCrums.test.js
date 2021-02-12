import React from 'react';
import { shallow } from 'enzyme';
import BreadCrums from './BreadCrums';

describe('BreadCrums', () => {
  it('renders correctly', () => {
    const testCategories = [
      'category 1',
      'category 2',
      'category 3',
      'category 4',
    ];
    const wrapper = shallow(<BreadCrums categories={testCategories} />);
    expect(wrapper).toMatchSnapshot();
  });
});
