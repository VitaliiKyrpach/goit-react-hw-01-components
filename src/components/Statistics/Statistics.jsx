import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';
import { StatList } from 'components/StatList/StatList';
export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <StatList data={data} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
