import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from './SearchPage';

describe('SearchPage', () => {
  it('renders correctly', () => {
    const redirectSearchItems = jest.fn();
    const wrapper = shallow(
      <SearchPage redirectSearchItems={redirectSearchItems} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
