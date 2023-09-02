import { SocItem } from '../SocItem/SocItem';
import data from '../../data/user.json';
import css from './SocList.module.css';
export const SocList = () => {
  const { followers, views, likes } = data.stats;
  return (
    <ul className={css.stats}>
      <SocItem stats={followers} text="Followers" />
      <SocItem stats={views} text="Views" />
      <SocItem stats={likes} text="Likes" />
    </ul>
  );
};
