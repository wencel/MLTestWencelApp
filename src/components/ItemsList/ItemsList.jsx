import PropTypes from 'prop-types';
import Styles from './ItemsList.module.sass';
import ListItem from 'components/ListItem';
import Loading from 'components/Loading';

const ItemsList = ({ items, loading, error }) => {
  return (
    <>
      {!error && !loading && (
        <div className={Styles.ItemsList}>
          {items.map((item, index) => (
            <ListItem
              key={item.id}
              item={item}
              className={index !== 0 ? Styles.upperBorder : ''}
            />
          ))}
        </div>
      )}
      {loading && <Loading />}
      {error && <div>{error}</div>}
    </>
  );
};

ItemsList.propTypes = {
  categories: PropTypes.array,
  error: PropTypes.string,
  items: PropTypes.array,
  loading: PropTypes.bool,
};

export default ItemsList;
