import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  redirectSearchItems,
  requestSearchItems,
} from 'reducers/item/itemActions';
import { itemsSelector } from 'reducers/item/itemSelectors';
import { getQueryTextParams } from 'utils/utils';
import SearchResults from './SearchResults';

/**
 * Composed component for the search results page,
 * it uses redux compose to pass actions and info from the state.
 */
const SearchResultsContainer = ({
  redirectSearchItems,
  requestSearchItems,
  items,
}) => {
  // Function to retrieve url text query params
  const search = getQueryTextParams(useLocation().search).search || '';
  return (
    <SearchResults
      redirectSearchItems={redirectSearchItems}
      requestSearchItems={requestSearchItems}
      items={items}
      search={search}
    />
  );
};

SearchResultsContainer.propTypes = {
  /**
   * items retrieved from the state
   */
  items: PropTypes.shape({
    data: PropTypes.shape({
      categories: PropTypes.arrayOf(PropTypes.string),
      items: PropTypes.arrayOf(PropTypes.object),
    }),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    loading: PropTypes.bool,
  }),
  /**
   * action dispatched to redirect to the results search page
   */
  redirectSearchItems: PropTypes.func,
  /**
   * action dispatched to search items with a query
   */
  requestSearchItems: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    items: itemsSelector(state),
  };
};

const mapDispatchToProps = dispatch => ({
  redirectSearchItems: data => {
    dispatch(redirectSearchItems(data));
  },
  requestSearchItems: data => {
    dispatch(requestSearchItems(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsContainer);
