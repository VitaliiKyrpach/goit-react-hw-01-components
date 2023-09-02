import { PropTypes } from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionHead } from 'components/TransactionHead/TransactionHead';
import { TransactionBody } from 'components/TransactionBody/TransactionBody';
export const TransactionHistory = ({ data }) => {
  return (
    <table className={css.transactionHistory}>
      <TransactionHead />
      <TransactionBody data={data} />
    </table>
  );
};
TransactionHistory.propTypes = {
  data: PropTypes.array.isRequired,
};
