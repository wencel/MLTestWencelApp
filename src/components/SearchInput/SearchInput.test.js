import React from 'react';
import { mount } from 'enzyme';
import SearchInput from './SearchInput';

describe('WHEN mounting the component', () => {
  const onSearch = jest.fn(0);
  const onChange = jest.fn(0);
  const wrapper = mount(
    <SearchInput onChange={onChange} onSearch={onSearch} value='Value' />
  );
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('calls the onSearch function when subbmitting the form', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(onSearch).toHaveBeenCalledTimes(1);
  });
});
