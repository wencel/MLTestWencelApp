import PropTypes from 'prop-types';
import SearchNavbar from 'components/SearchNavbar';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailCard from 'components/ItemDetailCard';
import BreadCrums from 'components/BreadCrums';
import ContentContainer from 'components/ContentContainer';

const ItemDetail = ({ item, redirectSearchItems, requestFetchItem }) => {
  const { id } = useParams();
  useEffect(() => {
    if (id) requestFetchItem(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log(item);
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
  item: PropTypes.object,
  redirectSearchItems: PropTypes.func,
  requestFetchItem: PropTypes.func,
};

ItemDetail.defaultProps = {
  redirectSearchItems: () => {},
  requestFetchItem: () => {},
};

export default ItemDetail;
