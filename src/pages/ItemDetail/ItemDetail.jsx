import PropTypes from 'prop-types';
import SearchNavbar from 'components/SearchNavbar';
import { useEffect } from 'react';
import ItemDetailCard from 'components/ItemDetailCard';
import BreadCrums from 'components/BreadCrums';
import ContentContainer from 'components/ContentContainer';

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
  id: PropTypes.string,
  item: PropTypes.object,
  redirectSearchItems: PropTypes.func,
  requestFetchItem: PropTypes.func,
};

ItemDetail.defaultProps = {
  redirectSearchItems: () => {},
  requestFetchItem: () => {},
};

export default ItemDetail;
