import { PropTypes } from 'prop-types';
import { TransactionRow } from 'components/TransactionRow/TransactionRow';
export const TransactionBody = ({ data }) => {
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
TransactionBody.propTypes = {
  data: PropTypes.array.isRequired,
};
