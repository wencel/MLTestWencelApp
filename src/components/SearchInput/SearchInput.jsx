import PropTypes from 'prop-types';
import Styles from './SearchInput.module.sass';
import glassImg from 'assets/img/mlGlass.png';

/**
 * Component with a text input and an button to search content.
 *
 * @component
 * @example
 * const inputProps = {
    type: 'text'
  }
  * const buttonProps = {
    onClick: ()=>{},
    className: 'clasname'
  }
 * return (
 *   <SearchInput 
 *     onSearch={()=>{})} 
 *     onChange={()=>{})} 
 *     buttonProps={buttonProps} 
 *     inputProps={inputProps} 
 *     value={value} 
 *   />
 * )
 */
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
  /**
   * Any prop that can be passed to a standard button tag
   */
  buttonProps: PropTypes.object,
  /**
   * Any prop that can be passed to a standard input tag except
   * the `onChange` and `value` props which are managed separately
   */
  inputProps: PropTypes.object,
  /**
   * The onchage event for the input
   */
  onChange: PropTypes.func,
  /**
   * The onSubmit event for the form
   */
  onSearch: PropTypes.func,
  /**
   * the value prop of the input
   */
  value: PropTypes.string,
};

export default SearchInput;
