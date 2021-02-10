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

const ItemDetailContainer = ({
  redirectSearchItems,
  requestFetchItem,
  item,
}) => {
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
  item: PropTypes.object,
  redirectSearchItems: PropTypes.func,
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
