import PropTypes from 'prop-types';
import css from './SocItem.module.css';
export const SocItem = ({ stats, text }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{text}</span>
      <span className={css.quantity}>{stats}</span>
    </li>
  );
};
SocItem.propTypes = {
  text: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
