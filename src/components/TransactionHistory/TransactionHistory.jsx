import css from './TransactionHistory.module.css';
import { TransactionHead } from 'components/TransactionHead/TransactionHead';
import { TransactionBody } from 'components/TransactionBody/TransactionBody';
export const TransactionHistory = () => {
  return (
    <table className={css.transactionHistory}>
      <TransactionHead />
      <TransactionBody />
    </table>
  );
};
