import { PropTypes } from 'prop-types';
import { SocItem } from '../SocItem/SocItem';
import css from './SocList.module.css';
export const SocList = ({ data }) => {
  const { followers, views, likes } = data.stats;
  return (
    <ul className={css.stats}>
      <SocItem stats={followers} text="Followers" />
      <SocItem stats={views} text="Views" />
      <SocItem stats={likes} text="Likes" />
    </ul>
  );
};
SocList.propTypes = {
  data: PropTypes.object.isRequired,
};
