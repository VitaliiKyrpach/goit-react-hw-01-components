import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';
import { StatList } from 'components/StatList/StatList';
import data from '../../data/data.json';
export const Statistics = ({ title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <StatList data={data} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
