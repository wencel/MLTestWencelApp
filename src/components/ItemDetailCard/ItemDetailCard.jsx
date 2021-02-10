import PropTypes from 'prop-types';
import Styles from './ItemDetailCard.module.sass';
import Loading from 'components/Loading';
import CurrencyFormat from 'react-currency-format';
import Button from 'components/Button';

const ItemDetailCard = ({ item, loading, error }) => {
  return (
    <>
      {!error && !loading && (
        <div className={Styles.ItemDetailCard}>
          <div className={Styles.imgContainer}>
            <img src={item.picture} alt='item img' />
          </div>
          <div className={Styles.infoContainer}>
            <div>
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
            <div>
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
  error: PropTypes.string,
  item: PropTypes.object,
  loading: PropTypes.bool,
};

export default ItemDetailCard;
