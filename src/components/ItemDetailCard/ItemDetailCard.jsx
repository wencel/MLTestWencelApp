import PropTypes from 'prop-types';
import Styles from './ItemDetailCard.module.sass';
import Loading from 'components/Loading';
import CurrencyFormat from 'react-currency-format';
import Button from 'components/Button';

/**
 * Component to render an item card, it contains error state and loading state.
 *
 * @component
 * @example
 * const item = {
      id: 'id1',
      title: 'item Title',
      price: {
        currency: 'ARS',
        amount: 29999,
        decimals: '00',
      },
      picture: 'pic url',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 25,
      description: 'Item desc',
    },
  }
 * return (
 *   <ItemDetailCard item={item} loading={true} error=''/>
 * )
 */
const ItemDetailCard = ({ item, loading, error }) => {
  return (
    <>
      {!error && !loading && (
        <div className={Styles.ItemDetailCard}>
          <div className={Styles.imgContainer}>
            <img src={item.picture} alt='item img' />
          </div>
          <div className={Styles.infoContainer}>
            <div className={Styles.conditionContainer}>
              {item.condition === 'new' && 'Nuevo'}{' '}
              {item.condition === 'used' && 'Usado'} - {item.sold_quantity}{' '}
              vendidos
            </div>
            <div className={Styles.titleContainer}>{item.title}</div>
            <div className={Styles.priceContainer}>
              <CurrencyFormat
                value={item.price?.amount}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
              <div className={Styles.decimalsContainer}>
                {item.price?.decimals}
              </div>
            </div>
            <div className={Styles.buttonContainer}>
              <Button theme='blueTheme'>Comprar</Button>
            </div>
          </div>
          <div>
            <div className={Styles.descriptionTitleContainer}>
              Descripción del producto
            </div>
            <div className={Styles.descriptionContainer}>
              {item.description}
            </div>
          </div>
        </div>
      )}
      {loading && <Loading />}
      {error && <div>{error}</div>}
    </>
  );
};

ItemDetailCard.propTypes = {
  /**
   * error to show
   */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Information about the item to be shown
   */
  item: PropTypes.shape({
    condition: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    price: PropTypes.shape({
      amount: PropTypes.number,
      decimals: PropTypes.string,
    }),
    sold_quantity: PropTypes.number,
    title: PropTypes.any,
  }),
  /**
   * Loading flag
   */
  loading: PropTypes.bool,
};

export default ItemDetailCard;
