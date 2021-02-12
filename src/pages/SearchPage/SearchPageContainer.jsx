import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { redirectSearchItems } from 'reducers/item/itemActions';
import SearchPage from './SearchPage';

/**
 * Composed component for the search page,
 * it uses redux compose to pass actions and info from the state.
 */
const SearchPageContainer = ({ redirectSearchItems }) => {
  return <SearchPage redirectSearchItems={redirectSearchItems} />;
};

SearchPageContainer.propTypes = {
  redirctSearchItems: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  /**
   * action dispatched to redirect to the results search page
   */
  redirectSearchItems: data => {
    dispatch(redirectSearchItems(data));
  },
});

export default connect(null, mapDispatchToProps)(SearchPageContainer);
