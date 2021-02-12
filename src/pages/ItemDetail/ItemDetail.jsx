import PropTypes from 'prop-types';
import SearchNavbar from 'components/SearchNavbar';
import { useEffect } from 'react';
import ItemDetailCard from 'components/ItemDetailCard';
import BreadCrums from 'components/BreadCrums';
import ContentContainer from 'components/ContentContainer';

/**
 * Component to render the item detail page.
 *
 * @component
 * @example
 * const item = {
    data: {
      id: 'id1',
      title: 'title',
      price: {
        currency: 'ARS',
        amount: 59300,
        decimals: '00',
      },
      picture: 'picture url',
      condition: 'new',
      free_shipping: true,
      state: 'state',
    },
    loading: false,
    error: '',
  }
 * return (
 *   <ItemDetail 
 *    requestFetchItem={()=>{})}
 *    redirectSearchItems={()=>{})} 
 *    item={item} 
 *    id='id1' />
 * )
 */
const ItemDetail = ({ item, redirectSearchItems, requestFetchItem, id }) => {
  useEffect(() => {
    if (id) requestFetchItem(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <SearchNavbar onSearch={redirectSearchItems} />
      <BreadCrums categories={[]} />
      <ContentContainer>
        <ItemDetailCard
          item={item.data}
          loading={item.loading}
          error={item.error}
        />
      </ContentContainer>
    </>
  );
};

ItemDetail.propTypes = {
  /**
   * ID of the item to fetch
   */
  id: PropTypes.string,
  /**
   * Item to render
   */
  item: PropTypes.object,
  /**
   * Action to redirect if the search box event is triggered
   */
  redirectSearchItems: PropTypes.func,
  /**
   * Action to fetch the item to show
   */
  requestFetchItem: PropTypes.func,
};

ItemDetail.defaultProps = {
  redirectSearchItems: () => {},
  requestFetchItem: () => {},
};

export default ItemDetail;
