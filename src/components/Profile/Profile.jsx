import { Description } from '../Description/Description';
import { SocList } from 'components/SocList/SocList';
import data from '../../data/user.json';
import css from './Profile.module.css';
export const Profile = () => {
  return (
    <div className={css.profile}>
      <Description info={data} />
      <SocList />
    </div>
  );
};
