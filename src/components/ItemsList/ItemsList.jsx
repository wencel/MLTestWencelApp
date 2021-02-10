import PropTypes from 'prop-types';
import Styles from './ItemsList.module.sass';
import ListItem from 'components/ListItem';
import Loading from 'components/Loading';

const ItemsList = ({ items, loading, error }) => {
  return (
    <div className={Styles.ItemsList}>
      {!error &&
        !loading &&
        items.map((item, index) => (
          <ListItem
            item={item}
            className={index !== 0 ? Styles.upperBorder : ''}
          />
        ))}
      {loading && <Loading />}
      {error && <div>{error}</div>}
    </div>
  );
};

ItemsList.propTypes = {
  error: PropTypes.string,
  items: PropTypes.array,
  loading: PropTypes.bool,
};

export default ItemsList;
