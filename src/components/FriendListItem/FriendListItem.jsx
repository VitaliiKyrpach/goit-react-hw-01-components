import { PropTypes } from 'prop-types';
import css from './FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  const classNames = [css.status];
  if (isOnline) classNames.push(css.Online);
  if (!isOnline) classNames.push(css.Offline);
  return (
    <li className={css.item}>
      <span className={classNames.join(' ')}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
