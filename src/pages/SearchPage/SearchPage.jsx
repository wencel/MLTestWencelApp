import PropTypes from 'prop-types';
import SearchNavbar from 'components/SearchNavbar';

const SearchPage = ({ redirectSearchItems }) => {
  return <SearchNavbar onSearch={redirectSearchItems} />;
};

SearchPage.propTypes = {
  redirectSearchItems: PropTypes.func,
};

export default SearchPage;
