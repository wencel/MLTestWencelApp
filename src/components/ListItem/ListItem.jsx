import PropTypes from 'prop-types';
import Styles from './ListItem.module.sass';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import freeShippingIcon from 'assets/img/freeShipping.png';

const ListItem = ({ item, className }) => {
  return (
    <Link
      className={`${Styles.ListItem} ${className}`}
      to={`/items/${item.id}`}
    >
      <div className={Styles.imgContainer}>
        <img src={item.picture} alt={item.name} />
      </div>
      <div className={Styles.itemTitle}>
        <div>
          <CurrencyFormat
            value={item.price.amount}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            className={Styles.itemPrice}
          />
          {item.free_shipping ? (
            <img src={freeShippingIcon} alt='free shipping' />
          ) : (
            ''
          )}
        </div>
        <div className={Styles.itemName}>{item.title}</div>
      </div>
      <div className={Styles.itemState}>{item.state}</div>
    </Link>
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.shape({
    free_shipping: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    price: PropTypes.shape({
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    state: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default ListItem;
