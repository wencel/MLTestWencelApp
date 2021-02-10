import PropTypes from 'prop-types';
import Styles from './BreadCrums.module.sass';

const BreadCrums = ({ categories }) => {
  return <div className={Styles.BreadCrums}>{categories.join(' > ')}</div>;
};

BreadCrums.propTypes = {
  children: PropTypes.any,
};

export default BreadCrums;
