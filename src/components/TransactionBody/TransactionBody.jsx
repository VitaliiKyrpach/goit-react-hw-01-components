import data from '../../data/transactions.json';
import { TransactionRow } from 'components/TransactionRow/TransactionRow';
export const TransactionBody = () => {
  return (
    <tbody>
      {data.map(({ id, type, amount, currency }) => {
        return (
          <TransactionRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
      })}
    </tbody>
  );
};
