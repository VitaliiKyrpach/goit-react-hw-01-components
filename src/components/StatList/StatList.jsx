import { PropTypes } from 'prop-types';
import css from './StatList.module.css';
import { StatItem } from 'components/StatItem/StatItem';
export const StatList = ({ data }) => {
  return (
    <ul className={css.statList}>
      {data.map(({ id, label, percentage }) => (
        <StatItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};
StatList.propTypes = {
  data: PropTypes.array.isRequired,
};
