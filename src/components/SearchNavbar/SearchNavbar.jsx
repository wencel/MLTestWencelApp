import PropTypes from 'prop-types';
import Styles from './SearchNavbar.module.sass';
import logoImg from 'assets/img/mlLogo.png';
import SearchInput from 'components/SearchInput';
import { useState } from 'react';

/**
 * Component to render the upper search navbar.
 *
 * @component
 * @example
 * return (
 *   <SearchNavbar onSearch={()=>{})} initialSearchTerm='term' />
 * )
 */
const SearchNavbar = ({ onSearch, initialSearchTerm }) => {
  const [queryText, setQueryText] = useState(initialSearchTerm);

  return (
    <nav className={Styles.SearchNavbar}>
      <div className={Styles.searchContainer}>
        <img className={Styles.mlLogo} src={logoImg} alt='ML logo' />
        <SearchInput
          inputProps={{
            placeholder: 'Nunca dejes de buscar',
          }}
          value={queryText}
          onChange={e => setQueryText(e.target.value)}
          onSearch={onSearch}
        />
      </div>
    </nav>
  );
};

SearchNavbar.defaultProps = {
  initialSearchTerm: '',
  onSearch: () => {},
};

SearchNavbar.propTypes = {
  /**
   * Value to prefill the search box on mount
   */
  initialSearchTerm: PropTypes.string,
  /**
   * Function to trigger the search event
   */
  onSearch: PropTypes.func,
};

export default SearchNavbar;
