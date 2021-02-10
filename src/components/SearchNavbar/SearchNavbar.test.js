import React from 'react';
import { shallow } from 'enzyme';
import SearchNavbar from './SearchNavbar';

it('renders correctly', () => {
  const onSearch = jest.fn();
  const wrapper = shallow(
    <SearchNavbar initialSearchTerm='test' onSearch={onSearch} />
  );
  expect(wrapper).toMatchSnapshot();
});
