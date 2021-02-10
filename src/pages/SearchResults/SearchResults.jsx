import PropTypes from 'prop-types';
import SearchNavbar from 'components/SearchNavbar';
import { useEffect } from 'react';
import ItemsList from 'components/ItemsList';
import BreadCrums from 'components/BreadCrums';
import ContentContainer from 'components/ContentContainer';

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
  items: PropTypes.shape({
    data: PropTypes.shape({
      categories: PropTypes.array,
      items: PropTypes.array,
    }),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    loading: PropTypes.bool,
  }),
  redirectSearchItems: PropTypes.func,
  requestSearchItems: PropTypes.func,
  search: PropTypes.string,
};

SearchResults.defaultProps = {
  redirectSearchItems: () => {},
  requestSearchItems: () => {},
};

export default SearchResults;
