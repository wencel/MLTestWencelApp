import PropTypes from 'prop-types';
import Styles from './ContentContainer.module.sass';

const ContentContainer = ({ children }) => {
  return <div className={Styles.ContentContainer}>{children}</div>;
};

ContentContainer.propTypes = {
  children: PropTypes.any,
};

export default ContentContainer;
