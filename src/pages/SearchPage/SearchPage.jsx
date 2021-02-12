import PropTypes from 'prop-types';
import SearchNavbar from 'components/SearchNavbar';

/**
 * Component to render the search page.
 *
 * @component
 * @example
 * return (
 *   <SearchPage redirectSearchItems={()=>{})} />
 * )
 */
const SearchPage = ({ redirectSearchItems }) => {
  return <SearchNavbar onSearch={redirectSearchItems} />;
};

SearchPage.propTypes = {
  /**
   * Action to redirect if the search box event is triggered
   */
  redirectSearchItems: PropTypes.func,
};

export default SearchPage;
