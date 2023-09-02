import { PropTypes } from 'prop-types';
import css from './Description.module.css';
export const Description = ({ info }) => {
  const { username, tag, location, avatar } = info;
  return (
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  info: PropTypes.object.isRequired,
};
