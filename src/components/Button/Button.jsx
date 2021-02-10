import PropTypes from 'prop-types';
import Styles from './Button.module.sass';

const Button = ({ theme, children, ...restProps }) => {
  return (
    <button className={`${Styles.Button} ${Styles[theme]}`} {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'basic',
};

Button.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string,
};

export default Button;
