import PropTypes from 'prop-types';
import Styles from './SearchNavbar.module.sass';
import logoImg from 'assets/img/mlLogo.png';
import SearchInput from 'components/SearchInput';
import { useState } from 'react';

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
  initialSearchTerm: PropTypes.string,
  onSearch: PropTypes.func,
};

export default SearchNavbar;
