import PropTypes from 'prop-types';
import Styles from './ContentContainer.module.sass';

/**
 * Component to use as a container card for the page content.
 *
 * @component
 * @example
 * return (
 *   <ContentContainer> Contente goes here</ContentContainer>
 * )
 */
const ContentContainer = ({ children }) => {
  return <div className={Styles.ContentContainer}>{children}</div>;
};

ContentContainer.propTypes = {
  /**
   * What goes inside the button
   */
  children: PropTypes.any,
};

export default ContentContainer;
