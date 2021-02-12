import PropTypes from 'prop-types';
import SearchNavbar from 'components/SearchNavbar';
import { useEffect } from 'react';
import ItemsList from 'components/ItemsList';
import BreadCrums from 'components/BreadCrums';
import ContentContainer from 'components/ContentContainer';

/**
 * Component to render the search results page.
 *
 * @component
 * @example
 * const items = {
    data: {
      items: [
        {
          id: 'id1',
          title: 'Item tite',
          price: {
            currency: 'ARS',
            amount: 59300,
            decimals: '00',
          },
          picture: 'Picture url',
          condition: 'new',
          free_shipping: true,
          state: 'State',
        },
      ],
      categories: ['category1']
    },
    loading: false,
    error: '',
  }
 * return (
 *   <SearchResults 
 *    redirectSearchItems={()=>{})}
 *    requestSearchItems={()=>{})} 
 *    items={items} 
 *    search='search term' />
 * )
 */
const SearchResults = ({
  redirectSearchItems,
  requestSearchItems,
  items,
  search,
}) => {
  useEffect(() => {
    if (search) requestSearchItems(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <>
      <SearchNavbar
        onSearch={redirectSearchItems}
        initialSearchTerm={search ? search : ''}
      />
      <BreadCrums categories={items.data.categories} />
      <ContentContainer>
        <ItemsList
          items={items.data.items}
          loading={items.loading}
          error={items.error}
        />
      </ContentContainer>
    </>
  );
};

SearchResults.propTypes = {
  /**
   * Items to render
   */
  items: PropTypes.shape({
    data: PropTypes.shape({
      categories: PropTypes.array,
      items: PropTypes.array,
    }),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    loading: PropTypes.bool,
  }),
  /**
   * Action to redirect if the search box event is triggered
   */
  redirectSearchItems: PropTypes.func,
  /**
   * Action to search the items to show
   */
  requestSearchItems: PropTypes.func,
  /**
   * Search term to use in the api call
   */
  search: PropTypes.string,
};

SearchResults.defaultProps = {
  redirectSearchItems: () => {},
  requestSearchItems: () => {},
};

export default SearchResults;
