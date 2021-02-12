import PropTypes from 'prop-types';
import Styles from './BreadCrums.module.sass';

/**
 * Component for showing the breadcrums at the top of the page.
 *
 * @component
 * @example
 * const categories = ['category1', 'category2]
 * return (
 *   <BreadCrums categories={categories} />
 * )
 */
const BreadCrums = ({ categories }) => {
  return <div className={Styles.BreadCrums}>{categories.join(' > ')}</div>;
};

BreadCrums.propTypes = {
  /**
   * Categories array
   */
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default BreadCrums;
