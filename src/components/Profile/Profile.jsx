import { PropTypes } from 'prop-types';
import { Description } from '../Description/Description';
import { SocList } from 'components/SocList/SocList';
import css from './Profile.module.css';
export const Profile = ({ data }) => {
  return (
    <div className={css.profile}>
      <Description info={data} />
      <SocList data={data} />
    </div>
  );
};
Profile.propTypes = {
  data: PropTypes.object.isRequired,
};
