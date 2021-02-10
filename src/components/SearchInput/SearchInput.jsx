import PropTypes from 'prop-types';
import Styles from './SearchInput.module.sass';
import glassImg from 'assets/img/mlGlass.png';

const SearchInput = ({
  onSearch,
  inputProps,
  buttonProps,
  value,
  onChange,
}) => {
  const submitForm = e => {
    e.preventDefault();
    onSearch(value);
  };
  return (
    <form className={Styles.SearchInput} onSubmit={submitForm}>
      <input {...inputProps} value={value} onChange={onChange} />
      <button {...buttonProps}>
        <img src={glassImg} alt='Search Img' />
      </button>
    </form>
  );
};

SearchInput.defaultProps = {
  onSearch: () => {},
  buttonProps: {},
  inputProps: {},
};

SearchInput.propTypes = {
  buttonProps: PropTypes.object,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  value: PropTypes.string,
};

export default SearchInput;
