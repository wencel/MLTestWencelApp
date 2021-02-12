import Styles from './Loading.module.sass';

/**
 * Component for rendering a loading spinner.
 *
 * @component
 * @example
 * return (
 *   <Loading />
 * )
 */
const Loading = () => {
  return <div className={Styles.Loading} />;
};

export default Loading;
