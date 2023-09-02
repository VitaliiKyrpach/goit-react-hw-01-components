import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import data from '../../data/friends.json';
import css from './FriendList.module.css';
export const FriendList = () => {
  return (
    <ul className={css.friendList}>
      {data.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};
