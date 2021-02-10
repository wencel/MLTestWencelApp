import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { redirectSearchItems } from 'reducers/item/itemActions';
import SearchPage from './SearchPage';

const SearchPageContainer = ({ redirectSearchItems }) => {
  return <SearchPage redirectSearchItems={redirectSearchItems} />;
};

SearchPageContainer.propTypes = {
  redirctSearchItems: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  redirectSearchItems: data => {
    dispatch(redirectSearchItems(data));
  },
});

export default connect(null, mapDispatchToProps)(SearchPageContainer);
