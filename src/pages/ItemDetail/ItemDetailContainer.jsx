import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  redirectSearchItems,
  requestFetchItem,
} from 'reducers/item/itemActions';
import { selectedItemSelector } from 'reducers/item/itemSelectors';
import ItemDetail from './ItemDetail';

/**
 * Composed component for the item detail page,
 * it uses redux compose to pass actions and info from the state.
 */
const ItemDetailContainer = ({
  redirectSearchItems,
  requestFetchItem,
  item,
}) => {
  /**
   * id retrieved from the url params
   */
  const { id } = useParams();
  return (
    <ItemDetail
      redirectSearchItems={redirectSearchItems}
      requestFetchItem={requestFetchItem}
      item={item}
      id={id}
    />
  );
};

ItemDetailContainer.propTypes = {
  /**
   * item retrieved from the state
   */
  item: PropTypes.object,
  /**
   * action dispatched to redirect to the results search page
   */
  redirectSearchItems: PropTypes.func,
  /**
   * action dispatched to fetch an item by id
   */
  requestFetchItem: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    item: selectedItemSelector(state),
  };
};

const mapDispatchToProps = dispatch => ({
  redirectSearchItems: data => {
    dispatch(redirectSearchItems(data));
  },
  requestFetchItem: data => {
    dispatch(requestFetchItem(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetailContainer);
