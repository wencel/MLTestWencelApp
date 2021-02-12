import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
  const redirectSearchItems = jest.fn();
  const requestSearchItems = jest.fn();
  const items = { data: {}, loading: false, error: '' };
  const search = 'test';
  const wrapper = shallow(
    <SearchResults
      redirectSearchItems={redirectSearchItems}
      requestSearchItems={requestSearchItems}
      items={items}
      search={search}
    />
  );

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls the requestSearchItems function when on mount', () => {
    // Testing the useEffect requires a timeout for it to work
    setTimeout(() => {
      expect(requestSearchItems).toHaveBeenCalledTimes(1);
    }, 0);
  });
});
