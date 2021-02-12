import PropTypes from 'prop-types';
import Styles from './Button.module.sass';

/**
 * Component for rendering a styled Button.
 *
 * @component
 * @example
 * const theme = 'blueTheme'
 * return (
 *   <Button theme={theme} onClick={()=>{}}>This is a button</Button>
 * )
 */
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
  /**
   * What goes inside the button
   */
  children: PropTypes.any,
  /**
   * The theme to use as a class to style the component
   */
  theme: PropTypes.string,
};

export default Button;
