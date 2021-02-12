import PropTypes from 'prop-types';
import Styles from './ItemsList.module.sass';
import ListItem from 'components/ListItem';
import Loading from 'components/Loading';

/**
 * Component for rendering s list of items.
 *
 * @component
 * @example
 * const items = [{
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
    }],
 * return (
 *   <ItemsList items={items} loading={true} error=''/>
 * )
 */
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
  /**
   * error to show
   */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Array of items to be shown
   */
  items: PropTypes.arrayOf(PropTypes.object),
  /**
   * Loading flag
   */
  loading: PropTypes.bool,
};

export default ItemsList;
