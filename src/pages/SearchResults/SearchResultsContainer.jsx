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

const SearchResultsContainer = ({
  redirectSearchItems,
  requestSearchItems,
  items,
}) => {
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
